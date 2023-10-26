<?php
$errores = $_SESSION['errores'] ?? [];
$dataForm = $_SESSION['data-form'] ?? [];
unset($_SESSION['errores'], $_SESSION['data-form']);

$producto = (new Producto)->traerPorId($_GET['id']);


$categorias = (new Categoria)->todo();

?>
<section class="container">
	<h1 class="mb-1">Editar Producto</h1>

	<p class="mb-1 text-center">Modificá el form con los nuevos datos del producto. Cuando estés conforme, dale a "Actualizar".</p>

	<form action="acciones/productos-editar.php?id=<?= $producto->getProductoId(); ?>" method="post" enctype="multipart/form-data" class="col-6 mx-auto p-3 bg-light">

		<div class="form-fila mt-3">
			<label for="titulo">Título</label>
			<input type="text" id="titulo" name="titulo" class="form-control" aria-describedby="help-titulo <?= isset($errores['titulo']) ? 'error-titulo' : ''; ?>" value="<?= $dataForm['titulo'] ?? $producto->getTitulo(); ?>" required minlength="2">
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
			<textarea id="sinopsis" name="sinopsis" class="form-control" <?php if (isset($errores['sinopsis'])) : ?> aria-describedby="error-sinopsis" <?php endif; ?> required minlength="8"><?= $dataForm['sinopsis'] ?? $producto->getSinopsis(); ?></textarea>
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
			<textarea id="texto" name="texto" class="form-control" <?php if (isset($errores['texto'])) : ?> aria-describedby="error-texto" <?php endif; ?> required minlength="8"><?= $dataForm['texto'] ?? $producto->getDescripcion(); ?></textarea>
			<?php
			if (isset($errores['texto'])) :
			?>
				<div class="msg-error text-danger" id="error-texto"><span class="visually-hidden">Error:</span> <?= $errores['texto']; ?></div>
			<?php
			endif;
			?>
		</div>
		<div class="form-fila mt-3">
			
			<label for="imagen">Imagen (opcional)</label>
			<input type="file" id="imagen" name="imagen" class="form-control">
			<input type="hidden" name="imgActual" value="<?= $producto->getImagen(); ?>">
		</div>
		<div class="form-fila mt-3">
			<label for="imagen_descripcion">Descripción de la Imagen (opcional)</label>
			<input type="hidden" name="imgDescripcionActual" value="<?= $producto->getImagenDescripcion(); ?>">
			<input type="text" id="imagen_descripcion" name="imagen_descripcion" class="form-control" value="<?= $dataForm['imagen_descripcion'] ?? $producto->getImagenDescripcion(); ?>">
		</div>
		<div class="form-fila mt-3">
			<label for="precio">Precio</label>
			<input type="numeric" id="precio" name="precio" class="form-control" aria-describedby="help-precio <?= isset($errores['precio']) ? 'error-precio' : ''; ?>" value="<?= $dataForm['precio'] ?? $producto->getPrecio(); ?>" required min="0">
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
				<option value="<?= $categoria->getCategoriaId(); ?>" <?php echo ($categoria->getCategoriaNombre() == $producto->getCategoria()) ? 'selected' : null ; ?>> <?= $categoria->getCategoriaNombre(); ?> </option>
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

		<button type="submit" class="btn btn-primary mt-3">Actualizar</button>

	</form>
</section>