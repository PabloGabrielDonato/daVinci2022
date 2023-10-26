<?php
use DaVinci\Auth\Auth;

require_once __DIR__ . '/bootstrap/init.php';

// ¿Qué pasa si el usuario pide la sección "?s=../index"?
// Si hacemos eso, vamos a estar incluyendo recursivamente este
// archivo, generando un loop infinito.
// Esto se debe a que el parámetro "s" va a parar la variable
// $view, que se usa en la instrucción de inclusión:
//  require 'views/' . $view . '.php';
// Si reemplazamos la variable, queda...
//  require 'views/../index.php';
// Que es lo mismo que si escribiéramos...
//  require 'index.php';
// Y como este archivo en el que estamos es el "index.php", entonces
// básicamente le estamos diciendo "incluite a vos mismo".
// Y al incluirse a sí mismo, va a seguir incluyéndose a si mismo.
// Este ejemplo es molesto, pero dependiendo de nuestra estrategia
// de inclusión, esto abre la puerta a que un usuario malicioso pueda
// robar información o ejecutar código que no se supone deba ejecutar.
// ¿Cómo nos protegemos de eso?
// Tenemos que de alguna manera limitar qué archivos son los que se
// pueden incluir.
// Hay 2 approaches para hacer esto:
// - "Whitelist" (lista blanca)
// - "Blacklist" (lista negra)
// La "blacklist" es cuando definimos una lista de los que _NO_ están
// permitidos. Es lo que llamamos una lista de exclusión.
// La "whitelist", en cambio, es cuando definimos una lista de los que
// _SI_ están permitidos. Es lo que llamamos una lista de inclusión.
// En líneas generales, cuando es viable, siempre es más segura una
// "whitelist".
// Esto se debe a que en una "blacklist", nosotros necesitamos
// saber siempre quiénes hay que excluir. Y si en un futuro agregamos
// nuevos archivos que no debe ejecutarse como vista, tenemos que
// recordar actualizar esta "blacklist".
// Vamos a crear, entonces, una "whitelist" con nuestra "rutas".
// En este caso, llamamos "ruta" a cada vista que el usuario puede
// acceder con el parámetro "s".
$rutas = [
    // En este array, las claves van a ser los nombres de las vistas
    // que permitidos. Cada una va a tener como valor un array de
    // configuración.
    '404' => [
        'titulo' => 'Página no Encontrada',
    ],
    'home' => [
        'titulo' => 'Página Principal',
    ],
    'noticias' => [
        'titulo' => 'Últimas Noticias de la NBA',
    ],
    'noticias-leer' => [
        'titulo' => 'Detalle de la Noticia',
    ],
    'iniciar-sesion' => [
        'titulo' => 'Iniciar Sesión',
    ],
    'registro' => [
        'titulo' => 'Crear una Nueva Cuenta',
    ],
    'restablecer-password' => [
        'titulo' => 'Restablecer Contraseña',
    ],
    'nuevo-password' => [
        'titulo' => 'Crear una Nueva Contraseña',
    ],
];

// Definimos una variable que guarde el nombre de la vista
// que tenemos que mostrarle al usuario.
// El valor de la variable lo pedimos del parámetro "s"
// (por abrevitura de "sección") del query string.
// Como la primera vez que el usuario entre al sitio
// probablemente no tenga el parámetro "s" en el query
// string, vamos a preguntar si está, y sino, poner la
// 'home' como default.
// if(isset($_GET['s'])) {
//     $view = $_GET['s'];
// } else {
//     $view = 'home';
// }

// La verificación anterior la podemos reemplazar por un
// operador ternario...
// $view = isset($_GET['s']) ? $_GET['s'] : 'home';

// Esta acción, de preguntar si una variable existe, en cuyo
// caso usarla, y sino usar un default, es _TAN_ común en
// php, que tenemos un operador diseñado exclusivamente
// para resolver este escenario: "null coaleasce operator"
// ('operador de fusión de null').
$view = $_GET['s'] ?? 'home';

// Verificamos que exista el archivo que están pidiendo ver.
// Si no existe, mostramos un 404.
if(!file_exists('views/' . $view . '.php')) {
    $view = '404';
}

// Finalmente, preguntamos si la vista es una ruta permitida en la
// "whitelist" $rutas. De lo contrario, le mostramos el 404.
if(!isset($rutas[$view])) {
    $view = '404';
}

// Guardamos la configuración de la vista (el valor de la misma en el
// array de rutas).
$rutaConfig = $rutas[$view];

// Autenticación.
$auth = new Auth;


// Leemos, si existen, las variables de sesión "flash".
// Variables "flash" es como llamamos a las variables de sesión que queremos 
// que se usen solo una vez.
$mensajeFeedback    = $_SESSION['mensajeFeedback'] ?? null;
$mensajeError       = $_SESSION['mensajeError'] ?? null;
unset($_SESSION['mensajeFeedback'], $_SESSION['mensajeError']);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $rutaConfig['titulo'];?> :: Saraza Basket</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <header id="main-header">
        <p class="brand">Saraza Basket</p>
        <p>Enterate de todas las novedades sobre la NBA</p>
    </header>
    <nav id="main-nav">
        <div class="container-fixed">
            <ul>
                <li><a href="index.php?s=home">Home</a></li>
                <li><a href="index.php?s=noticias">Noticias</a></li>
                <?php 
                if(!$auth->autenticado()):
                ?>
                <li><a href="index.php?s=iniciar-sesion">Iniciar Sesión</a></li>
                <li><a href="index.php?s=registro">Registrarse</a></li>
                <?php 
                else:
                ?>
                <li><a href="index.php?s=perfil">Mi Perfil</a></li>
                <li>
                    <form action="acciones/cerrar-sesion.php" method="post">
                        <button type="submit" class="button">Cerrar Sesión (<?= $auth->getUsuario()->getEmail();?>)</button>
                    </form>
                </li>
                <?php 
                endif;
                ?>
            </ul>
        </div>
    </nav>
    <main class="main-content">
        <?php 
        if($mensajeFeedback !== null):
        ?>
        <div class="msg-success"><?= $mensajeFeedback;?></div>
        <?php 
        endif;
        ?>
        <?php 
        if($mensajeError !== null):
        ?>
        <div class="msg-error"><?= $mensajeError;?></div>
        <?php 
        endif;
        ?>

        <?php
        require 'views/' . $view . '.php';


        // Si queremos ver la home...
        // require 'views/home.php';

        // Si queremos ver las noticias...
        // require 'views/noticias.php';

        // Si queremos ver el iniciar sesión...
        // require 'views/iniciar-sesion.php';

        // Si queremos ver el registrarse...
        // require 'views/registro.php';
        ?>
    </main>
    <footer id="main-footer">
        <p>&copy; Da Vinci - 2022</p>
    </footer>
</body>
</html>
