<?php
// Este archivo está deprecado. Usar la clase [Noticia] en su lugar.
// proyecto/libraries/noticias.php
require_once __DIR__ . '/../classes/Noticia.php';

// Acá vamos a ir definiendo las funciones para trabajar con noticias.
// Las funciones en php se definen muy parecido a como definimos las "function statements" de JS.

// Documentando funciones/métodos/clases en php
// Cuando creamos funciones, es esencial que documentemos el objetivo de la función, qué recibe, qué retorna,
// etc.
// Para ayudarnos en esta tarea, php incluye lo que llama "bloques de documentación de php", o "phpDocBlocks".
// Estos bloques se definen como un comentario multilínea, pero que abre con /** en vez de /*.
// Y si ocupa múltiples líneas, cada línea debe empezar con otro *.
// Por ejemplo, agreguemos un phpDocBlock de ejemplo:
// /**
//  * Este es un docBlock de ejemplo (noten el doble *).
//  */
// /*
//  * Este es un comentario común.
//  */
// ¿Para qué nos sirven?
// Sirven para documentar declaraciones/definiciones en el código. Por ejemplo variables, funciones, clases.
// Para documentar cualquier elemento, el phpDocBlock debería estar justo antes de la declaración que está
// documentando.
// Dentro del comentario, la idea es poner una breve descripción de lo que la función hace, y los datos
// que recibe o retorna.
// Ese texto va a poder ser accedido por editores que soporten esta sintaxis (ej: phpStorm, VSCode con el
// plugin adecuado, idem SublimeText, etc).
// Cuando queramos llamar a la función, vamos a poder pedir que nos muestre el contenido del comentario.
// Además de la descripción, phpDocBlock también soporta lo que son "tags". Estos se identifican con un "@",
// y permiten agregar descripciones precisas sobre algunos elementos de la función o su comportamiento.
// Por ejemplo, puedo documentar el tipo de dato que una función va a retornar, usando el tag @return.
// Además de documentar, a partir de php 7 en adelante, nosotros podemos definir en la misma función el
// tipo de dato que la función debe retornar.
// Para hacerlo, escribimos ":" después de los paréntesis de la función, seguido del tipo de dato.
// La ventaja de aclararlo de esta forma, es que si la función no retorna el tipo de dato indicado,
// php lanza inmediatamente un error.

/**
 * Obtiene todas las noticias disponibles.
 *
 * @return Noticia[] - Esto significa que el retorno es un "array de Noticia".
 */
function noticiasTodo(): array {
    // Cuando incluimos archivos, php busca las rutas en la carpeta donde está ubicado el script en ejecución.
    // En este caso, por ejemplo, está buscando en la carpeta "views".
    // Dicho esto, cuando tenemos que navegar por carpetas con una ruta relativa, dependiendo como esté
    // configurado nuestro servidor, puede pasar que no nos funcione. Existe una variable de configuración
    // llamada "include_path", que define en qué rutas se puede buscar.
    // Para solucionarlo, y evitar este problema sin importar cómo esté configurado nuestro proyecto, podemos
    // ayudarnos con la "constante mágica" de php __DIR__.
    // Las constantes "mágicas" son constantes especiales predefinidas por php cuyo valor se setea dinámicamente
    // dependiendo donde llame a la constante.
    // En el caso de __DIR__, por ejemplo, el valor de la constante es la ruta absoluta en la carpeta del servidor
    // de la ubicación del archivo donde se ejecuta.
    //$contenido = file_get_contents('../data/noticias.json');
    $contenido = file_get_contents(__DIR__ . '/../data/noticias.json');
//    return json_decode($contenido, true);

    // Update: Pasamos a generar un array de objetos Noticia.
    // Guardamos los datos obtenidos del JSON para poder procesarlos en instancias de Noticia.
    $data = json_decode($contenido, true);

    // Creamos un array nuevo para contener todas las Noticias.
    $salida = [];

    // Recorremos los datos de las noticias en $data para generar las instancias de la clase.
    foreach($data as $item) {
        $noticia = new Noticia;
        $noticia->cargarDatosDeArray($item);
//        $noticia->noticia_id            = $item['noticia_id'];
//        $noticia->titulo                = $item['titulo'];
//        $noticia->sinopsis              = $item['sinopsis'];
//        $noticia->texto                 = $item['texto'];
//        $noticia->imagen                = $item['imagen'];
//        $noticia->imagen_descripcion    = $item['imagen_descripcion'];

        // Pusheamos la noticia al array de salida.
        $salida[] = $noticia;
    }

    return $salida;
}

// En php, si queremos declarar que un valor puede además de un tipo de dato, ser null, podemos hacerlo de
// 2 maneras:
// array|null
// ?array
/**
 * Obtiene la noticia correspondiente al $id provisto.
 * Si la noticia no existe, retorna null.
 *
 * @param int $id
 * @return Noticia|null
 */
function noticiasTraerPorId(int $id): ?Noticia {
    // Empezamos por leer las noticias, para poder luego filtrar la que necesitamos.
    $noticias = noticiasTodo();
    // Para probar, retornamos una noticia cualquiera.
//    return $noticias[0];
    // Buscamos la noticia que están pidiendo.
    foreach($noticias as $noticia) {
        if($noticia->noticia_id === $id) {
            // Encontramos la noticia, así que la retornamos.
            return $noticia;
        }
    }
    return null;
}
