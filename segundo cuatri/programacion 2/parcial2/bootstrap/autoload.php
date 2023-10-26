<?php 
// Definimos el autoload para nuestro proyecto.
// Nota: SPL => Standard PHP Library
spl_autoload_register(function(string $className) {
	// echo "Intentando cargar la clase... " . $className . "<br>";

	// Como podemos observar, en $className tenemos el nombre de
	// la clase completo. Con esto, ahora se nos vuelve trivial
	// en nuestro caso cargar las clases.
	// ¿Por qué trivial?
	// Porque todas las clases las estamos ubicando en un mismo
	// directorio de base.
	$classesDir = __DIR__ . '/../classes';

	// Y los nombres de cada clase se llaman _exactamente_ igual que
	// la propia clase.
	$classPath = realpath($classesDir . '/' . $className . '.php');

	// echo "Intentando cargar el archivo... " . $classPath . "<br>";

	// Preguntamos si existe, en efecto, ese archivo, y lo incluimos.
	if(file_exists($classPath)) {
		require_once $classPath;
	}
});