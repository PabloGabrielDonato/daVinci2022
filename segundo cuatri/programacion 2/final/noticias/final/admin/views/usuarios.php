<?php
use DaVinci\Models\Usuario;

$usuarios = (new Usuario)->todo();
?>

<section class="container">
	<h1 class="mb-1">Administración de Usuarios</h1>

	<table class="table">
		<thead>
			<tr>
				<th>ID</th>
				<th>Email</th>
				<!-- TODO: Reemplazar por el nombre del rol -->
				<th>Rol (FK)</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<?php
			foreach($usuarios as $usuario):
			?>
			<tr>
				<td><?= $usuario->getUsuarioId();?></td>
				<td><?= $usuario->getEmail();?></td>
				<td><?= $usuario->getRolFk();?></td>
				<td>Coming Soon&trade;</td>
			</tr>
			<?php 
			endforeach;
			?>
		</tbody>
	</table>
</section>