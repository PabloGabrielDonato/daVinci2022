<?php
// session_start();
if (!empty($_SESSION['errores'])) {
    $errores = $_SESSION['errores'];
    $data = $_SESSION['data-form'];
    unset($_SESSION['errores']);
    unset($_SESSION['data-form']);
};

if(!empty($_SESSION['mensajeFeedback'])){
    $mensaje = $_SESSION['mensajeFeedback'];
    unset($_SESSION['mensajeFeedback']);
}
?>

<section class="container">
    <h1>Iniciar Sesión</h1>

    <?php if (!empty($_SESSION['mensaje'])) : ?>
    <p class="text-center"><b><?= $_SESSION['mensaje']; ?></b></p>
    <?= $_SESSION['mensaje'] = ''; ?>
    <?php endif; ?>

    <?php 
    if(isset($mensaje)) :
    ?>
    <div class="text-center bg-success text-white my-3" id="error-login"><span class="visually-hidden">Mensaje:</span>
    <?= $mensaje; ?></div>
    <?php 
    endif;
    ?>

    <div class="form-login">
        <form action="procesos/login.php" method="POST" class="col-6 mx-auto bg-light p-3">
            <?php
            if (isset($errores['login'])) :
            ?>
            <div class="text-center bg-danger text-white my-3" id="error-login"><span class="visually-hidden">Error:</span>
                <?= $errores['login']; ?></div>
            <?php
            endif;
            ?>

            <div class="mb-3">
                <label for="correo">Correo electrónico</label>
                <input class="form-control" name="email" type="email" id="correo" placeholder="Ingrese su correo"
                    required value="<?php echo (isset($data)) ? $data['email'] : '' ?>">
                <?php
                    if (isset($errores['correo'])) :
                    ?>
                <div class="text-center bg-danger text-white my-3" id="error-correo"><span class="visually-hidden">Error:</span>
                    <?= $errores['correo']; ?></div>
                <?php
                    endif;
                ?>
            </div>

            <div class="mb-3">
                <label for="password">Contraseña:</label>
                <input class="form-control" id="password" name="password" type="password"
                    placeholder="Ingrese su password" required>
                <?php
                    if (isset($errores['pass'])) :
                    ?>
                <div class="text-center bg-danger text-white my-3" id="error-pass"><span class="visually-hidden">Error:</span>
                    <?= $errores['pass']; ?></div>
                <?php
                    endif;
                    ?>
            </div>
            <button type="submit" class="btn btn-primary">Aceptar</button>
        </form>
    </div>

   
</section>