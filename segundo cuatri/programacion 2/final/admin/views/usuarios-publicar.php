<?php
// Leemos las variables "flash" de sesión.

$errores = $_SESSION['errores'] ?? [];
$dataForm = $_SESSION['data-form'] ?? [];
unset($_SESSION['errores'], $_SESSION['data-form']);

?>
<section class="container">
	<h1 class="mb-1">Alta de Usuarios</h1>

	<p class="mb-1">Completá el form con los datos del producto. Cuando estés conforme, dale a "Publicar".</p>

	<form action="procesos/login.php" method="POST" class="col-6 mx-auto bg-light p-3">
            <?php
            if (isset($errores['login'])) :
            ?>
            <div class="text-center bg-danger text-white my-3" id="error-login"><span class="visually-hidden">Error:</span>
                <?= $errores['login']; ?></div>
            <?php
            endif;
            ?>

<div class="form-fila">
			<label for="nombre">Nombre</label>
			<input type="text" id="nombre" name="nombre" class="form-control" aria-describedby="help-nombre <?= isset($errores['nombre']) ? 'error-nombre' : ''; ?>" value="<?= $dataForm['nombre'] ?? null; ?>">
			<div class="form-help" id="help-nombre">Debe tener al menos 2 caracteres.</div>
			<?php
			if (isset($errores['nombre'])) :
			?>
				<div class="msg-error" id="error-nombre"><span class="visually-hidden">Error:</span> <?= $errores['nombre']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila">
			<label for="apellido">Apellido</label>
			<input type="text" id="apellido" name="apellido" class="form-control" aria-describedby="help-apellido <?= isset($errores['apellido']) ? 'error-apellido' : ''; ?>" value="<?= $dataForm['apellido'] ?? null; ?>">
			<div class="form-help" id="help-apellido">Debe tener al menos 2 caracteres.</div>
			<?php
			if (isset($errores['apellido'])) :
			?>
				<div class="msg-error" id="error-apellido"><span class="visually-hidden">Error:</span> <?= $errores['apellido']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila">
			<label for="email">Email</label>
			<input type="email" id="email" name="email" class="form-control" aria-describedby="help-email <?= isset($errores['email']) ? 'error-email' : ''; ?>" value="<?= $dataForm['email'] ?? null; ?>">
			<?php
			if (isset($errores['email'])) :
			?>
				<div class="msg-error" id="error-email"><span class="visually-hidden">Error:</span> <?= $errores['apellido']; ?></div>
			<?php
			endif;
			?>
		</div>

		<div class="form-fila">
			<label for="precio">Precio</label>
			<input type="text" id="precio" name="precio" class="form-control" aria-describedby="help-precio <?= isset($errores['precio']) ? 'error-precio' : ''; ?>" value="<?= $dataForm['precio'] ?? null; ?>">
			<div class="form-help" id="help-precio">Debe cargar un precio.</div>
			<?php
			if (isset($errores['precio'])) :
			?>
				<div class="msg-error" id="error-precio"><span class="visually-hidden">Error:</span> <?= $errores['precio']; ?></div>
			<?php
			endif;
			?>
		</div>
            <button type="submit" class="btn btn-primary">Aceptar</button>
        </form>

</section>