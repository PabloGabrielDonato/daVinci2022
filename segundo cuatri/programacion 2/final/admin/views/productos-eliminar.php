<?php
$producto = (new Producto)->traerPorId($_GET['id']);

$error = $_SESSION['mensajeError'] ?? null;
unset($_SESSION['mensajeError']);

?>
<section class="container">
    <h1 class="mb-1">Confirmación Necesaria</h1>

    <?php
            if (isset($error)) :
        ?>
            <div class="text-center bg-danger text-white my-3" id="error-correo"><span class="visually-hidden">Error:</span>
            <?= $error; ?></div>
        <?php
            endif;
        ?>

    <p class="mb-1">Para eliminar el producto es necesario confirmar la acción. A continuación se muestran los datos del producto. ¿Estás seguro/a que querés eliminarla?</p>

    <div class="contenedor-productos">
        <div>
            <h2><?= $producto->getTitulo(); ?></h2>
            <p><?= $producto->getSinopsis(); ?></p>
        </div>
        <picture>
            <source srcset="../imgs/<?= $producto->getImagen(); ?>" media="all and (min-width: 46.875em)">
            <img src="../imgs/<?= $producto->getImagen(); ?>" alt="<?= $producto->getImagenDescripcion(); ?>">
        </picture>

        <p><?= $producto->getDescripcion(); ?></p>
    </div>

    <hr class="mb-1">

    <form action="acciones/productos-eliminar.php?id=<?= $producto->getProductoId(); ?>" method="post">
        <button class="btn btn-danger" type="submit">Sí, eliminar</button>
    </form>
</section>