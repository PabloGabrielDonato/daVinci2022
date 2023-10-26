<?php

$producto = new Producto($_GET['id']);

$mensajeFeedback = $_SESSION['mensajeFeedback'] ?? null;
unset($_SESSION['mensajeFeedback']);

if (!$producto) {
    require_once __DIR__ . '/404.php';
} else {
?>

    <section class="container">

    <?php
            if (isset($mensajeFeedback)) :
        ?>
            <div class="text-center bg-success text-white my-3" id="error-correo"><span class="visually-hidden"></span>
            <?= $mensajeFeedback; ?></div>
        <?php
            endif;
        ?>

        <div class="col-md-6 mx-auto card py-4 text-center">
            <picture>
                <source srcset="imgs/<?= $producto->getImagen(); ?>">
                <img class="img-fluid" src="imgs/<?= $producto->getImagen(); ?>" alt="<?= $producto->getImagenDescripcion(); ?>">
            </picture>

            <div>
                <h1><?= $producto->getTitulo(); ?></h1>
                <p><?= $producto->getSinopsis(); ?></p>
                <p><?= $producto->getDescripcion(); ?></p>
                <p class="fw-bold">$<?= $producto->getPrecio(); ?></p>
            </div>
          

            

            <form action="procesos/agregar-al-carrito.php" method="post">
                    <input type="hidden" name="id" value = "<?= $producto->getProductoId(); ?>">
                    <button type="submit" class="btn btn-primary">Agregar al carrito</button>
            </form>
        </div>
    </section>

<?php
}
?>