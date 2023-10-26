<?php
session_start();
require_once __DIR__ . '/../bootstrap/autoload.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $passwordConfirm = $_POST['passwordConfirm'];

    $errores = [];


    if(empty($nombre) || strlen($nombre) <= 2){
        $errores['nombre'] = 'El nombre debe contener más de 2 caracteres';
    }
    if(empty($apellido) || strlen($apellido) <= 2){
        $errores['apellido'] = 'El apellido debe contener más de 2 caracteres';
    }
    if(empty($email) || strlen($email) <= 8){
        $errores['correo'] = 'El correo debe contener más de 8 caracteres';
    }
    if(empty($password) || strlen($password) <= 5){
        $errores['password'] = 'La contraseña debe contener más de 5 caracteres';
    }

    if($password != $passwordConfirm){
        $errores['password'] = 'Las contraseñas deben coincidir';
    }

    $usuarios = (new Usuario)->traerPorEmail($email);
    
    if($usuarios){
        $errores['correo'] = 'El correo ingresado ya está registrado en nuestra base de datos.';
    }
    
    if (count($errores) > 0) {
        $_SESSION['errores'] = $errores;

        $_SESSION['data-form'] = $_POST;
        header('Location: ../index.php?s=registro');
        exit;
    }

    $password = password_hash($password, PASSWORD_DEFAULT);
    try {
        (new Usuario)->crear(['nombre' => $nombre, 'apellido' => $apellido, 'email' => $email,'password' => $password, 'fk_rol' => 1]);
        $_SESSION['mensajeFeedback'] = "¡Cuenta creada con éxito! Ya podés iniciar sesión.";
        header('Location: ../index.php?s=iniciar-sesion');
        exit;
    } catch (Exception $e) {
            $_SESSION['data-form'] = $_POST;
            $_SESSION['mensajeError'] = "Ocurrió un error inesperado. La cuenta no pudo crearse. " . $e->getMessage();
            header('Location: ../index.php?s=registro');
            exit;
    }


}
?>