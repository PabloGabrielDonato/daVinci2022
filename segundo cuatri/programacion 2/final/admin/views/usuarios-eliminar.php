<?php
$usuario = (new usuario)->traerPorId($_GET['id']);
?>
<section class="container">
    <h1 class="mb-1">Confirmación Necesaria</h1>
    <p class="mb-1">Para eliminar al USUAIO es necesario confirmar la acción. A continuación se muestran los datos del usuario. ¿Estás seguro/a que querés eliminar?</p>

    <div class="contenedor-productos">
        <div>
            <h2><?= $usuario->getNombre(); ?></h2>
            <p><?= $usuario->getApellido(); ?></p>
        </div>
    </div>

    <hr class="mb-1">

    <form action="acciones/usuarios-eliminar.php?id=<?= $usuario->getProductoId(); ?>" method="post">
        <button class="btn btn-danger" type="submit">Sí, eliminar</button>
    </form>
</section>