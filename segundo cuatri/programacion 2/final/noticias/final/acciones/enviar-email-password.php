<?php
use DaVinci\Auth\RestablecerPassword;
use DaVinci\Models\Usuario;
require_once __DIR__ . '/../bootstrap/init.php';

$email = $_POST['email'];

// TODO: Validar...
$errores = [];

$usuario = (new Usuario)->traerPorEmail($email);

// Podemos preguntar si existe un usuario con ese email.
if(!$usuario) {
	$errores['email'] = "El email ingresado no coincide con ningún usuario en nuestros registros.";
}

if(count($errores) > 0) {
	$_SESSION['data-form'] = $_POST;
	$_SESSION['errores'] = $errores;
	header("Location: ../index.php?s=restablecer-password");
	exit;
}

try {
	(new RestablecerPassword)->enviarEmail($usuario);

	$_SESSION['mensajeFeedback'] = "Se envió un correo a la casilla indicada. Seguí las instrucciones que contiene para restablecer tu contraseña.";
	header('Location: ../index.php?s=iniciar-sesion');
	exit;
} catch (Exception $e) {
	$_SESSION['mensajeError'] = "Ocurrió un error inesperado. " . $e->getMessage();
	$_SESSION['data-form'] = $_POST;
	header('Location: ../index.php?s=restablecer-password');
	exit;
}