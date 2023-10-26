<?php 
namespace DaVinci\Auth;

use DateTime;
use Exception;
use PDO;
use DaVinci\Security\Hash;
use DaVinci\Models\Usuario;
use DaVinci\DB\DB;
use DaVinci\Mail\Mailer;

class RestablecerPassword
{
	private Usuario $usuario;
	private string $token;
	private array $filaDB;

	public function actualizar(Usuario $usuario, string $password, string $token) 
	{
		$this->usuario = $usuario;
		$this->token = $token;
		if(!$this->datosValidos()) {
			throw new \Exception("Los datos no coinciden.");
		}

		$this->usuario->actualizarPassword(Hash::crear($password));
		$this->removerToken();
	}

	/**
	 * Verifica que el token sea correcto.
	 * Esto requiere verificar 3 cosas:
	 * - Que exista ese token en la base de datos.
	 * - Que ese token corresponda al usuario que está tratando de cambiar el email.
	 * - Que el token esté en vigencia.
	 */
	private function datosValidos(): bool
	{
		return $this->tokenValido() 
			&& $this->tokenPerteneceAUsuario() 
			&& $this->tokenNoExpirado();
	}

	private function tokenValido(): bool
	{
		$db = DB::getConexion();
		$query = "SELECT * FROM restablecer_passwords 
				WHERE token = :token";
		$stmt = $db->prepare($query);
		$stmt->execute([
			'token' => $this->token,
		]);
		
		$fila = $stmt->fetch(PDO::FETCH_ASSOC);
		if(!$fila) return false;

		$this->filaDB = $fila;
		return true;
	}

	private function tokenPerteneceAUsuario(): bool
	{
		return $this->usuario->getUsuarioId() == $this->filaDB['usuario_id'];
	}

	private function tokenNoExpirado(): bool
	{
		// Verificamos si la fecha de expiración no pasó aún.
		// La comparación de fechas en php se puede hacer de una manera muy simple con
		// ayuda de la clase DateTime.
		$fechaActual = new DateTime(); // Obtenemos la fecha actual.
		$fechaExpiracion = new DateTime($this->filaDB['fecha_expiracion']); // Obtenemos la fecha de expiración como una instancia de DateTime.

		// Si tenemos las dos fechas como instancias de DateTime, php nos permite hacer una
		// comparación como si fueran valores numéricos.
		return $fechaActual < $fechaExpiracion;
	}

	private function removerToken()
	{
		$db = DB::getConexion();
		$query = "DELETE FROM restablecer_passwords 
				WHERE usuario_id = :usuario_id";
		$stmt = $db->prepare($query);
		$stmt->execute(['usuario_id' => $this->usuario->getUsuarioId()]);
	}

	public function enviarEmail(Usuario $usuario)
	{
		$this->usuario = $usuario;
		$this->token = Hash::generarToken();
		
		// Borramos el token anterior antes de crear uno nuevo.
		$this->removerToken();
		// Usando propiedades.
		$this->grabarToken();
		$this->hacerEnvioDeEmail();

		// Usando parámetros de las funciones.
		// $this->grabarToken($usuario, $token);
		// $this->hacerEnvioDeEmail($usuario, $token);
	}

	private function grabarToken()
	{
		$db = DB::getConexion();
		$query = "INSERT INTO restablecer_passwords (usuario_id, token, fecha_expiracion)
				VALUES (:usuario_id, :token, :fecha_expiracion)";
		$stmt = $db->prepare($query);
		$stmt->execute([
			'usuario_id' 		=> $this->usuario->getUsuarioId(),
			'token' 			=> $this->token,
			'fecha_expiracion'	=> $this->getFechaExpiracion(),
		]);
	}

	/**
	 * Hace el envío del email. Versión con PHPMailer y MailHog.
	 */
	private function hacerEnvioDeEmail()
	{
		$mailer = new Mailer();

		try {
			$url = "http://localhost/santiago/proyecto/index.php?s=nuevo-password&token=" . $this->token . "&email=" . $this->usuario->getEmail();

			$emailTemplate = __DIR__ . '/../../email-templates/restablecer-password.html';

			$mailer
		    	->setSubject("Restablecer Password :: Saraza Basket")
				->addAddress($this->usuario->getEmail())
		    	->loadHTMLBodyFromTemplate($emailTemplate, [
		    		'@@EMAIL@@' => $this->usuario->getEmail(),
		    		'@@URL@@' => $url,
		    	])
		    	->send();
		} catch (Exception $e) {
			$email = $mailer->getMailer();
			file_put_contents(__DIR__ . '/../../emails-fallidos/restablecer-password_' . $this->usuario->getEmail() . "_" . date('YmdHis') . ".html", $email->Body);
		}
	}

	/**
	 * Hace el envío del email. Versión con PHPMailer y mailtrap.
	 */
	private function hacerEnvioDeEmailMailtrap()
	{
		$mailer = new Mailer;
		$email = $mailer->getMailer();

		try {
			$url = "http://localhost/santiago/proyecto/index.php?s=nuevo-password&token=" . $this->token . "&email=" . $this->usuario->getEmail();

			$emailTemplate = __DIR__ . '/../../email-templates/restablecer-password.html';
			$cuerpo = file_get_contents($emailTemplate);
			$cuerpo = str_replace('@@EMAIL@@', $destinatario, $cuerpo);
			$cuerpo = str_replace('@@URL@@', $url, $cuerpo);

			$email->isSMTP();
			$email->Host = 'smtp.mailtrap.io';
			$email->SMTPAuth = true;
			$email->Port = 2525;
			$email->Username = 'fc9f733a9d9127';
			$email->Password = '5a92dec24e188d';

		    $email->setFrom('no-responder@saraza-basket.com', 'Saraza Basket');
		    $email->addAddress($this->usuario->getEmail());
		    $email->isHTML();
		    $email->Subject = "Restabelcer Contraseña :: Saraza Basket";
		    $email->Body = $cuerpo;

		    $email->send();
		} catch (Exception $e) {
			file_put_contents(__DIR__ . '/../../emails-fallidos/restablecer-password_' . $destinatario . "_" . date('YmdHis') . ".html", $cuerpo);
		}
	}

	/**
	 * Hace el envío del email. Versión con PHPMailer.
	 */
	private function hacerEnvioDeEmailPHPMailer()
	{
		$mailer = new Mailer;
		$email = $mailer->getMailer();

		try {
			$url = "http://localhost/santiago/proyecto/index.php?s=nuevo-password&token=" . $this->token . "&email=" . $this->usuario->getEmail();

			$emailTemplate = __DIR__ . '/../../email-templates/restablecer-password.html';
			$cuerpo = file_get_contents($emailTemplate);
			$cuerpo = str_replace('@@EMAIL@@', $destinatario, $cuerpo);
			$cuerpo = str_replace('@@URL@@', $url, $cuerpo);

			$email->isSMTP();
			$email->Host       = 'localhost';
		    // $email->SMTPAuth   = true;
		    // $email->Username   = 'user@example.com';
		    // $email->Password   = 'secret';
		    // $email->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
		    $email->Port       = 25;

		    $email->setFrom('no-responder@saraza-basket.com', 'Saraza Basket');
		    $email->addAddress($this->usuario->getEmail());
		    $email->isHTML();
		    $email->Subject = "Restabelcer Contraseña :: Saraza Basket";
		    $email->Body = $cuerpo;

		    $email->send();
		} catch (Exception $e) {
			file_put_contents(__DIR__ . '/../../emails-fallidos/restablecer-password_' . $destinatario . "_" . date('YmdHis') . ".html", $cuerpo);
		}
	}

	/**
	 * Hace el envío del email. Versión HTML con uso de templates.
	 */
	private function hacerEnvioDeEmailHTMLTemplate()
	{
		$url = "http://localhost/santiago/proyecto/index.php?s=nuevo-password&token=" . $this->token . "&email=" . $this->usuario->getEmail();

		// Para poder enviar un email, php incluye una función mail(), que recibe
		// de 3 a 4 parámetros: destinatario, asunto, cuerpo, headers.
		$destinatario = $this->usuario->getEmail();
		$asunto = "Restabelcer Contraseña :: Saraza Basket";
		// Si queremos enviar un email con formato de HTML, hay 2 cosas que 
		// tenemos que hacer:
		// 1. Armar el HTML como cuerpo del email.
		// 2. Agregar los headers necesarios al envío del email.
		// Para no tener el HTML como string incrustado en el código php, vamos
		// a levantarlo de un archivo de template.
		$emailTemplate = __DIR__ . '/../../email-templates/restablecer-password.html';
		$cuerpo = file_get_contents($emailTemplate);
		// Ajustamos los "holders" del template, que están identificados con 
		// @@NOMBRE@@.
		$cuerpo = str_replace('@@EMAIL@@', $destinatario, $cuerpo);
		$cuerpo = str_replace('@@URL@@', $url, $cuerpo);

		// Los headers son técnicamente opcionales, pero casi siempre vamos a 
		// querer definir algunos. Especialmente el "From" para indicar la 
		// dirección de email con la cual "firmamos".
		// Los headers deben ser un una lista de "Clave: valor" separados por
		// saltos de línea.
		$headers = [
			'From: no-responder@saraza-basket.com',
			// Estos dos headers son los que le avisan al cliente de email que
			// el contenido es HTML.
			'MIME-Version: 1.0',
			'Content-Type: text/html; charset=utf-8',
		];

		// La función mail() retorna true o false dependiendo de si el email 
		// parece que se envió correctamente o no.
		if( !mail($destinatario, $asunto, $cuerpo, implode("\r\n", $headers)) ) {
			// throw new Exception("El email no pudo ser enviado.");
			// En vez de lanzar la Exception, vamos a guardar en disco una versión
			// como texto del email.
			file_put_contents(__DIR__ . '/../../emails-fallidos/restablecer-password_' . $destinatario . "_" . date('YmdHis') . ".html", $cuerpo);
		}
	}

	/**
	 * Hace el envío del email. Versión HTML.
	 */
	private function hacerEnvioDeEmailHTMLBasico()
	{
		$url = "http://localhost/santiago/proyecto/index.php?s=nuevo-password&token=" . $this->token . "&email=" . $this->usuario->getEmail();

		// Para poder enviar un email, php incluye una función mail(), que recibe
		// de 3 a 4 parámetros: destinatario, asunto, cuerpo, headers.
		$destinatario = $this->usuario->getEmail();
		$asunto = "Restabelcer Contraseña :: Saraza Basket";
		// Si queremos enviar un email con formato de HTML, hay 2 cosas que 
		// tenemos que hacer:
		// 1. Armar el HTML como cuerpo del email.
		// 2. Agregar los headers necesarios al envío del email.
		$cuerpo = '<!DOCTYPE html>
			<html lang="es">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Restablecer Contraseña :: Saraza Basket</title>
			</head>
			<body>
				<h1>Pedido de restablecimiento de contraseña</h1>

				<p>Hola <b>' . $this->usuario->getEmail() . '</b></p>

				<p>Recibimos una petición para restablecer tu contraseña.</p>
				<p>Si no fuiste vos, podés simplemente ignorar este correo.</p>

				<p>Para proceder, accedé a la URL a continuación:</p>

				<p>' . $url . '</p>

				<p>Saludos,<br>
				tus amigos de Saraza Basket.</p>
			</body>
			</html>';

		// Los headers son técnicamente opcionales, pero casi siempre vamos a 
		// querer definir algunos. Especialmente el "From" para indicar la 
		// dirección de email con la cual "firmamos".
		// Los headers deben ser un una lista de "Clave: valor" separados por
		// saltos de línea.
		$headers = [
			'From: no-responder@saraza-basket.com',
			// Estos dos headers son los que le avisan al cliente de email que
			// el contenido es HTML.
			'MIME-Version: 1.0',
			'Content-Type: text/html; charset=utf-8',
		];

		// La función mail() retorna true o false dependiendo de si el email 
		// parece que se envió correctamente o no.
		if( !mail($destinatario, $asunto, $cuerpo, implode("\r\n", $headers)) ) {
			// throw new Exception("El email no pudo ser enviado.");
			// En vez de lanzar la Exception, vamos a guardar en disco una versión
			// como texto del email.
			file_put_contents(__DIR__ . '/../../emails-fallidos/restablecer-password_' . $destinatario . "_" . date('YmdHis') . ".html", $cuerpo);
		}
	}

	/**
	 * Hace el envío del email.
	 */
	private function hacerEnvioDeEmailBasico()
	{
		$url = "http://localhost/santiago/proyecto/index.php?s=nuevo-password&token=" . $this->token . "&email=" . $this->usuario->getEmail();

		// Para poder enviar un email, php incluye una función mail(), que recibe
		// de 3 a 4 parámetros: destinatario, asunto, cuerpo, headers.
		$destinatario = $this->usuario->getEmail();
		$asunto = "Restabelcer Contraseña :: Saraza Basket";
		// Por defecto, el cuerpo del email debe ser texto plano con líneas de 70
		// caracteres.
		$cuerpo = "Hola " . $this->usuario->getEmail() . "

			Recibimos una petición para restablecer tu contraseña.
			Si no fuiste vos, podés simplemente ignorar este correo.

			Para proceder, accedé a la URL a continuación:

			" . $url . "

			Saludos,
			tus amigos de Saraza Basket.
		";

		// Los headers son técnicamente opcionales, pero casi siempre vamos a 
		// querer definir algunos. Especialmente el "From" para indicar la 
		// dirección de email con la cual "firmamos".
		// Los headers deben ser un una lista de "Clave: valor" separados por
		// saltos de línea.
		$headers = [
			'From: no-responder@saraza-basket.com',
		];

		// La función mail() retorna true o false dependiendo de si el email 
		// parece que se envió correctamente o no.
		if( !mail($destinatario, $asunto, $cuerpo, implode("\r\n", $headers)) ) {
			// throw new Exception("El email no pudo ser enviado.");
			// En vez de lanzar la Exception, vamos a guardar en disco una versión
			// como texto del email.
			file_put_contents(__DIR__ . '/../../emails-fallidos/restablecer-password_' . $destinatario . "_" . date('YmdHis') . ".txt", $cuerpo);
		}
	}

	/**
	 * Retorna la fecha actual, más una hora.
	 * 
	 * @return string
	 */
	private function getFechaExpiracion(): string
	{
		$date = new DateTime();
		$date->modify('+1 hour');
		return $date->format('Y-m-d H:i:s');
	}
}