<?php
// session_start();
if (!empty($_SESSION['errores'])) {
    $errores = $_SESSION['errores'];
    $data = $_SESSION['data-form'];

    unset($_SESSION['errores']);
    unset($_SESSION['data-form']);
};
?>

<section class="container">
    <h1>Registro de usuario</h1>


    <div class="form-registro">
        <div class="row">

            <form action="procesos/registro-usuario.php" method="POST" class="col-6 mx-auto bg-light p-3">

                <?php if(isset($_SESSION['mensajeError'])) : ?>
                    <p class="bg-white text-danger p-3"><?php echo $_SESSION['mensajeError']; ?></p>
                <?php endif; ?>

                <div class="mb-3">
                    <label for="nombre">Nombre</label>
                    <input class="form-control" name="nombre" type="text" id="nombre" placeholder="Ingrese su nombre" required value="<?php echo (isset($data)) ? $data['nombre'] : '' ?>">
                    <?php
                    if (isset($errores['nombre'])) :
                    ?>
                    <div class="text-center bg-danger text-white my-3" id="error-nombre"><span class="visually-hidden">Error:</span>
                        <?= $errores['nombre']; ?></div>
                    <?php
                        endif;
                    ?>
                </div>

                <div class="mb-3">
                    <label for="apellido">Apellido</label>
                    <input class="form-control" name="apellido" type="text" id="apellido" placeholder="Ingrese su apellido" required value="<?php echo (isset($data)) ? $data['apellido'] : '' ?>">
                    <?php
                    if (isset($errores['apellido'])) :
                    ?>
                    <div class="text-center bg-danger text-white my-3" id="error-apellido"><span class="visually-hidden">Error:</span>
                        <?= $errores['apellido']; ?></div>
                    <?php
                        endif;
                    ?>
                </div>

                <div class="mb-3">
                    <label for="correo">Correo electrónico</label>
                    <input class="form-control" name="email" type="email" id="correo" placeholder="Ingrese su correo" required value="<?php echo (isset($data)) ? $data['email'] : '' ?>">
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
                    <input class="form-control" id="password" name="password" type="password" placeholder="Ingrese su password" required>
                    <?php
                    if (isset($errores['password'])) :
                    ?>
                    <div class="text-center bg-danger text-white my-3" id="error-password"><span class="visually-hidden">Error:</span>
                        <?= $errores['password']; ?></div>
                    <?php
                        endif;
                    ?>
                </div>

                <div class="mb-3">
                    <label for="passwordConfirm">Confirmar contraseña:</label>
                    <input class="form-control" name="passwordConfirm" type="password" id="passwordConfirm" placeholder="Confirme su password" required>
                </div>

               
                <button type="submit" class="btn btn-primary">Aceptar</button>
            </form>

        </div>
        
    </div>
    
</section>