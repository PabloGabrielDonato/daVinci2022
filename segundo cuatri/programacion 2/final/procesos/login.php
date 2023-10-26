<?php
session_start();
require_once __DIR__ . '/../bootstrap/autoload.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $correo = $_POST['email'];
    $pass = $_POST['password'];

    $errores = [];

    if(empty($correo)){
        $errores['correo'] = 'El correo no puede quedar vacío.'; 
    }else if(strlen($correo) <= 5 ){
        $errores['correo'] = 'El correo debe tener más de 5 caracteres.';
    }

    if(empty($pass)){
        $errores['pass'] = 'La contraseña no puede quedar vacía.'; 
    }else if(strlen($pass) <= 5 ){
        $errores['pass'] = 'La contraseña ingresada debe tener más de 5 caracteres.';
    }

    if(!(new Auth)->login($correo,$pass)){
        $errores['login'] = 'El correo y/o la contraseña no son validos.';
    }

    
    if (count($errores) > 0) {
        $_SESSION['errores'] = $errores;

        $_SESSION['data-form'] = $_POST;
        header('Location: ../index.php?s=iniciar-sesion');
        exit;
    }

    
    if((new Auth)->autenticadoAdmin()){
        header('location: ../admin/');
    }else{
        header('location: ../index.php?s=productos');
    }



    



}

?>

