<?php
// Definimos la clase Noticia de nuestro proyecto.
// Esta clase va a representar cómo es una Noticia.

class Noticia
{
    private int $noticia_id;
    private int $usuario_fk;
    private string $fecha_publicacion;
    private string $titulo;
    private string $sinopsis;
    private string $texto;
    private ?string $imagen;
    private ?string $imagen_descripcion;

    /**
     * Instancia una Noticia, opcionalmente inicializada con un id.
     *
     * @param int|null $id
     */
    public function __construct(?int $id = null)
    {
        if($id !== null) {
            $noticia = $this->traerPorId($id);
            $this->noticia_id = $noticia->noticia_id;
            $this->titulo = $noticia->titulo;
            $this->sinopsis = $noticia->sinopsis;
            $this->texto = $noticia->texto;
            $this->imagen = $noticia->imagen;
            $this->imagen_descripcion = $noticia->imagen_descripcion;
        }
    }

    /**
     * Guarda los valores de todas las claves coincidentes en las propiedades de la clase.
     *
     * @param array $data
     * @return void
     */
    public function cargarDatosDeArray(array $data)
    {
        $this->noticia_id            = $data['noticia_id'];
        $this->titulo                = $data['titulo'];
        $this->sinopsis              = $data['sinopsis'];
        $this->texto                 = $data['texto'];
        $this->imagen                = $data['imagen'];
        $this->imagen_descripcion    = $data['imagen_descripcion'];
    }

    /**
     * Obtiene todas las noticias disponibles.
     *
     * @return Noticia[] - Esto significa que el retorno es un "array de Noticia".
     */
    public function todo(): array
    {
        $db = (new DB)->getConexion();
        $query = "SELECT * FROM noticias";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_CLASS, Noticia::class);

        // fetchAll() es un método que retorna todos los 
        // registros como un array.
        return $stmt->fetchAll();

        // $contenido = file_get_contents(__DIR__ . '/../data/noticias.json');
        // $data = json_decode($contenido, true);

        // // Creamos un array nuevo para contener todas las Noticias.
        // $salida = [];

        // // Recorremos los datos de las noticias en $data para generar las instancias de la clase.
        // foreach($data as $item) {
        //     $noticia = new Noticia;
        //     $noticia->cargarDatosDeArray($item);

        //     // Pusheamos la noticia al array de salida.
        //     $salida[] = $noticia;
        // }

        // return $salida;
    }

    /**
     * Obtiene la noticia correspondiente al $id provisto.
     * Si la noticia no existe, retorna null.
     *
     * @param int $id
     * @return Noticia|null
     */
    function traerPorId(int $id): ?Noticia
    {
        // $noticias = $this->todo();
        // foreach($noticias as $noticia) {
        //     if($noticia->noticia_id === $id) {
        //         // Encontramos la noticia, así que la retornamos.
        //         return $noticia;
        //     }
        // }
        $db = (new DB)->getConexion();
        $query = "SELECT * FROM noticias
                WHERE noticia_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, Noticia::class);
        $noticia = $stmt->fetch();
        if(!$noticia) {
            return null;
        }
        return $noticia;
    }

    /**
     * Guarda la noticia en la base de datos.
     * 
     * @param array $data
     * @throws PDOException
     */
    public function crear(array $data)
    {
        $db = (new DB)->getConexion();
        $query = "INSERT INTO noticias (usuario_fk, fecha_publicacion, titulo, sinopsis, texto, imagen, imagen_descripcion) 
                VALUES (:usuario_fk, :fecha_publicacion, :titulo, :sinopsis, :texto, :imagen, :imagen_descripcion)";
        $stmt = $db->prepare($query);
        // En este caso estamos usando named holders/tokens, el array
        // debe ser asociativo, y las claves deben coincidir con los
        // nombres de los holders/tokens (con o sin el ":").
        $stmt->execute([
            'usuario_fk'            => $data['usuario_fk'],
            'fecha_publicacion'     => $data['fecha_publicacion'],
            'titulo'                => $data['titulo'],
            'sinopsis'              => $data['sinopsis'],
            'texto'                 => $data['texto'],
            'imagen'                => $data['imagen'],
            'imagen_descripcion'    => $data['imagen_descripcion'],
        ]);
    }

    public function editar(int $id, array $data)
    {
        $db = (new DB)->getConexion();
        $query = "UPDATE noticias 
                SET usuario_fk          = :usuario_fk,
                    fecha_publicacion   = :fecha_publicacion,
                    titulo              = :titulo,
                    sinopsis            = :sinopsis,
                    texto               = :texto,
                    imagen              = :imagen,
                    imagen_descripcion  = :imagen_descripcion
                WHERE noticia_id = :noticia_id";
        $stmt = $db->prepare($query);
        // En este caso estamos usando named holders/tokens, el array
        // debe ser asociativo, y las claves deben coincidir con los
        // nombres de los holders/tokens (con o sin el ":").
        $stmt->execute([
            'noticia_id'            => $id,
            'usuario_fk'            => $data['usuario_fk'],
            'fecha_publicacion'     => $data['fecha_publicacion'],
            'titulo'                => $data['titulo'],
            'sinopsis'              => $data['sinopsis'],
            'texto'                 => $data['texto'],
            'imagen'                => $data['imagen'],
            'imagen_descripcion'    => $data['imagen_descripcion'],
        ]);
    }

    /**
     * Elimina la noticia de la base de datos.
     */
    public function eliminar(int $id)
    {
        $db = (new DB)->getConexion();
        $query = "DELETE FROM noticias
                WHERE noticia_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
    }

    /************** Setters & Getters **************/
    public function setNoticiaId(int $noticia_id)
    {
        $this->noticia_id = $noticia_id;
    }

    public function getNoticiaId(): int
    {
        return $this->noticia_id;
    }

    public function setFechaPublicacion(string $fecha_publicacion)
    {
        $this->fecha_publicacion = $fecha_publicacion;
    }

    public function getFechaPublicacion(): string
    {
        return $this->fecha_publicacion;
    }

    public function setTitulo(string $titulo)
    {
        $this->titulo = $titulo;
    }

    public function getTitulo(): string
    {
        return $this->titulo;
    }

    public function setSinopsis(string $sinopsis)
    {
        $this->sinopsis = $sinopsis;
    }

    public function getSinopsis(): string
    {
        return $this->sinopsis;
    }

    public function setTexto(string $texto)
    {
        $this->texto = $texto;
    }

    public function getTexto(): string
    {
        return $this->texto;
    }

    public function setImagen(?string $imagen)
    {
        $this->imagen = $imagen;
    }

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagenDescripcion(?string $imagen_descripcion)
    {
        $this->imagen_descripcion = $imagen_descripcion;
    }

    public function getImagenDescripcion(): ?string
    {
        return $this->imagen_descripcion;
    }
}
