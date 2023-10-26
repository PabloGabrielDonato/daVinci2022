<?php
$errores = $_SESSION['errores'] ?? [];
$dataForm = $_SESSION['data-form'] ?? [];
unset($_SESSION['errores'], $_SESSION['data-form']);

$usuario = (new usuario)->traerPorId($_GET['id']);
?>
<section class="container">
	<h1 class="mb-1">Editar Usuarios</h1>

	<p class="mb-1">Modificá el form con los nuevos datos del producto. Cuando estés conforme, dale a "Actualizar".</p>

	<form action="acciones/usuarios-editar.php?id=<?= $usuario->getProductoId(); ?>" method="post" enctype="multipart/form-data">

		<div class="form-fila">
			<label for="nombre">Nombre</label>
			<input type="text" id="nombre" name="nombre" class="form-control" aria-describedby="help-nombre <?= isset($errores['nombre']) ? 'error-nombre' : ''; ?>" value="<?= $dataForm['nombre'] ?? $usuario->getNombre(); ?>">
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
			<input type="text" id="apellido" name="apellido" class="form-control" aria-describedby="help-apellido <?= isset($errores['apellido']) ? 'error-apellido' : ''; ?>" value="<?= $dataForm['apellido'] ?? $usuario->getApellido(); ?>">
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
			<input type="email" id="email" name="email" class="form-control" aria-describedby="help-email <?= isset($errores['email']) ? 'error-email' : ''; ?>" value="<?= $dataForm['email'] ?? $usuario->getEmail(); ?>">
			<div class="form-help" id="help-email">Debe tener al menos 2 caracteres.</div>
			<?php
			if (isset($errores['email'])) :
			?>
				<div class="msg-error" id="error-email"><span class="visually-hidden">Error:</span> <?= $errores['email']; ?></div>
			<?php
			endif;
			?>
		</div>

		<button type="submit" class="button">Actualizar</button>

	</form>
</section>