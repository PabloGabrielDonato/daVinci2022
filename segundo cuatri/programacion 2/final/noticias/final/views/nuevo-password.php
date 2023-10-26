<?php
$token = $_GET['token'];
$email = $_GET['email'];
?>
<section class="container">
	<h1 class="mb-1">Crear una Nueva Contraseña</h1>

	<form action="acciones/actualizar-password.php" method="post">
		<!-- Agregamos dos campos hidden que incluyan los datos que recibimos por el query string del token y el email. -->
		<input type="hidden" name="token" value="<?= $token;?>">
		<input type="hidden" name="email" value="<?= $email;?>">

		<!-- TODO: Agregar el mostrar/ocultar password y/o la confirmación. -->
		<div class="form-fila">
			<label for="password">Contraseña</label>
			<input type="password" id="password" name="password" class="form-control">
		</div>
		<button type="submit" class="button">Restablecer mi Contraseña</button>
	</form>
</section>