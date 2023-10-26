<?php
use DaVinci\Auth\Auth;

require_once __DIR__ . '/../bootstrap/init.php';

$rutas = [
    '404' => [
        'titulo' => 'Página no Encontrada',
    ],
    'dashboard' => [
        'titulo' => 'Tablero Principal',
        'requiereAuth' => true,
    ],
    'usuarios' => [
        'titulo' => 'Administración de Usuarios',
        'requiereAuth' => true,
    ],
    'noticias' => [
        'titulo' => 'Administración de Noticias',
        'requiereAuth' => true,
    ],
    'noticias-publicar' => [
        'titulo' => 'Publicar una Noticia',
        'requiereAuth' => true,
    ],
    'noticias-editar' => [
        'titulo' => 'Editar Noticia',
        'requiereAuth' => true,
    ],
    'noticias-eliminar' => [
        'titulo' => 'Confirmar Eliminación de Noticia',
        'requiereAuth' => true,
    ],
    'iniciar-sesion' => [
        'titulo' => 'Ingresar al Panel de Administración',
    ],
];

$view = $_GET['s'] ?? 'dashboard';

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
$requiereAuth = $rutaConfig['requiereAuth'] ?? false;
if(
    $requiereAuth &&
    !$auth->autenticado()
) {
    $_SESSION['mensajeError'] = "Para ver esta sección es necesario iniciar sesión.";
    // Pateamos al usuario al login.
    header("Location: index.php?s=iniciar-sesion");
    exit;
}

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
    <title><?= $rutaConfig['titulo'];?> :: Panel de Administración de Saraza Basket</title>
    <link rel="stylesheet" href="../css/estilos.css">
</head>
<body>
    <header id="main-header">
        <p class="brand">Saraza Basket</p>
        <p>Panel de Administración</p>
    </header>
    <nav id="main-nav">
        <div class="container-fixed">
            <?php 
            if($auth->autenticado()):
            ?>
            <ul>
                <li><a href="index.php?s=dashboard">Tablero</a></li>
                <li><a href="index.php?s=noticias">Noticias</a></li>
                <li><a href="index.php?s=usuarios">Usuarios</a></li>
                <li>
                    <form action="acciones/cerrar-sesion.php" method="post">
                        <button type="submit" class="button">Cerrar Sesión (<?= $auth->getUsuario()->getEmail();?>)</button>
                    </form>
                </li>
            </ul>
            <?php 
            endif;
            ?>
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
