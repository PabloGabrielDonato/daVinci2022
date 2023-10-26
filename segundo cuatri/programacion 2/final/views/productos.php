<?php
$productos = (new Producto)->todo();
$error = $_SESSION['errores'] ?? null;
unset($_SESSION['errores']);


?>
<section class="container">
    <div>
        <h1 class="mb-4">Productos</h1>

        <?php
            if (isset($error)) :
        ?>
            <div class="text-center bg-danger text-white my-3" id="error-correo"><span class="visually-hidden">Error:</span>
            <?= $error; ?></div>
        <?php
            endif;
        ?>


    </div>
    <div class="flex-productos">
        <?php
        foreach ($productos as $producto) :
        ?>

        <div class="contenedor-productos text-center">
            <div>
                <a href="index.php?s=productos-leer&id=<?= $producto->getProductoId(); ?>">
                    <h2><?= $producto->getTitulo(); ?></h2>
                </a>
                <p><?= $producto->getSinopsis(); ?></p>

            </div>
            <picture>
                <source srcset="imgs/<?= $producto->getImagen(); ?>">
                <img class="img-fluid" src="imgs/<?= $producto->getImagen(); ?>"
                    alt="<?= $producto->getImagenDescripcion(); ?>">
            </picture>
            <p class="my-3 fw-bold">$<?= $producto->getPrecio(); ?></p>

        </div>
        <?php
        endforeach;
        ?>
    </div>
</section>