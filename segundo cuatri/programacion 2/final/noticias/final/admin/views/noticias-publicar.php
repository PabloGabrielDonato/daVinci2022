<?php 
use DaVinci\Models\EstadoPublicacion;
use DaVinci\Models\Etiqueta;

// Traemos los estados de publicación para armar un select de opciones.
$estados = (new EstadoPublicacion)->todo();
$etiquetas = (new Etiqueta)->todo();

// Leemos las variables "flash" de sesión.
$errores = $_SESSION['errores'] ?? [];
// Agregamos que exista siempre la clave para el estado_publicacion_fk,
// lo que nos simplifica el select al final.
$dataForm = $_SESSION['data-form'] ?? ['estado_publicacion_fk' => null];
unset($_SESSION['errores'], $_SESSION['data-form']);
?>
<section class="container">
	<h1 class="mb-1">Publicar una Noticia</h1>

	<p class="mb-1">Completá el form con los datos de la noticia. Cuando estés conforme, dale a "Publicar".</p>

	<!-- 
	Para todos los formularios que van a realizar impactos (es decir,
	que son por POST), no los vamos a mandar al index como hacemos el
	resto de las secciones.
	El index siempre está imprimiendo el contenido de la página.
	Y las rutas que procesan datos por POST _NO_ deberían imprimir
	_NADA_ en pantalla. Sino que _DEBEN_ siempre redireccionar al
	usuario a otra ruta.

	Para esto, vamos a usar otra carpeta que vamos a llamar "acciones".

	Si queremos que el form envíe archivos, como la imagen, tiene que
	cumplir 2 cosas:
	1. Ser por POST.
	2. Tener el atributo enctype="multipart/form-data"
	-->
	<form action="acciones/noticias-publicar.php" method="post" enctype="multipart/form-data">
		<div class="form-fila">
			<label for="titulo">Título</label>
			<!--
			El atributo aria-describedby recibe una lista de ids separados
			por espacio, de elementos que "describen" el contenido de la
			etiqueta.
			Es muy útil, usuado adecuadamente, para accesibilidad.
			-->
			<input
				type="text"
				id="titulo"
				name="titulo"
				class="form-control"
				aria-describedby="help-titulo <?= isset($errores['titulo']) ? 'error-titulo' : '';?>"
				value="<?= $dataForm['titulo'] ?? null;?>"
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
			><?= $dataForm['sinopsis'] ?? null;?></textarea>
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
			><?= $dataForm['texto'] ?? null;?></textarea>
			<?php 
			if(isset($errores['texto'])):
			?>
			<div class="msg-error" id="error-texto"><span class="visually-hidden">Error:</span> <?= $errores['texto'];?></div>
			<?php 
			endif;
			?>
		</div>
		<div class="form-fila">
			<label for="imagen">Imagen (opcional)</label>
			<input
				type="file"
				id="imagen"
				name="imagen"
				class="form-control"
			>
		</div>
		<div class="form-fila">
			<label for="imagen_descripcion">Descripción de la Imagen (opcional)</label>
			<input
				type="text"
				id="imagen_descripcion"
				name="imagen_descripcion"
				class="form-control"
				value="<?= $dataForm['imagen_descripcion'] ?? null;?>"
			>
		</div>
		<div class="form-fila">
			<label for="estado_publicacion_fk">Estado de Publicación</label>
			<!--
			Para poner un valor por defecto a un select, tenemos que 
			indicar cuál es el option que debe estar "seleccionado" por
			defecto.
			Esto se logra usando el atributo "selected" en el option
			que queremos.

			Lo que tenemos que hacer, pues, es agregar el "selected" en
			el option que el usuario haya seleccionado al enviar el form.
			Esto va a requerir agregar una condición dentro de los options
			del bucle.
			-->
			<select name="estado_publicacion_fk" id="estado_publicacion_fk" class="form-control">
			<?php
			foreach($estados as $estado):
			?>
				<option 
					value="<?= $estado->getEstadoPublicacionId();?>"
					<?= $estado->getEstadoPublicacionId() == $dataForm['estado_publicacion_fk'] ? 'selected' : '';?>
				>
					<?= $estado->getNombre();?>
				</option>
			<?php 
			endforeach;
			?>
			</select>
		</div>

		<fieldset>
			<legend>Etiquetas</legend>

			<!--
			Usamos [] en el name del input para asegurarnos de que php reciba,
			como un array, _todos_ los valores que hayan sido seleccionados.
			-->
			<?php 
			foreach($etiquetas as $etiqueta):
			?>
			<label>
				<input
					type="checkbox"
					name="etiquetas[]"
					value="<?= $etiqueta->getEtiquetaId();?>"
					<?= in_array($etiqueta->getEtiquetaId(), $dataForm['etiquetas'] ?? []) 
						? 'checked' 
						: '';?>
				>
				<?= $etiqueta->getNombre();?>
			</label>
			<?php 
			endforeach;
			?>
		</fieldset>
		<button type="submit" class="button">Publicar</button>
	</form>
</section>