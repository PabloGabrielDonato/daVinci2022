<?php 
session_start();

require_once __DIR__ . '/../bootstrap/autoload.php';


if(!(new Auth)->autenticado()){
    header('location:../index.php?s=iniciar-sesion');
}

$carrito = (new Carrito)->obtenerCarrito();
$fechaActual = date('Y-m-d H:i:s');
$totalCompra = (new Carrito)->calcularTotalCarrito();


try {
    $usuario_id = (new Auth)->getId();
   
    $compra_id = (new Compra)->registrarCompra(['total' => $totalCompra, "fecha" => $fechaActual, "usuario_id" => $usuario_id]);
        if($compra_id){
            foreach ($carrito as $producto) {
                (new Compra)->registrarDetalleCompra([
                    'cantidad' => $producto['cantidad'],
                    'precio' => $producto['precio'],
                    'producto_id' => $producto['producto_id'],
                    'compra_id' => $compra_id
                ]);
            }
            unset($_SESSION['carrito']);
            $_SESSION['mensajeFeedback'] = 'La compra ha sido procesada con éxito!';
            header('Location: ../index.php?s=carrito');
        }
    exit;
} catch (Exception $e) {
        $_SESSION['mensajeError'] = "Ocurrió un error inesperado. La compra no pudo realizarse. " . $e->getMessage();
        echo $_SESSION['mensajeError'];
        
        //header('Location: ../index.php?s=carrito');
        exit;
}


?>