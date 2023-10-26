<?php

session_start();
require_once __DIR__ . '/../../bootstrap/autoload.php';


$id = $_GET['id'];

if((new Producto)->productoVendido($id)){
	$_SESSION['mensajeError'] = 'El producto se encuentra relacionado a una compra, por lo cual no es posible eliminarlo.';
	header('location: ../index.php?s=productos-eliminar&id='.$id);
	exit;
}

try {

	$producto = (new Producto)->traerPorId($id);


	$rutaImgs = __DIR__ . '/../../imgs';
	$imagenRuta = $rutaImgs . '/' . $producto->getImagen();

	
	if (
		!empty($producto->getImagen()) &&
		file_exists($imagenRuta)
	) {

		unlink($imagenRuta);
	}

	(new Producto)->eliminar($id);

	$_SESSION['mensajeFeedback'] = "¡El producto se eliminó con éxito!";

	header("Location: ../index.php?s=productos");
	exit;
} catch (Exception $e) {
	$_SESSION['mensajeFeedback'] = "Ocurrió un error inesperado. El producto no pudo ser eliminado.";

	header("Location: ../index.php?s=productos");
	exit;
}

