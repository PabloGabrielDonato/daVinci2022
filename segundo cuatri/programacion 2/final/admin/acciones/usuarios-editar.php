<?php

session_start();
require_once __DIR__ . '/../../bootstrap/autoload.php';


$id 				= $_GET['id'];
$nombre 			= $_POST['nombre'];
$apellido 			= $_POST['apellido'];
$email 				= $_POST['email'];
// $precio 			= $_POST['precio'];
$precio 			= '0';


$errores = [];

if (empty($nombre)) {
	$errores['nombre'] = "El Nombre no puede quedar vacío.";
} else if (strlen($nombre) < 2) {
	$errores['nombre'] = "El Nombre debe tener al menos 2 caracteres.";
}

if (empty($apellido)) {
	$errores['apellido'] = "El apellido no puede quedar vacío.";
} else if (strlen($apellido) < 2) {
	$errores['apellido'] = "El apellido debe tener al menos 2 caracteres.";
}

if (empty($email)) {
	$errores['email'] = "El texto no puede quedar vacío.";
}


if (count($errores) > 0) {

	$_SESSION['errores'] = $errores;

	$_SESSION['data-form'] = $_POST;
	header('Location: ../index.php?s=usuarios-editar&id=' . $id);
	exit;
}


try {
	(new usuario)->editar($id, [
		'usuario_fk' 			=> 1,
		'fecha_publicacion' 	=> date('Y-m-d H:i:s'),
		'nombre' 				=> $nombre,
		'apellido' 				=> $apellido,
		'email' 				=> $email,
		'precio' 				=> $precio,
	]);

	$_SESSION['mensajeFeedback'] = '¡El producto se actualizó con éxito!';

	header("Location: ../index.php?s=usuarios");
	exit;
} catch (Exception $e) {

	$_SESSION['mensajeFeedback'] = '¡Error al actualizar!';
	header("Location: ../index.php?s=usuarios-editar&id=" . $id);
	exit;
}
