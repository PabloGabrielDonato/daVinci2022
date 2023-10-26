<?php
use DaVinci\Auth\RestablecerPassword;
use DaVinci\Models\Usuario;
require_once __DIR__ . '/../bootstrap/init.php';

$password = $_POST['password'];
$email = $_POST['email'];
$token = $_POST['token'];

// TODO: Validar.
$errores = [];

$usuario = (new Usuario)->traerPorEmail($email);

// Podemos preguntar si existe un usuario con ese email.
if(!$usuario) {
	$errores['email'] = "El email ingresado no coincide con ningún usuario en nuestros registros.";
}

if(count($errores) > 0) {
	$_SESSION['data-form'] = $_POST;
	$_SESSION['errores'] = $errores;
	header("Location: ../index.php?s=nuevo-password&token=" . $token . "&email=" . $email);
	exit;
}

try {
	(new RestablecerPassword)->actualizar($usuario, $password, $token);

	$_SESSION['mensajeFeedback'] = "Tu contraseña se actualizó correctamente, ya podés iniciar sesión.";
	header("Location: ../index.php?s=iniciar-sesion");
	exit;
} catch (Exception $e) {
	$_SESSION['mensajeError'] = "Este link parece haber expirado o no ser válido. Por favor, si todavía lo necesitás, probá de pedir de nuevo el restablecimiento.";
	header("Location: ../index.php?s=restablecer-password");
	exit;
}