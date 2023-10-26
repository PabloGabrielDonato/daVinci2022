<?php 
session_start();

require_once __DIR__ . '/../bootstrap/autoload.php';


$producto_id = $_GET['id'];

if((new Carrito)->quitarProductoCarrito($producto_id)){

    
    $_SESSION['mensajeFeedback'] = '¡El producto se ha quitado del carrito!';
    header('Location: ../index.php?s=carrito'); 
}else{
    echo 'error';
    
    $_SESSION['errores'] = '¡No se ha podido quitar el producto del carrito';
    header('Location: ../index.php?s=carrito');
}



?>