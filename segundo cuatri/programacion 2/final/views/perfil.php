<?php 
$usuario_id = (new Auth)->getId();
$usuario = (new Usuario)->traerPorId($usuario_id);

?>
<section class="container">
    <h1>Perfil del usuario</h1>

    <div class="col-md-6 mx-auto card text-center p-4 bg-light">
        <article>
            <p>Nombre: <span><?= $usuario->getUsuarioNombre(); ?></span> </p>
            <p>Apellido: <span><?= $usuario->getApellido(); ?></span></p>
            <p>Correo: <span><?= $usuario->getEmail(); ?></span></p>
            <p>Rol: <span><?= $usuario->getUsuarioRol(); ?></span></p>
            <a href="index.php?s=mis-compras&id=<?= $usuario_id; ?>" class="btn btn-primary">Mis compras</a>
        </article>
    </div>
</section>