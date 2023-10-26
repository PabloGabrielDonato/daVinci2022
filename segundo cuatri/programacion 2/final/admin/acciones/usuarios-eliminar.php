<?php

session_start();
require_once __DIR__ . '/../../bootstrap/autoload.php';


$id = $_GET['id'];

try {
	$usuario = (new usuario)->traerPorId($id);

	(new usuario)->eliminar($id);

	$_SESSION['mensajeFeedback'] = "¡El producto se eliminó con éxito!";

	header("Location: ../index.php?s=usuarios");
	exit;
} catch (Exception $e) {
	$_SESSION['mensajeFeedback'] = "Ocurrió un error inesperado. El Usuario no pudo ser eliminado.";

	header("Location: ../index.php?s=usuarios");
	exit;
}
