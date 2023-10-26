<?php
// Vamos a probar dos funciones de hasheo en php para comparar
// sus resultados.
// La primera que vamos a probar es MD5 (importante: NO SE 
// USA PARA PASSWORDS).
// La segunda va a ser la función password_hash que, como
// pueden imaginarse, sí usamos para passwords.
$password = "asdasd";

$md5Hash = md5($password);
// password_hash recibe 2 parámetros:
// 1. El password.
// 2. El algoritmo a aplicar, que lo identificamos con una
//	constante. En general, se usa PASSWORD_DEFAULT .
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

echo "El password que vamos a probar es: "  . $password . "<br>";
echo "<hr>";
echo "El password hasheado con MD5 es: " . $md5Hash . "<br>";
echo "El password hasheado con password_hash es: " . $passwordHash . "<br>";
