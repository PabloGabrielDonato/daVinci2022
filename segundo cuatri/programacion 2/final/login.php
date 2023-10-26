<?php
//VALIDANDO AL USUARIO
require_once __DIR__ . '../bootstrap/autoload.php';
session_start();

$db = (new DB)->getConexion();

if (!empty($_POST['email']) && !empty($_POST['password'])) {

    $records = $db->prepare("SELECT * FROM users WHERE email = :email AND password=:password");
    $records->bindParam("email", $_POST['email'], PDO::PARAM_STR);
    $records->bindParam("password", $_POST['password'], PDO::PARAM_STR);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    if ($results > 0) {
        if ($results['rol'] == 'Administrador' || $results['rol'] == 'administrador') {
            $_SESSION['user_id'] = $results['email'];
            $_SESSION['rol'] = $results['rol'];
            header("Location: admin/index.php");
        } else {
            $_SESSION['user_id'] = $results['email'];
            $_SESSION['rol'] = $results['rol'];
            header("Location: index.php?s=productos");
        }
    } else {
        $checkUser = $db->prepare("SELECT * FROM users WHERE email = :email");
        $checkUser->bindParam("email", $_POST['email'], PDO::PARAM_STR);
        $checkUser->execute();
        $userRegistros = $checkUser->rowCount();
        if ($userRegistros == 0) {
            $message = 'EMIAL incorrecto!';
            $_SESSION['mensaje'] = $message;
        } else {
            $message = 'PASSWORD incorrecta!';
            $_SESSION['mensaje'] = $message;
        }
        header("Location: index.php?s=iniciar-sesion");
    }
}
