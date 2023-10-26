<?php 
// Leemos las variables "flash" de sesión.
$errores = $_SESSION['errores'] ?? [];
$dataForm = $_SESSION['data-form'] ?? [];
unset($_SESSION['errores'], $_SESSION['data-form']);

$noticia = (new Noticia)->traerPorId($_GET['id']);
?>
<section class="container">
	<h1 class="mb-1">Editar Noticia</h1>

	<p class="mb-1">Modificá el form con los nuevos datos de la noticia. Cuando estés conforme, dale a "Actualizar".</p>

	<!-- 
	Para editar, así como hicimos para ingresar a esta vista, tenemos
	que asegurarnos de enviar el id.
	Hay 2 formas de hacerlo.
	1. Pasando el id en el query string.
	2. Usando un campo del form, típicamente de tipo "hidden".
	-->
	<form action="acciones/noticias-editar.php?id=<?= $noticia->getNoticiaId();?>" method="post" enctype="multipart/form-data">
		<!-- <input type="hidden" name="id" value="<?= $noticia->getNoticiaId();?>"> -->
		<div class="form-fila">
			<label for="titulo">Título</label>
			<input
				type="text"
				id="titulo"
				name="titulo"
				class="form-control"
				aria-describedby="help-titulo <?= isset($errores['titulo']) ? 'error-titulo' : '';?>"
				value="<?= $dataForm['titulo'] ?? $noticia->getTitulo();?>"
			>
			<div class="form-help" id="help-titulo">Debe tener al menos 2 caracteres.</div>
			<?php 
			if(isset($errores['titulo'])):
			?>
			<div class="msg-error" id="error-titulo"><span class="visually-hidden">Error:</span> <?= $errores['titulo'];?></div>
			<?php 
			endif;
			?>
		</div>
		<div class="form-fila">
			<label for="sinopsis">Sinopsis</label>
			<textarea
				id="sinopsis"
				name="sinopsis"
				class="form-control"
				<?php if(isset($errores['sinopsis'])): ?> aria-describedby="error-sinopsis" <?php endif;?>
			><?= $dataForm['sinopsis'] ?? $noticia->getSinopsis();?></textarea>
			<?php 
			if(isset($errores['sinopsis'])):
			?>
			<div class="msg-error" id="error-sinopsis"><span class="visually-hidden">Error:</span> <?= $errores['sinopsis'];?></div>
			<?php 
			endif;
			?>
		</div>
		<div class="form-fila">
			<label for="texto">Texto Completo</label>
			<textarea
				id="texto"
				name="texto"
				class="form-control"
				<?php if(isset($errores['texto'])): ?> aria-describedby="error-texto" <?php endif;?>
			><?= $dataForm['texto'] ?? $noticia->getTexto();?></textarea>
			<?php 
			if(isset($errores['texto'])):
			?>
			<div class="msg-error" id="error-texto"><span class="visually-hidden">Error:</span> <?= $errores['texto'];?></div>
			<?php 
			endif;
			?>
		</div>
		<div class="form-fila">
			<p>Imagen actual</p>
			<img src="<?= '../imgs/big-' . $noticia->getImagen();?>" alt="">
		</div>
		<div class="form-fila">
			<label for="imagen">Imagen (opcional)</label>
			<input
				type="file"
				id="imagen"
				name="imagen"
				class="form-control"
				aria-describedby="help-imagen"
			>
			<p class="form-help" id="help-imagen">Solo elegí una imagen si querés reemplazar la actual.</p>
		</div>
		<div class="form-fila">
			<label for="imagen_descripcion">Descripción de la Imagen (opcional)</label>
			<input
				type="text"
				id="imagen_descripcion"
				name="imagen_descripcion"
				class="form-control"
				value="<?= $dataForm['imagen_descripcion'] ?? $noticia->getImagenDescripcion();?>"
			>
		</div>
		<button type="submit" class="button">Actualizar</button>
	</form>
</section>