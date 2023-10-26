<?php

use Intervention\Image\ImageManagerStatic as Image;


session_start();
require_once __DIR__ . '/../../bootstrap/autoload.php';


if($_SERVER['REQUEST_METHOD'] == 'POST'){

	
$titulo 			= $_POST['titulo'];
$sinopsis 			= $_POST['sinopsis'];
$texto 				= $_POST['texto'];
$imagen_descripcion = $_POST['imagen_descripcion'];
$imagen 			= $_FILES['imagen']; 
$idCategoria = $_POST['idCategoria'];
$precio 			= $_POST['precio'];



$errores = [];

if (empty($titulo)) {
	$errores['titulo'] = "El título no puede quedar vacío.";
} else if (strlen($titulo) < 2) {
	$errores['titulo'] = "El título debe tener al menos 2 caracteres.";
}

if (empty($sinopsis)) {
	$errores['sinopsis'] = "La sinopsis no puede quedar vacía.";
}else if (strlen($sinopsis) < 8) {
	$errores['titulo'] = "La sinopsis debe tener al menos 8 caracteres.";
}

if (empty($texto)) {
	$errores['texto'] = "La descripción no puede quedar vacía.";
}else if (strlen($texto) < 8) {
	$errores['texto'] = "La descripción debe tener al menos 8 caracteres.";
}

if (empty($precio)) {
	$errores['precio'] = "El precio no puede quedar vacío.";
}
if(!is_numeric($precio)){
	$errores['precio'] = "El precio debe ser un valor numérico.";
}

if (empty($imagen['tmp_name'])) {
	$errores['imagen'] = "El campo imágen no puede quedar vacío.";
}

if (empty($imagen_descripcion)) {
	$errores['imagen_descripcion'] = "La descripción no puede quedar vacío.";
}else if(strlen($imagen_descripcion) < 5){
	$errores['imagen_descripcion'] = "La descripción no puede tener menos de 5 caracteres.";
}

if (empty($idCategoria)) {
	$errores['categoria'] = "El campo categoría no puede quedar vacío.";
}

if (count($errores) > 0) {
	$_SESSION['errores'] = $errores;

	$_SESSION['data-form'] = $_POST;
	header('Location: ../index.php?s=productos-publicar');
	exit;
}


if (!empty($imagen['tmp_name'])) {

	$nombreImagen = time() . "-" . $imagen['name'];
	move_uploaded_file($imagen['tmp_name'], __DIR__ . '/../../imgs/' . $nombreImagen);

}

try {
	(new Producto)->crear([
		'titulo' 			=> $titulo, 
		'fecha_publicacion' 	=> date('Y-m-d H:i:s'),
		'sinopsis' 				=> $sinopsis,
		'descripcion' 				=> $texto,
		'imagen' 				=> $nombreImagen,
		'imagen_descripcion' 				=> $imagen_descripcion,
		'precio' 	=> $precio,
		'fk_categoria' 				=> $idCategoria
	]);


	$_SESSION['mensajeFeedback'] = '¡El producto se publicó con éxito!';


	header("Location: ../index.php?s=productos");
	exit;
} catch (Exception $e) {

	header("Location: ../index.php?s=productos-publicar");
	exit;
}

}


