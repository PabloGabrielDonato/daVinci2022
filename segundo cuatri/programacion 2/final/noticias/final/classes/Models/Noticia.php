<?php
// Definimos la clase Noticia de nuestro proyecto.
// Esta clase va a representar cómo es una Noticia.
namespace DaVinci\Models;

use PDO;
use DaVinci\DB\DB;

class Noticia
{
    private int $noticia_id;
    private int $usuario_fk;
    private int $estado_publicacion_fk;
    private string $fecha_publicacion;
    private string $titulo;
    private string $sinopsis;
    private string $texto;
    private ?string $imagen;
    private ?string $imagen_descripcion;

    private array $etiquetas_ids = [];

    private EstadoPublicacion $estado_publicacion;
    private Usuario $usuario;
    /** @var Etiqueta[] */
    private array $etiquetas = [];

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
            $this->usuario_fk = $noticia->usuario_fk;
            $this->estado_publicacion_fk = $noticia->estado_publicacion_fk;
            $this->fecha_publicacion = $noticia->fecha_publicacion;
            $this->titulo = $noticia->titulo;
            $this->sinopsis = $noticia->sinopsis;
            $this->texto = $noticia->texto;
            $this->imagen = $noticia->imagen;
            $this->imagen_descripcion = $noticia->imagen_descripcion;
            $this->etiquetas = $noticia->etiquetas;
            $this->etiquetas_ids = $noticia->etiquetas_ids;
        }
    }

    public function cargarDatosDeArray(array $fila)
    {
        $this->noticia_id               = $fila['noticia_id'];
        $this->usuario_fk               = $fila['usuario_fk'];
        $this->estado_publicacion_fk    = $fila['estado_publicacion_fk'];
        $this->fecha_publicacion        = $fila['fecha_publicacion'];
        $this->titulo                   = $fila['titulo'];
        $this->sinopsis                 = $fila['sinopsis'];
        $this->texto                    = $fila['texto'];
        $this->imagen                   = $fila['imagen'];
        $this->imagen_descripcion       = $fila['imagen_descripcion'];
    }

    /**
     * Obtiene todas las noticias disponibles.
     *
     * @return Noticia[] - Esto significa que el retorno es un "array de Noticia".
     */
    public function todo(): array
    {
        $db = DB::getConexion();
        // Agregamos el JOIN con estados_publicacion.
        // Noten que aclaramos que queremos todos los campos de noticias,
        // pero de estados_publicacion solo queremos el "nombre", y con
        // el "alias" "estado_publicacion" (que es como llamamos a al
        // propiedad en la clase).
        // Esto es un uso simple, pero no muy fiel al paradigma de objetos.
        $query = "SELECT *
                FROM noticias n
                JOIN estados_publicacion ep
                ON n.estado_publicacion_fk = ep.estado_publicacion_id";
        $stmt = $db->prepare($query);
        $stmt->execute();
        // $stmt->setFetchMode(PDO::FETCH_CLASS, Noticia::class);
        // Para poder aplicar el "approach 1" que hablamos de JOINs con OOP,
        // no podemos usar el FETCH_CLASS. La razón es que tenemos los datos
        // de _2_ (o más) tablas en un mismo resultset.
        // En su lugar, vamos a parsear los registros como un array, y 
        // crear las clases, y el array de salida, "manualmente".
        $salida = [];

        while($fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $noticia = new Noticia;
            $noticia->cargarDatosDeArray($fila);

            $estado = new EstadoPublicacion;
            $estado->cargarDatosDeArray($fila);

            $noticia->setEstadoPublicacion($estado);

            $salida[] = $noticia;
        }

        return $salida;
    }

    /**
     * Obtiene todas las noticias publicadas.
     *
     * @return Noticia[] - Esto significa que el retorno es un "array de Noticia".
     */
    public function publicadas(): array
    {
        $db = DB::getConexion();
        $query = "SELECT * 
                FROM noticias n
                JOIN usuarios u
                ON n.usuario_fk = u.usuario_id
                WHERE n.estado_publicacion_fk = 2"; // 2 es el estado "publicada".
        $stmt = $db->prepare($query);
        $stmt->execute();
        $salida = [];

        while($fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $noticia = new Noticia;
            $noticia->cargarDatosDeArray($fila);

            $usuario = new Usuario;
            $usuario->cargarDatosDeArray($fila);

            $noticia->setUsuario($usuario);

            $salida[] = $noticia;
        }

        $this->cargarEtiquetasParaNoticias($salida);

        return $salida;
        // $stmt->setFetchMode(PDO::FETCH_CLASS, Noticia::class);

        // // fetchAll() es un método que retorna todos los 
        // // registros como un array.
        // return $stmt->fetchAll();
    }

    public function cargarEtiquetasParaNoticias(array $noticias)
    {
        // Para poder cargar solo las etiquetas necesarias, 
        // tenemos que llevar una lista de los ids de las noticias
        // de las que tenemos que cargar las etiquetas.
        $ids = array_map(function($noticia) {
            return $noticia->noticia_id;
        }, $noticias);

        // Las etiquetas estás organizadas en un array indexado
        // por los ids de noticias.
        $etiquetas = (new Etiqueta)->cargarParaNoticias($ids);

        // Recorremos las noticias para asignarles las etiquetas.
        foreach($noticias as $noticia) {
            $noticia->setEtiquetas($etiquetas[$noticia->getNoticiaId()]);
        }
    }

    public function publicadasGroup(): array
    {
        $db = DB::getConexion();
        $query = "SELECT 
                n.*,
                u.*,
                GROUP_CONCAT(e.etiqueta_id,':',e.nombre SEPARATOR '|') AS 'etiquetas'
            FROM noticias n
            JOIN usuarios u
            ON n.usuario_fk = u.usuario_id
            JOIN noticias_tienen_etiquetas nte
            ON nte.noticia_fk = n.noticia_id
            JOIN etiquetas e
            ON nte.etiqueta_fk = e.etiqueta_id
            WHERE n.estado_publicacion_fk = 2
            GROUP BY n.noticia_id"; // 2 es el estado "publicada".
        $stmt = $db->prepare($query);
        $stmt->execute();
        $salida = [];

        while($fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $noticia = new Noticia;
            $noticia->cargarDatosDeArray($fila);

            $usuario = new Usuario;
            $usuario->cargarDatosDeArray($fila);

            $noticia->setUsuario($usuario);

            // Parseamos las etiquetas.
            // $fila['etiquetas'] = '5:Récord|7:Partidos|11:San Antonio Spurs';
            // $etiquetasData = ['5:Récord', '7:Partidos', '11:San Antonio Spurs'];
            $etiquetasData = explode('|', $fila['etiquetas']);
            $etiquetas = [];
            foreach($etiquetasData as $etiquetaData) {
                // $partes = ['7', 'Partidos'];
                $partes = explode(':', $etiquetaData);
                $etiqueta = new Etiqueta;
                $etiqueta->setEtiquetaId($partes[0]);
                $etiqueta->setNombre($partes[1]);
                $etiquetas[] = $etiqueta;
            }
            $noticia->setEtiquetas($etiquetas);

            $salida[] = $noticia;
        }

        return $salida;
        // $stmt->setFetchMode(PDO::FETCH_CLASS, Noticia::class);

        // // fetchAll() es un método que retorna todos los 
        // // registros como un array.
        // return $stmt->fetchAll();
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
        $db = DB::getConexion();
        $query = "SELECT * FROM noticias
                WHERE noticia_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, Noticia::class);
        $noticia = $stmt->fetch();
        if(!$noticia) {
            return null;
        }

        $noticia->cargarEtiquetas();

        return $noticia;
    }

    protected function cargarEtiquetas()
    {
        $db = DB::getConexion();
        // Traemos los ids de las etiquetas.
        $query = "SELECT e.* 
                FROM noticias_tienen_etiquetas nte
                JOIN etiquetas e
                ON nte.etiqueta_fk = e.etiqueta_id
                WHERE nte.noticia_fk = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$this->noticia_id]);

        $etiquetasIds = [];
        $this->etiquetas = [];
        while($fila = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $etiquetasIds[] = $fila['etiqueta_id'];

            $etiqueta = new Etiqueta;
            $etiqueta->cargarDatosDeArray($fila);
            $this->etiquetas[] = $etiqueta;
        }
        $this->setEtiquetasIds($etiquetasIds);
    }

    /**
     * Guarda la noticia en la base de datos.
     * 
     * @param array $data
     * @throws PDOException
     */
    public function crear(array $data)
    {
        $db = DB::getConexion();
        $db->beginTransaction();

        try {
            $query = "INSERT INTO noticias (usuario_fk, estado_publicacion_fk, fecha_publicacion, titulo, sinopsis, texto, imagen, imagen_descripcion) 
                    VALUES (:usuario_fk, :estado_publicacion_fk, :fecha_publicacion, :titulo, :sinopsis, :texto, :imagen, :imagen_descripcion)";
            $stmt = $db->prepare($query);
            // En este caso estamos usando named holders/tokens, el array
            // debe ser asociativo, y las claves deben coincidir con los
            // nombres de los holders/tokens (con o sin el ":").
            $stmt->execute([
                'usuario_fk'            => $data['usuario_fk'],
                'estado_publicacion_fk' => $data['estado_publicacion_fk'],
                'fecha_publicacion'     => $data['fecha_publicacion'],
                'titulo'                => $data['titulo'],
                'sinopsis'              => $data['sinopsis'],
                'texto'                 => $data['texto'],
                'imagen'                => $data['imagen'],
                'imagen_descripcion'    => $data['imagen_descripcion'],
            ]);

            // Pedimos a MySQL el valor del último id que se haya auto-generado.
            $noticiaId = $db->lastInsertId();

            if(!empty($data['etiquetas'])) {
                $this->asociarEtiquetas($noticiaId, $data['etiquetas']);
            }
            $db->commit();
        } catch (\Exception $e) {
            $db->rollBack();
            throw $e;
        }
    }

    /**
     * Graba los registros de las relaciones entre la noticia y las etiquetas.
     */
    public function asociarEtiquetas(int $noticiaId, array $etiquetas)
    {
        /*
        Como vimos con SQL, para poder asocias las etiquetas a la noticia,
        tenemos que insertar registos en la tabla pivot, algo como:

        INSERT INTO noticias_tienen_etiquetas (noticia_fk, etiqueta_fk)
        VALUES
            (1, 5),
            (1, 7), ...

        Nada más que los pares de valores de las FKs, en este caso, son 
        dinámicos. El id de la noticia es el que se haya auto-generado
        (que lo pedimos como el parámetro $noticiaId), y los ids de las
        etiquetas son los que haya seleccionado el usuario (que los pedimos
        con el parámetro $etiquetas).

        Por tanto, vamos a tener que crear un par de valores para insertar
        por cada etiqueta que hayamos recibido.
        Esto va a tener que incluir el temita de los holders para prevenir
        posibles ataques de inyección SQL.

        Suponiendo que partimos de los datos:
        $noticiaId = 7;
        $etiquetas = [1, 4, 5, 8];
        El query resultante que tenemos que armar, va a ser algo como el 
        siguiente:
        INSERT INTO noticias_tienen_etiquetas (noticia_fk, etiqueta_fk)
        VALUES  (?, ?),     -- Par (7, 1)
                (?, ?),     -- Par (7, 4)
                (?, ?),     -- Par (7, 5)
                (?, ?);     -- Par (7, 8)

        Como usamos holders posicionales/secuenciales, vamos a necesitar
        pasar en el execute un array que contenga los valores que corresponden
        a cada holder como un arraty secuencial, en el orden que se tienen que
        asociar.
        Esto daría como resultado un array como este:
        $valores = [7, 1, 7, 4, 7, 5, 7, 8];
        */

        // Preparamos dos arrays para guardar los pares de holders, y los valores.
        $holders = [];
        $valores = [];

        foreach($etiquetas as $etiquetaId) {
            $holders[] = "(?, ?)";
            $valores[] = $noticiaId;
            $valores[] = $etiquetaId;
            // array_push($valores, $noticiaId, $etiquetaId);
        }

        // Armamos el query.
        $query = "INSERT INTO noticias_tienen_etiquetas (noticia_fk, etiqueta_fk)
                VALUES " . implode(', ', $holders);
        $db = DB::getConexion();
        $stmt = $db->prepare($query);
        $stmt->execute($valores);
    }

    public function desasociarEtiquetas(int $id)
    {
        $db = DB::getConexion();
        $query = "DELETE FROM noticias_tienen_etiquetas
                WHERE noticia_fk = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
    }

    public function editar(int $id, array $data)
    {
        $db = DB::getConexion();

        // Iniciamos la transacción.
        $db->beginTransaction();

        try {
            $query = "UPDATE noticias 
                    SET usuario_fk              = :usuario_fk,
                        estado_publicacion_fk   = :estado_publicacion_fk,
                        -- fecha_publicacion       = :fecha_publicacion,
                        titulo                  = :titulo,
                        sinopsis                = :sinopsis,
                        texto                   = :texto,
                        imagen                  = :imagen,
                        imagen_descripcion      = :imagen_descripcion
                    WHERE noticia_id = :noticia_id";
            $stmt = $db->prepare($query);
            // En este caso estamos usando named holders/tokens, el array
            // debe ser asociativo, y las claves deben coincidir con los
            // nombres de los holders/tokens (con o sin el ":").
            $stmt->execute([
                'noticia_id'            => $id,
                'usuario_fk'            => $data['usuario_fk'],
                'estado_publicacion_fk' => $data['estado_publicacion_fk'],
                // 'fecha_publicacion'     => $data['fecha_publicacion'],
                'titulo'                => $data['titulo'],
                'sinopsis'              => $data['sinopsis'],
                'texto'                 => $data['texto'],
                'imagen'                => $data['imagen'],
                'imagen_descripcion'    => $data['imagen_descripcion'],
            ]);

            // Para manejar las etiquetas, la forma más fácil es desasociar todas las
            // etiquetas actuales, y volver a asociar las que el usuario pide.
            $this->desasociarEtiquetas($id);
            if(!empty($data['etiquetas'])) {
                $this->asociarEtiquetas($id, $data['etiquetas']);
            }

            // Guardamos los cambios.
            $db->commit();
        } catch (\Exception $e) {
            // Cancelamos los cambios.
            $db->rollBack();
            // Informamos que ocurrió un error.
            throw $e;
        }
    }

    /**
     * Elimina la noticia de la base de datos.
     */
    public function eliminar(int $id)
    {
        // Primero, desasociamos las etiquetas que corresponden a la noticia.
        $this->desasociarEtiquetas($id);

        $db = DB::getConexion();
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

    public function getUsuarioFk(): int
    {
        return $this->usuario_fk;
    }

    public function setUsuarioFk(int $usuario_fk)
    {
        $this->usuario_fk = $usuario_fk;
    }

    public function getEstadoPublicacionFk(): int
    {
        return $this->estado_publicacion_fk;
    }

    public function setEstadoPublicacionFk(int $estado_publicacion_fk)
    {
        $this->estado_publicacion_fk = $estado_publicacion_fk;
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

    public function setEstadoPublicacion(EstadoPublicacion $estado_publicacion)
    {
        $this->estado_publicacion = $estado_publicacion;
    }

    public function getEstadoPublicacion(): EstadoPublicacion
    {
        return $this->estado_publicacion;
    }

    public function setUsuario(Usuario $usuario)
    {
        $this->usuario = $usuario;
    }

    public function getUsuario(): Usuario
    {
        return $this->usuario;
    }

    public function setEtiquetasIds(array $etiquetas_ids)
    {
        $this->etiquetas_ids = $etiquetas_ids;
    }

    public function getEtiquetasIds(): array
    {
        return $this->etiquetas_ids;
    }

    /**
     * @param Etiqueta[] $etiquetas
     */
    public function setEtiquetas(array $etiquetas)
    {
        $this->etiquetas = $etiquetas;
    }

    /**
     * @return Etiqueta[]
     */
    public function getEtiquetas(): array
    {
        return $this->etiquetas;
    }
}
