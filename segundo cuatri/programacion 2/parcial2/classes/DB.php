<?php

class DB
{
	public const DB_HOST = 'localhost';
	public const DB_USER = 'root';
	public const DB_PASS = '';
	public const DB_NAME = 'dw3_donato_pablo';

	/**
	 * Obtiene la conexión a la base de datos.
	 * 
	 * @return PDO
	 */
	public function getConexion()
	{
		$db_dsn = 'mysql:host=' . DB::DB_HOST . ';dbname=' . DB::DB_NAME . ';charset=utf8mb4';

		try {
			$db = new PDO($db_dsn, DB::DB_USER, DB::DB_PASS);	

			return $db;
		} catch (Exception $e) {
			// Acá deberíamos manejar mejor el error, por ejemplo,
			// mostrando una página de mantenimiento.
			echo "Error al conectar con MySQL";
			exit;
		}
	}
}