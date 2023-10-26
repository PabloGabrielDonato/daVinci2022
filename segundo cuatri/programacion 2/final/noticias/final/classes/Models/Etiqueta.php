<?php

namespace DaVinci\Models;

use PDO;
use DaVinci\DB\DB;

class Etiqueta extends Modelo
{
	private int $etiqueta_id;
	private string $nombre;

	protected string $table = "etiquetas";
	protected string $primaryKey = "etiqueta_id";

	public function cargarDatosDeArray(array $data)
	{
		$this->etiqueta_id  = $data['etiqueta_id'];
		$this->nombre 		= $data['nombre'];
	}

	public function cargarParaNoticias(array $ids): array
	{
		$db = DB::getConexion();
		// Generamos un array la cantidad de "?" necesarios.
		$holders = array_fill(0, count($ids), '?');
		// Los pasamos a un string de forma "(?, ?, ?, ?).
		$holders = implode(',', $holders);
		$query = "SELECT nte.noticia_fk, e.* 
                FROM noticias_tienen_etiquetas nte
                JOIN etiquetas e
                ON nte.etiqueta_fk = e.etiqueta_id
                WHERE nte.noticia_fk IN (" . $holders . ")";
    	$stmt = $db->prepare($query);
    	$stmt->execute($ids);
    	// Armamos un array de salida, donde las claves sean los
    	// IDs de noticias, y los valores sean arrays con las 
    	// etiquetas que corresponden a cada una.
    	$salida = [];
    	while($fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
    		$etiqueta = new Etiqueta;
    		$etiqueta->cargarDatosDeArray($fila);

    		// Agregamos la etiqueta al array de la noticia que le
    		// corresponde.
    		$salida[$fila['noticia_fk']][] = $etiqueta;
    	}
    	// echo "<pre>Etiquetas:";
    	// print_r($salida);
    	// echo "</pre>";
    	return $salida;
	}

	/********* SETTERS & GETTERS *********/
	public function getEtiquetaId(): int
	{
		return $this->etiqueta_id;
	}

	public function setEtiquetaId(int $etiqueta_id)
	{
		$this->etiqueta_id = $etiqueta_id;
	}

	public function getNombre(): string
	{
		return $this->nombre;
	}

	public function setNombre(string $nombre)
	{
		$this->nombre = $nombre;
	}
}