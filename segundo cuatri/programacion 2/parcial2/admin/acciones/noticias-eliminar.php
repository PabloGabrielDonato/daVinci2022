<?php
/*
Borra la noticia de la base de datos.
*/
require_once __DIR__ . '/../../bootstrap/init.php';

// Obtenemos el id que llega por el query string, pese a que a este archivo
// se accede por POST.
$id = $_GET['id'];

try {
	$noticia = (new Noticia)->traerPorId($id);

	$imagenRuta = RUTA_IMGS . '/' . $noticia->getImagen();
	$imagenGrandeRuta = RUTA_IMGS . '/big-' . $noticia->getImagen();

	// Verificamos si existe una imagen para la noticia.
	if(!empty($noticia->getImagen())) {
		// Usamos la función unlink para eliminar la imagen.
		if(file_exists($imagenRuta)) unlink($imagenRuta);
		if(file_exists($imagenGrandeRuta)) unlink($imagenGrandeRuta);
	}

	(new Noticia)->eliminar($id);

	$_SESSION['mensajeFeedback'] = "¡La noticia se eliminó con éxito!";
	
	header("Location: ../index.php?s=noticias");
	exit;
} catch (Exception $e) {
	$_SESSION['mensajeFeedback'] = "Ocurrió un error inesperado. La noticia no pudo ser eliminada.";
	
	header("Location: ../index.php?s=noticias");
	exit;
}