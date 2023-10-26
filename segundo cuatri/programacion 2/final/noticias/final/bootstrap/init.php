<?php
// Iniciamos la sesión.
session_start();

// Este archivo va a ser el de "inicialización" del proyecto.
// Esto implica registrar los autoloads, definir constantes,
// configurar el entorno, etc.
// Para los niveles de carpetas podemos usar "DIRECTORY_SEPARATOR"
// que es la constante de php que representa cuál es el caracter
// que el SO usa para separar directorios.
require_once __DIR__ . DIRECTORY_SEPARATOR . 'autoload.php';
// Incluimos el autoload de Composer.
require_once __DIR__ . DIRECTORY_SEPARATOR . '/../vendor/autoload.php';

// Definición de constantes.
const RUTA_IMGS = __DIR__ . DIRECTORY_SEPARATOR . '../imgs'; 