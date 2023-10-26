<?php 
namespace DaVinci\Models;

use PDO;
use DaVinci\DB\DB;

/**
 * Clase de base para todos los modelos.
 */
class Modelo
{
	protected string $table = "";
	protected string $primaryKey = "";

	/**
	 * Obtiene todos los estados de publicación.
	 * 
	 * @return static[]
	 */
	public function todo(): array
	{
		$db = DB::getConexion();
		$query = "SELECT * FROM " . $this->table;
		$stmt = $db->prepare($query);
		$stmt->execute();
		// static vs self
		// self se reemplaza automáticamente por el nombre de la
		// clase donde está escrito el self.
		// Por ejemplo, en este caso, self se reemplaza por 
		// Modelo.
		// static, en cambio, cuando se usa como reemplazo de
		// nombre de clase, significa la clase que está ejecutando
		// el método. No necesariamente la clase en la que está
		// escrito.
		// $stmt->setFetchMode(PDO::FETCH_CLASS, self::class);
		$stmt->setFetchMode(PDO::FETCH_CLASS, static::class);

		return $stmt->fetchAll();
	}

	public function traerPorId(int $id): self|null
	{
		$db = DB::getConexion();
		$query = "SELECT * FROM " . $this->table . " 
				WHERE " . $this->primaryKey . " = ?";
		$stmt = $db->prepare($query);
		$stmt->execute([$id]);
		$stmt->setFetchMode(PDO::FETCH_CLASS, static::class);

		$obj = $stmt->fetch();

		if(!$obj) return null;

		return $obj;
	}
}