<?php
// Leemos las variables "flash" de sesión.

$errores = $_SESSION['errores'] ?? [];
$dataForm = $_SESSION['data-form'] ?? [];
unset($_SESSION['errores'], $_SESSION['data-form']);

$categorias = (new Categoria)->todo();



?>
<section class="container">
	<h1 class="mb-1">Publicar un Producto</h1>

	<p class="mb-1 text-center">Completá el form con los datos del producto. Cuando estés conforme, dale a "Publicar".</p>

	
	<form action="acciones/productos-publicar.php" method="post" enctype="multipart/form-data" class="p-3 bg-light col-12 col-md-6 mx-auto py-3">
		<div class="form-fila mt-3">

			<label for="titulo">Título</label>
			<input type="text" id="titulo" name="titulo" class="form-control" aria-describedby="help-titulo <?= isset($errores['titulo']) ? 'error-titulo' : ''; ?>" value="<?= $dataForm['titulo'] ?? null; ?>" required minlength="2">
	
			<?php
			if (isset($errores['titulo'])) :
			?>
				<div class="msg-error text-danger" id="error-titulo"><span class="visually-hidden">Error:</span> <?= $errores['titulo']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila mt-3">
			<label for="sinopsis">Sinopsis</label>
			<textarea id="sinopsis" name="sinopsis" class="form-control" <?php if (isset($errores['sinopsis'])) : ?> aria-describedby="error-sinopsis" <?php endif; ?> required minlength="8"><?= $dataForm['sinopsis'] ?? null; ?></textarea>
			<?php
			if (isset($errores['sinopsis'])) :
			?>
				<div class="msg-error text-danger" id="error-sinopsis"><span class="visually-hidden">Error:</span> <?= $errores['sinopsis']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila mt-3">
			<label for="texto">Descripción completa</label>
			<textarea id="texto" name="texto" class="form-control" <?php if (isset($errores['texto'])) : ?> aria-describedby="error-texto" <?php endif; ?> required minlength="8"><?= $dataForm['texto'] ?? null; ?></textarea>
			<?php
			if (isset($errores['texto'])) :
			?>
				<div class="msg-error text-danger" id="error-texto"><span class="visually-hidden">Error:</span> <?= $errores['texto']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila mt-3">
			<label for="imagen">Imagen</label>
			<input type="file" id="imagen" name="imagen" class="form-control" required>
			<?php
			if (isset($errores['imagen'])) :
			?>
				<div class="msg-error text-danger" id="error-imagen"><span class="visually-hidden">Error:</span> <?= $errores['imagen']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila mt-3">
			<label for="imagen_descripcion">Descripción de la Imagen</label>
			<input type="text" id="imagen_descripcion" name="imagen_descripcion" class="form-control" value="<?= $dataForm['imagen_descripcion'] ?? null; ?>" required minlength="5">
			<?php
			if (isset($errores['imagen_descripcion'])) :
			?>
				<div class="msg-error text-danger" id="error-imagen_descripcion"><span class="visually-hidden">Error:</span> <?= $errores['imagen_descripcion']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila mt-3">
			<label for="precio">Precio</label>
			<input type="numeric" id="precio" name="precio" class="form-control" aria-describedby="help-precio <?= isset($errores['precio']) ? 'error-precio' : ''; ?>" value="<?= $dataForm['precio'] ?? null; ?>" min="0" required>
			<?php
			if (isset($errores['precio'])) :
			?>
				<div class="msg-error text-danger" id="error-precio"><span class="visually-hidden">Error:</span> <?= $errores['precio']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila mt-3">

			<label for="selectCategoria">Categoría</label>
			<select name="idCategoria" id="selectCategoria" class="form-select" required>
			<?php
			foreach ($categorias as $categoria) :
			?>
				<option value="<?= $categoria->getCategoriaId(); ?>"> <?= $categoria->getCategoriaNombre(); ?> </option>
			<?php 
			endforeach;
			?>
			</select>
			<?php
			if (isset($errores['categoria'])) :
			?>
				<div class="msg-error text-danger" id="error-categoria"><span class="visually-hidden">Error:</span> <?= $errores['categoria']; ?></div>
			<?php
			endif;
			?>
		</div>

		<button type="submit" class="btn btn-primary mt-4">Publicar</button>
	</form>
</section>