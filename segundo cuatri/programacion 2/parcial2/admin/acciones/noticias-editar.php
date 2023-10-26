<?php
/*
Con este archivo vamos a editar una noticia.

En este caso puntual, queremos hacer un alta de noticias.
Para lograrlo, vamos a necesitar realizar los siguientes pasos.
1. Capturar los datos del form.
2. Validar los datos.
3. Upload de la imagen, si existe.
4. Pedirle a la clase Noticia que la actualice.
5. Redireccionar al usuario a donde corresponda.
*/
use Intervention\Image\ImageManagerStatic as Image;

require_once __DIR__ . '/../../bootstrap/init.php';

// 1. Capturar los datos.
$id 				= $_GET['id']; // Noten que sale del query string.
$titulo 			= $_POST['titulo'];
$sinopsis 			= $_POST['sinopsis'];
$texto 				= $_POST['texto'];
$imagen_descripcion = $_POST['imagen_descripcion'];
$imagen 			= $_FILES['imagen']; // Noten que es $_FILES.

// 2. Validación.
$errores = [];

// Validación de título.
if(empty($titulo)) {
	$errores['titulo'] = "El título no puede quedar vacío.";
} else if(strlen($titulo) < 2) {
	$errores['titulo'] = "El título debe tener al menos 2 caracteres.";
}

if(empty($sinopsis)) {
	$errores['sinopsis'] = "La sinopsis no puede quedar vacía.";
}

if(empty($texto)) {
	$errores['texto'] = "El texto no puede quedar vacío.";
}

// Comprobamos si hay errores de validación.
if(count($errores) > 0) {
	// Guardamos los mensajes de error.
	$_SESSION['errores'] = $errores;
	// También mandamos los datos actuales del formulario.
	$_SESSION['data-form'] = $_POST;
	header('Location: ../index.php?s=noticias-editar&id=' . $id);
	exit;
}

// Obtenemos la noticia. Esto sirve para dos cosas:
// 1. Verificación de que la noticia exista.
// 2. Obtener los datos actuales para poder referenciarlos luego,
// 	por ejemplo para eliminar la imagen si la cambiaron.
$noticia = (new Noticia)->traerPorId($id);

// 3. Upload de la imagen.
if(!empty($imagen['tmp_name'])) {
	// Generamos un nombre único.
	$nombreImagen = time() . "-" . $imagen['name'];

	// Versión con Intervention/Image
	Image::make($imagen['tmp_name'])
		->fit(100, 100)
		->save(RUTA_IMGS . '/' . $nombreImagen);
	Image::make($imagen['tmp_name'])
		->fit(550, 150)
		->save(RUTA_IMGS . '/big-' . $nombreImagen);
}

// 4. Grabar.
try {
	(new Noticia)->editar($id, [
		'usuario_fk' 			=> 1, // TODO: Reemplazar por el id del usuario cuando tengamos el login.
		'fecha_publicacion' 	=> date('Y-m-d H:i:s'),
		'titulo' 				=> $titulo,
		'sinopsis' 				=> $sinopsis,
		'texto' 				=> $texto,
		'imagen' 				=> $nombreImagen ?? $noticia->getImagen(),
		'imagen_descripcion' 	=> $imagen_descripcion,
	]);

	// Eliminamos la imagen vieja, si es necesario.
	if(
		!empty($imagen['tmp_name']) &&
		!empty($noticia->getImagen())
	) {
		$imgChica = RUTA_IMGS . '/' . $noticia->getImagen();
		$imgGrande = RUTA_IMGS . '/big-' . $noticia->getImagen();

		if(file_exists($imgChica)) unlink($imgChica);
		if(file_exists($imgGrande)) unlink($imgGrande);
	}

	// Seteamos un mensaje de feedback en la sesión.
	$_SESSION['mensajeFeedback'] = '¡La noticia se actualizó con éxito!';

	header("Location: ../index.php?s=noticias");
	exit;
} catch (Exception $e) {
	// Lo mandamos al form de nuevo.
	header("Location: ../index.php?s=noticias-editar&id=" . $id);
	exit;
}