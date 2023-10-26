<?php
session_start();
require_once __DIR__ . '/bootstrap/autoload.php';

$rutas = [

    '404' => [
        'titulo' => 'Página no Encontrada',
    ],
    'home' => [
        'titulo' => 'Página Principal',
    ],
    'productos' => [
        'titulo' => 'Nuestros productos',
    ],
    'productos-leer' => [
        'titulo' => 'Detalle del producto',
    ],
    'iniciar-sesion' => [
        'titulo' => 'Iniciar Sesión',
    ],
    'carrito' => [
        'titulo' => 'Carrito de compra',
    ],
    'registro' => [
        'titulo' => 'Crear una Nueva Cuenta',
    ],
    'perfil' => [
        'titulo' => 'Perfil del usuario'
        ],
    'mis-compras' => [
        'titulo' => 'Mis compras'
        ]
];

$view = $_GET['s'] ?? 'home';

if (!file_exists('views/' . $view . '.php')) {
    $view = '404';
}

if (!isset($rutas[$view])) {
    $view = '404';
}

$rutaConfig = $rutas[$view];
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $rutaConfig['titulo']; ?> :: Donato´s</title>
    <!-- BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Domine&display=swap"   rel="stylesheet">

    <link rel="stylesheet" href="css/estilos.css">

</head>

<body>
    <header>
        <p>Dietética <span>Donato´s</span> </p>
        <p> Comercio <span>dietético</span> familiar.</p>
        
        <?php if((new Auth)->autenticado()) :?>
        <p class="text-center">Bienvenid@ <span> <?= $_SESSION['nombre']; ?> </span></p>
        <?php endif; ?>
    </header>
    <nav id="main-nav">
        <div class="container-fixed">
            <ul>
                <li><a href="index.php?s=home">Home</a></li>
                <li><a href="index.php?s=productos">Productos</a></li>
                <li><a href="index.php?s=carrito">Carrito</a></li>
                <?php if(!(new Auth)->autenticado()) :?>
                <li><a href="index.php?s=iniciar-sesion">Iniciar Sesión</a></li>
                <li><a href="index.php?s=registro">Registrarse</a></li>
                <?php else: ?>
                    <?php if ((new Auth)->autenticadoAdmin()) : ?>
                    <li><a href="admin/index.php?s=dashboard">Panel</a></li>
                    <?php endif; ?>
                <li><a href="index.php?s=perfil">Perfil</a></li>
                <li><a href="procesos/cerrar-sesion.php">Cerrar Sesión</a></li>
                <?php endif; ?>
      
            </ul>
        </div>
    </nav>
    
    <main class="main-content">
        <?php
        require 'views/' . $view . '.php';
        ?>
    </main>
    <footer id="main-footer">
        <p>&copy; Da Vinci - 2022</p>
    </footer>

    <!-- BOOTSTRAP JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
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