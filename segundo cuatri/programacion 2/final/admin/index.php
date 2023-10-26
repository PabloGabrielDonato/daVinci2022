<?php
session_start();
require_once __DIR__ . '/../bootstrap/autoload.php';

if (empty($_SESSION['usuario_id'])) {
    // si no inicio de secion se envia al index
    $_SESSION['mensaje'] = 'Debe iniciar seción para ingresar a esta seccion';
    header("Location: ../index.php?s=iniciar-sesion");
} else if ($_SESSION['rol'] != 'admin') {
    // si no es administrador se envia al index
    $_SESSION['mensaje'] = 'No tiene acceso a esta seccion';
    header("Location: ../index.php?s=iniciar-sesion");
};


$rutas = [
    '404' => [
        'titulo' => 'Página no Encontrada',
    ],
    'dashboard' => [
        'titulo' => 'Tablero Principal',
    ],
    'productos' => [
        'titulo' => 'Administración de Productos',
    ],
    'usuarios' => [
        'titulo' => 'Administración de Usuarios',
    ],
    'usuarios-publicar' => [
        'titulo' => 'Alta de usuario',
    ],
    'usuarios-editar' => [
        'titulo' => 'Editar usuarios',
    ],
    'usuarios-eliminar' => [
        'titulo' => 'Confirmar Eliminación del usuario',
    ],
    'productos-publicar' => [
        'titulo' => 'Alta de productos',
    ],
    'productos-editar' => [
        'titulo' => 'Editar productos',
    ],
    'productos-eliminar' => [
        'titulo' => 'Confirmar Eliminación del producto',
    ],
    'compras-realizadas' => [
        'titulo' => 'Compras realizadas por el usuario',
    ],
];

$view = $_GET['s'] ?? 'dashboard';


if (!file_exists('views/' . $view . '.php')) {
    $view = '404';
}


if (!isset($rutas[$view])) {
    $view = '404';
}


$rutaConfig = $rutas[$view];


$mensajeFeedback = $_SESSION['mensajeFeedback'] ?? null;
unset($_SESSION['mensajeFeedback']);
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $rutaConfig['titulo']; ?> :: Panel de Administración de Donato´s</title>
    <!-- estilo propio -->
    <link rel="stylesheet" href="../css/estilos.css">
    <!-- boostrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Datatable -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.4.0/css/responsive.dataTables.min.css">
</head>

<body>
    <header id="main-header">
        <p>Dietética <span>Donato´s</span> </p>
        <p> Comercio <span>dietético</span> familiar.</p>
        <!-- muestra los datos del usuario logeado -->
        <p class="text-center">Usuario <span> <?= $_SESSION['nombre']; ?> </span></p>
    </header>
    <nav id="main-nav">
        <div class="container-fixed">
            <ul>
                <li><a href="../index.php?s=home">Home</a></li>
                <li><a href="index.php?s=dashboard">Tablero</a></li>
                <li>
                    <a href="index.php?s=usuarios">Listado Usuarios</a>
                </li>
                <li>
                    <a href="index.php?s=productos">Adm Productos</a>
                </li>
                <!-- <li>
                    <a href="../views/productos.php">Productos</a>
                </li> -->
                <li><a href="../procesos/cerrar-sesion.php">Cerrar Sesión</a></li>
            </ul>
        </div>
    </nav>
    <main class="main-content">
        <?php
        if ($mensajeFeedback !== null) :
        ?>
            <div class="msg-success text-center fw-bold"><?= $mensajeFeedback; ?></div>
        <?php
        endif;
        ?>
        <?php
        require 'views/' . $view . '.php';



        ?>
    </main>
    <footer id="main-footer">
        <p>&copy; Da Vinci - 2022</p>
    </footer>
    <!-- boostrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- datatable -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.4.0/js/dataTables.responsive.min.js"></script>
    <script>
        $(document).ready(function() {
            $('#table').DataTable({
                responsive: true
            });
        });
    </script>
</body>

</html>