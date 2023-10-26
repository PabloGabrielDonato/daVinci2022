<?php
use DaVinci\Models\Usuario;
use DaVinci\Security\Hash;

require_once __DIR__ . '/../bootstrap/init.php';

$email 		= $_POST['email'];
$password 	= $_POST['password'];

// TODO: Validar...

try {
	(new Usuario)->crear([
		'rol_fk' => 2, // Hardcodeamos que todo usuario que se registra debe ser un usuario común.
		'email' => $email,
		// Hasheamos el password antes de guardarlo.
		// 'password' => password_hash($password, PASSWORD_DEFAULT),
		'password' => Hash::crear($password),
	]);

	$_SESSION['mensajeFeedback'] = "¡Cuenta creada con éxito! Ya podés iniciar sesión.";
	header('Location: ../index.php?s=iniciar-sesion');
	exit;
} catch (Exception $e) {
	$_SESSION['data-form'] = $_POST;
	$_SESSION['mensajeError'] = "Ocurrió un error inesperado. La cuenta no pudo crearse. " . $e->getMessage();
	header('Location: ../index.php?s=registro');
	exit;
}