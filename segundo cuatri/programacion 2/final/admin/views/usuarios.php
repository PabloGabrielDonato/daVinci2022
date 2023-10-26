<?php
$usuarios = (new usuario)->todo();
?>

<head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
</head>

<section class="container">
	<h1 class="mb-1">Administración de Usuarios</h1>

	<div class="mb-1"><a href="index.php?s=usuarios-publicar" class="btn btn-success btn-sm">Agregar Usuario</a></div>

	<table class="table display table-striped" id="table">
		<thead>
			<tr>
				<th>ID</th>
				<th>Nombre</th>
				<th>Apellido</th>
				<th>Email</th>
				<th>Rol</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<?php
			foreach ($usuarios as $usuario) :
			?>
				<tr>
				    <td><?= htmlspecialchars($usuario->getUsuarioId()); ?></td>
					<td><?= htmlspecialchars($usuario->getUsuarioNombre()); ?></td>
					<td><?= htmlspecialchars($usuario->getApellido()); ?></td>
					<td><?= htmlspecialchars($usuario->getEmail()); ?></td>
					<td><?= htmlspecialchars($usuario->getUsuarioRol()); ?></td>
					<!-- TODO: Verificar si existe la imagen antes de ponerla. -->

					<td>
						
						<a href="index.php?s=compras-realizadas&id=<?= $usuario->getUsuarioId(); ?>" class="btn btn-success btn-sm"><i class="fas fa-dollar-sign"></i></a>
					</td>
				</tr>
			<?php
			endforeach;
			?>
		</tbody>
	</table>
</section>