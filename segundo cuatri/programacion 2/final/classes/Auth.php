<?php 

class Auth{

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
		if(!password_verify($password, $usuario->getUsuarioPassword())) return false;

		// 3. Marcamos como autenticado al usuario.
		$this->autenticarUsuario($usuario);
		return true;
	}

    public function autenticarUsuario(Usuario $usuario)
	{
		// Usamos sesiones para guardar el usuario.
		$_SESSION['usuario_id'] = $usuario->getUsuarioId();
		$_SESSION['nombre'] = $usuario->getUsuarioNombre();
		$_SESSION['rol'] = $usuario->getUsuarioRol();
	}

    public function logout()
	{
		$this->usuario = null;
		unset($_SESSION['usuario_id']);
		unset($_SESSION['nombre']);
		unset($_SESSION['rol']);
		unset($_SESSION['carrito']);
	}

    public function autenticado(): bool
	{
		return isset($_SESSION['usuario_id']);
	}

	public function autenticadoAdmin(): bool
	{
		return ($_SESSION['rol'] == 'admin') ? true : false;
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


?>