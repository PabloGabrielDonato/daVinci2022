<?php
namespace DaVinci\Models;

use PDO;
use DaVinci\DB\DB;

class Usuario extends Modelo
{
	private int $usuario_id;
	private int $rol_fk;
	private string $email;
	private string $password;
	private ?string $username;

	protected string $table = "usuarios";
	protected string $primaryKey = "usuario_id";

    public function cargarDatosDeArray(array $fila)
    {
        $this->usuario_id 	= $fila['usuario_id'];
        $this->rol_fk       = $fila['rol_fk'];
        $this->email        = $fila['email'];
        $this->password     = $fila['password'];
        $this->username     = $fila['username'];
    }

	public function traerPorEmail(string $email): self|null
	{
		$db = DB::getConexion();
		$query = "SELECT * FROM usuarios 
				WHERE email = ?";
		$stmt = $db->prepare($query);
		$stmt->execute([$email]);
		$stmt->setFetchMode(PDO::FETCH_CLASS, self::class);

		$usuario = $stmt->fetch();

		if(!$usuario) return null;

		return $usuario;
	}

	public function crear(array $data)
	{
		$db = DB::getConexion();
		$query = "INSERT INTO usuarios (rol_fk, email, password) 
				VALUES (:rol_fk, :email, :password)";
		$stmt = $db->prepare($query);
		$stmt->execute([
			'rol_fk' 	=> $data['rol_fk'],
			'email' 	=> $data['email'],
			'password' 	=> $data['password'],
		]);
	}

	public function actualizarPassword(string $password)
	{
		$db = DB::getConexion();
		$query = "UPDATE usuarios 
				SET password = :password 
				WHERE usuario_id = :usuario_id";
		$stmt = $db->prepare($query);
		$stmt->execute([
			'password' => $password,
			'usuario_id' => $this->getUsuarioId(),
		]);
	}

	/*************** Setters & Getters ***************/
	public function getUsuarioId(): int
	{
		return $this->usuario_id;
	}

	public function setUsuarioId(int $id)
	{
		$this->usuario_id = $id;
	}

	public function getRolFk(): int
	{
		return $this->rol_fk;
	}

	public function setRolFk(int $rol_fk)
	{
		$this->rol_fk = $rol_fk;
	}

	public function getEmail(): string
	{
		return $this->email;
	}

	public function setEmail(string $email)
	{
		$this->email = $email;
	}

	public function getPassword(): string
	{
		return $this->password;
	}

	public function setPassword(string $password)
	{
		$this->password = $password;
	}

	public function getUsername(): ?string
	{
		return $this->username;
	}

	public function setUsername(?string $username)
	{
		$this->username = $username;
	}
}