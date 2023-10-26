<?php 
session_start();
require_once __DIR__ . '/../bootstrap/autoload.php';

(new Auth)->logout();

$_SESSION['mensajeFeedback'] = 'La sesión se cerró correctamente. ¡Te esperamos de nuevo!';

header("Location: ../index.php?s=iniciar-sesion");
exit;
?>