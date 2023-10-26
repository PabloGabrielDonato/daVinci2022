<?php

namespace DaVinci\Models;

use PDO;
use DaVinci\DB\DB;

class EstadoPublicacion extends Modelo
{
	private int $estado_publicacion_id;
	private string $nombre;

	protected string $table = "estados_publicacion";
	protected string $primaryKey = "estado_publicacion_id";

    public function cargarDatosDeArray(array $fila)
    {
        $this->estado_publicacion_id 	= $fila['estado_publicacion_id'];
        $this->nombre 					= $fila['nombre'];
    }

	/********* SETTERS & GETTERS *********/
	public function getEstadoPublicacionId(): int
	{
		return $this->estado_publicacion_id;
	}

	public function setEstadoPublicacionId(int $estado_publicacion_id)
	{
		$this->estado_publicacion_id = $estado_publicacion_id;
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