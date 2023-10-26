<?php 
session_start();

require_once __DIR__ . '/../bootstrap/autoload.php';




$producto_id = $_POST['id'];
$producto = (new Carrito)->traerProductoPorId($producto_id);

if($producto == null){
    $_SESSION['errores'] = 'El ID del producto seleccionado no corresponde.';
    header('Location: ../index.php?s=productos');
}

$producto['cantidad'] = 1;



(new Carrito)->cargarCarrito($producto);


$_SESSION['mensajeFeedback'] = '¡El producto se agrego al carrito!';
header('Location: ../index.php?s=productos-leer&id=' . $producto_id);






?>