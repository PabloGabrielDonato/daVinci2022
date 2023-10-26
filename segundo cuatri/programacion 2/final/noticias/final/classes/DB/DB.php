<?php
namespace DaVinci\DB;

use PDO;

class DB
{
	public const DB_HOST = 'localhost';
	public const DB_USER = 'root';
	public const DB_PASS = '';
	public const DB_NAME = 'prog2_2022_2_m';

	/** @var ?PDO Propiedad estática para almacenar la conexión a la base. */
	private static ?PDO $db = null;

	/**
	 * Obtiene la conexión a la base de datos.
	 * 
	 * @return PDO
	 */
	public static function getConexion()
	{
		// Preguntamos si la conexión aún no se abrió, en cuyo
		// caso la iniciamos.
		if(self::$db === null) {
			self::$db = self::abrirConexion();
		}

		return self::$db;
	}

	private static function abrirConexion(): PDO
	{
		$db_dsn = 'mysql:host=' . DB::DB_HOST . ';dbname=' . DB::DB_NAME . ';charset=utf8mb4';

		try {
			// echo "Abriendo una NUEVA conexión con MySQL.<br>";
			return new PDO($db_dsn, DB::DB_USER, DB::DB_PASS);	
		} catch (Exception $e) {
			// Acá deberíamos manejar mejor el error, por ejemplo,
			// mostrando una página de mantenimiento.
			echo "Error al conectar con MySQL";
			exit;
		}
	}
}