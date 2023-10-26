<?php
/*
Con este archivo vamos a aprender a cómo manejar datos que recibimos
de un form para enviarlos a la base de datos.

En este caso puntual, queremos hacer un alta de noticias.
Para lograrlo, vamos a necesitar realizar los siguientes pasos.
1. Capturar los datos del form.
2. Validar los datos.
3. Upload de la imagen, si existe.
4. Pedirle a la clase Noticia que cree una nueva.
5. Redireccionar al usuario a donde corresponda.
*/
// Esto es requerido por Intervention/Image y tiene que ver con
// namespaces.
use Intervention\Image\ImageManagerStatic as Image;

require_once __DIR__ . '/../../bootstrap/init.php';

// 1. Capturar los datos.
$titulo 			= $_POST['titulo'];
$sinopsis 			= $_POST['sinopsis'];
$texto 				= $_POST['texto'];
$imagen_descripcion = $_POST['imagen_descripcion'];
$imagen 			= $_FILES['imagen']; // Noten que es $_FILES.

// 2. Validación.
/*
La idea de la validación es verificar que los valores cumplan con los
requisitos necesarios.
Esto generalmente se consigue con una serie de condicionales. Estos
condicionales buscan si hay un error en un dato.
Si todos los condicionales pasan sin problemas, entonces la validación es
correcta. De lo contrario, vamos guardando los errores ocurridos para poder
informárselos al usuario.

Vamos a validar:
- titulo => obligatorio, al menos 2 caracteres.
- sinopsis => obligatoria.
- texto => obligatorio.
*/
$errores = [];

// Validación de título.
// empty() => null, "", [], false, 0.
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
// En caso de haberlos, entonces vamos a redireccionar al usuario
// inmediatamente al form de nuevo, para que pueda corregir los
// problemas.
if(count($errores) > 0) {
	// Guardamos los mensajes de error.
	$_SESSION['errores'] = $errores;
	// También mandamos los datos actuales del formulario.
	$_SESSION['data-form'] = $_POST;
	header('Location: ../index.php?s=noticias-publicar');
	exit;
}

// 3. Upload de la imagen.
/*
# Manejando archivos subidos por el usuario
Los archivos que llegan desde un form, php los guarda en una variable
especial para ese fin: $_FILES.
NO se incluyen en $_POST. Si vemos el name del campo de tipo "file" en
$_POST, lo mandamos mal (escribimos mal el enctype o no lo pusimos).

Cada archivo llega como un array de 5 (o 6, a partir de php 8.1+) 
claves:
- tmp_name
	Es la ruta temporal en el servidor donde se alojó el archivo. Si
	al terminar de ejecutarse el script no sacamos el archivo de ahí,
	se elimina.
- name
	Es el nombre original del archivo en la PC del usuario.
- size
	Es el peso en bytes.
- type
	Es el tipo MIME.
- error
	El código de error, en caso de haber alguno ocurrido durante el
	upload.
*/
if(!empty($imagen['tmp_name'])) {
	// Generamos un nombre único.
	$nombreImagen = time() . "-" . $imagen['name'];
	
	// Versión con Intervention/Image
	// // Creamos una copia de la imagen.
	// $imagenResize = Image::make($imagen['tmp_name']);
	// $imagenResizeBig = Image::make($imagen['tmp_name']);

	// // La redimensionamos al tamaño de 100x100, pidiendo que cropee
	// // la imagen para mantener esa proporción.
	// $imagenResize->fit(100, 100);
	// $imagenResizeBig->fit(550, 150);

	// // Lo guardamos :D
	// $imagenResize->save($rutaImgs . "/" . $nombreImagen);
	// $imagenResizeBig->save($rutaImgs . "/big-" . $nombreImagen);

	// Versión de una línea por imagen.
	Image::make($imagen['tmp_name'])
		->fit(100, 100)
		->save(RUTA_IMGS . '/' . $nombreImagen);
	Image::make($imagen['tmp_name'])
		->fit(550, 150)
		->save(RUTA_IMGS . '/big-' . $nombreImagen);

	// Guardamos el archivo en la ubicación final, con ayuda de la
	// función move_uploaded_file.
	// move_uploaded_file($imagen['tmp_name'], __DIR__ . '/../../imgs/' . $nombreImagen);
}
// echo "<pre>";
// print_r($_POST);
// print_r($_FILES);
// echo "</pre>";
// exit;

// 4. Grabar.
try {
	(new Noticia)->crear([
		'usuario_fk' 			=> 1, // TODO: Reemplazar por el id del usuario cuando tengamos el login.
		'fecha_publicacion' 	=> date('Y-m-d H:i:s'),
		'titulo' 				=> $titulo,
		'sinopsis' 				=> $sinopsis,
		'texto' 				=> $texto,
		'imagen' 				=> $nombreImagen ?? null,
		'imagen_descripcion' 	=> $imagen_descripcion,
	]);

	// Seteamos un mensaje de feedback en la sesión.
	$_SESSION['mensajeFeedback'] = '¡La noticia se publicó con éxito!';

	// Redireccionamos al usuario con ayuda de la función
	// 	header("Location: <ruta-a-donde-enviar>")
	// Típicamente, es seguida de manera inmediata por un "exit".
	header("Location: ../index.php?s=noticias");
	exit;
} catch (Exception $e) {
	// Lo mandamos al form de nuevo.
	header("Location: ../index.php?s=noticias-publicar");
	exit;
}