<?php 

$carrito = (new Carrito)->obtenerCarrito();

$mensajeFeedback = $_SESSION['mensajeFeedback'] ?? null;
unset($_SESSION['mensajeFeedback']);

$error = $_SESSION['mensajeError'] ?? null;

unset($_SESSION['mensajeError']);

?>


<section class="container">
    <h1>Carrito de compras</h1>
    
    	<?php
            if (isset($error)) :
        ?>
            <div class="text-center bg-danger text-white my-3" id="error-correo"><span class="visually-hidden">Error:</span>
            <?= $error; ?></div>
        <?php
            endif;
        ?>


		<?php
            if (isset($mensajeFeedback)) :
        ?>
            <div class="text-center bg-success text-white my-3" id="error-correo"><span class="visually-hidden"></span>
            <?= $mensajeFeedback; ?></div>
        <?php
            endif;
        ?>


<?php if(!empty($carrito)) : ?>

    <table class="table display table-striped" id="table">
		<thead>
			<tr>
				<th>Imágen</th>
				<th>Título</th>
				<th>Sinopsis</th>
				<th>Precio</th>
				<th>Cantidad</th>
				<th>Importe</th>
                <th>Quitar</th>
			</tr>
		</thead>
		<tbody>
			<?php
           
			foreach ($carrito as $itemCarrito) :
			?>
				<tr>
					<td class="text-center"><img src="<?= 'imgs/' . htmlspecialchars($itemCarrito['imagen']); ?>" alt=""></td>
					<td class="text-center"><?= htmlspecialchars($itemCarrito['titulo']); ?></td>
					<td class="text-center"><?= htmlspecialchars($itemCarrito['sinopsis']);  ?></td>
					<td class="text-center">$<?= htmlspecialchars($itemCarrito['precio']); ?></td>
					<td class="text-center"><?= htmlspecialchars($itemCarrito['cantidad']); ?></td>
                    <td class="text-center">$<?= htmlspecialchars($itemCarrito['cantidad'] * $itemCarrito['precio']); ?></td>
					<td class="text-center">
						
						<a href="procesos/quitar-al-carrito.php?id=<?= $itemCarrito['producto_id'] ?>" class="btn btn-danger btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
								<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
								<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
							</svg></a>
					</td>
				</tr>
			<?php
			endforeach;
			?>
		</tbody>
	</table>
	<div>
		<form action="procesos/finalizar-compra.php" method="post">
			<input type="hidden" name="total" value="<?= (new Carrito)->calcularTotalCarrito(); ?>">
		<p class="text-center"><b>Total:</b> $<span id="total"><?= (new Carrito)->calcularTotalCarrito(); ?></span></p>
		<button type="submit" class="btn btn-success">Finalizar compra</button>
		</form>
		
		
	</div>
	<?php else: ?>
		<div class="text-center bg-success text-white my-3 py-3" id="error-correo"><span class="visually-hidden"></span> Su carrito está vacío. Por favor seleccione un producto para proceder.</div>
		<a href="index.php?s=productos" class="d-block text-center col-md-2 mx-auto btn btn-primary">Productos</a>
	<?php endif; ?>


</section>