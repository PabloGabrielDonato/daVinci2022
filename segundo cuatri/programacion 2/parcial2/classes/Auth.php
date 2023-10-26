<?php
/*
Esta clase tiene como responsabilidad manejar el estado de
autenticación.
*/
class Auth
{
	public function login(string $email, string $password): bool
	{
		// 1. Buscamos si existe un usuario en la base de 
		//	datos con el email.
		$usuario = (new Usuario)->traerPorEmail($email);

		if(!$usuario) return false;

		// 2. Pregunta si el password de ese usuario coincide
		//	con el que recibimos.
		if(!password_verify($password, $usuario->getPassword())) return false;

		// 3. Marcamos como autenticado al usuario.
		$this->autenticarUsuario($usuario);
		return true;
	}

	public function autenticarUsuario(Usuario $usuario)
	{
		// Usamos sesiones para guardar el usuario.
		$_SESSION['usuario_id'] = $usuario->getUsuarioId();
	}

	public function autenticado(): bool
	{
		return isset($_SESSION['usuario_id']);
	}
}