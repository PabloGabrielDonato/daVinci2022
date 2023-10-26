<?php
// Vamos ahora a aprender cómo verificar si un password
// corresponde a un hash.
$password = 'asdasd'; // El password que recibimos del form de login.
$md5Hash = 'a8f5f167f44f4964e6c998dee827110c';
$passwordHash = '$2y$10$gmMnmbsch5UTTj1Q3QiNw.PjTpkweDiWKModFsBJrQBFTN8PT.pSq';

echo "El password a comparar es: " . $password . "<hr>";

echo "Verificando con MD5:<br>";

// La forma de comparar si el hash de md5 coincide con el
// password, es hashear el password que recibimos, y comparar
// que el resultado sea igual con el hash que teníamos.
if($md5Hash == md5($password)) {
	echo "El password coincide :D";
} else {
	echo "No hay coincidencia del password con el hash :(";
}

echo "<hr>";

echo "Verificando el password_hash:<br>";

// Para verificar los hashes generados con password_hash
// usamos la función password_verify.
if(password_verify($password, $passwordHash)) {
	echo "El password coincide :D";
} else {
	echo "No hay coincidencia del password con el hash :(";
}