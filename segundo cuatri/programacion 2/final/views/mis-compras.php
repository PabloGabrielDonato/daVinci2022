<?php 
$usuario_id = (new Auth)->getId();
$usuario = (new Usuario)->traerPorId($usuario_id);
$listadoCompras = (new Compra)->traerComprasDeUsuario($usuario_id);

?>

<section class="container">
    <h1>Mis compras realizadas</h1>

    <?php if($listadoCompras) : ?>
    <table class="table display table-striped" id="table">
		<thead>
			<tr>
				<th>ID Compra</th>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>Fecha de Compra</th>
				<th>Total de compra</th>
			</tr>
		</thead>
		<tbody>
			<?php
			foreach ($listadoCompras as $compra) :
			?>
				<tr>
				    <td class="text-center"><?= htmlspecialchars($compra['compra_id']); ?></td>
					<td class="text-center"><?= htmlspecialchars($compra['nombre']); ?></td>
					<td class="text-center"><?= htmlspecialchars($compra['apellido']); ?></td>
					<td class="text-center"><?= htmlspecialchars($compra['fecha']); ?></td>
					<td class="text-center">$<?= htmlspecialchars($compra['total']); ?></td>

				</tr>
			<?php
			endforeach;
			?>
		</tbody>
	</table>
    <?php else: ?>
        <div class="text-center bg-success text-white my-3 py-3" id="error-correo"><span class="visually-hidden"></span> El usuario no posee compras realizadas.</div>
		<a href="index.php?s=perfil" class="d-block text-center col-md-2 mx-auto btn btn-primary">Volver</a>
	<?php endif; ?>
  
</section>