<?php
namespace DaVinci\Auth;

use DaVinci\Models\Usuario;
use DaVinci\Security\Hash;

/*
Esta clase tiene como responsabilidad manejar el estado de
autenticación.
*/
class Auth
{
	private ?Usuario $usuario = null;

	public function login(string $email, string $password): bool
	{
		// 1. Buscamos si existe un usuario en la base de 
		//	datos con el email.
		$usuario = (new Usuario)->traerPorEmail($email);

		if(!$usuario) return false;

		// 2. Pregunta si el password de ese usuario coincide
		//	con el que recibimos.
		// if(!password_verify($password, $usuario->getPassword())) return false;
		if(!Hash::verificar($password, $usuario->getPassword())) return false;

		// 3. Marcamos como autenticado al usuario.
		$this->autenticarUsuario($usuario);
		return true;
	}

	public function logout()
	{
		$this->usuario = null;
		unset($_SESSION['usuario_id']);
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

	public function getId(): ?int
	{
		return $_SESSION['usuario_id'] ?? null;
	}

	public function getUsuario(): ?Usuario
	{
		if(!$this->autenticado()) return null;

		// Buscamos al usuario si no lo tenemos ya.
		if(!$this->usuario) {
			$this->usuario = (new Usuario)->traerPorId($_SESSION['usuario_id']);
		}

		return $this->usuario;
	}
}