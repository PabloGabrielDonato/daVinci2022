<?php

class Producto
{

    private int $producto_id;
    private string $titulo;
    private string $sinopsis;
    private string $descripcion;
    private ?string $imagen;
    private ?string $imagen_descripcion;
    private float $precio;
    private string $fecha_publicacion;
    private string $categoria;


   

    /**
     * Instancia un producto, opcionalmente inicializada con un id.
     *
     * @param int|null $id
     */
    public function __construct(?int $id = null)
    {
        if ($id !== null) {
            $producto = $this->traerPorId($id);

            $this->producto_id = $producto->producto_id;
            $this->titulo = $producto->titulo;
            $this->sinopsis = $producto->sinopsis;
            $this->descripcion = $producto->descripcion;
            $this->imagen = $producto->imagen;
            $this->imagen_descripcion = $producto->imagen_descripcion;
            $this->precio = $producto->precio;
            $this->fecha_publicacion = $producto->fecha_publicacion;
            $this->categoria = $producto->categoria;

            
            
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
        $this->producto_id            = $data['producto_id'];
        $this->titulo                = $data['titulo'];
        $this->sinopsis              = $data['sinopsis'];
        $this->texto                 = $data['texto'];
        $this->imagen                = $data['imagen'];
        $this->imagen_descripcion    = $data['imagen_descripcion'];
        $this->precio                = $data['precio'];
    }

    /**
     * Obtiene todos los productos disponibles.
     *
     * @return Producto[] - Esto significa que el retorno es un "array de Producto".
     */
    public function todo(): array
    {
        $db = (new DB)->getConexion();
        $query = "SELECT * FROM producto INNER JOIN categoria ON categoria.categoria_id = producto.fk_categoria";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_CLASS, Producto::class);

        return $stmt->fetchAll();

    }

    /**
     * Obtiene el producto correspondiente al $id provisto.
     * Si el producto no existe, retorna null.
     *
     * @param int $id
     * @return Producto|null
     */
    function traerPorId(int $id): ?Producto
    {

        $db = (new DB)->getConexion();
        $query = "SELECT * FROM producto INNER JOIN categoria ON categoria.categoria_id = producto.fk_categoria
                WHERE producto_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, Producto::class);
        $producto = $stmt->fetch();
        if (!$producto) {
            return null;
        }
        return $producto;
    }

      /**
     * Obtiene el producto si está relacionado a la tabla detalles_compra (es decir, si fue vendido).
     * Si el producto no existe, retorna false, lo cual significa que se podria eliminar tranquilamente.
     *
     * @param int $id
     * @return bool
     */
    function productoVendido($id){

        $db = (new DB)->getConexion();
        $query = "SELECT * FROM producto INNER JOIN detalle_compra ON detalle_compra.producto_id = producto.producto_id  WHERE producto.producto_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $producto = $stmt->fetch();
        if (!$producto) {
            return false;
        }
        return true;
        
    }

    /**
     * Guarda el producto en la base de datos.
     * 
     * @param array $data
     * @throws PDOException
     */
    public function crear(array $data)
    {
        $db = (new DB)->getConexion();
        $query = "INSERT INTO producto(titulo, sinopsis, descripcion, imagen, imagen_descripcion, precio, fecha_publicacion, fk_categoria)
                VALUES (:titulo, :sinopsis, :descripcion, :imagen, :imagen_descripcion, :precio, :fecha_publicacion, :fk_categoria)";
        $stmt = $db->prepare($query);

        $stmt->execute([
            'titulo'            => $data['titulo'],
            'sinopsis'     => $data['sinopsis'],
            'descripcion'                => $data['descripcion'],
            'imagen'              => $data['imagen'],
            'imagen_descripcion'                 => $data['imagen_descripcion'],
            'precio'                => $data['precio'],
            'fecha_publicacion'    => $data['fecha_publicacion'],
            'fk_categoria'                => $data['fk_categoria'],
        ]);
    }

    public function editar(int $id, array $data)
    {
        $db = (new DB)->getConexion();
        $query = "UPDATE producto 
                SET 
                    titulo              = :titulo,
                    sinopsis            = :sinopsis,
                    descripcion               = :descripcion,
                    imagen              = :imagen,
                    imagen_descripcion  = :imagen_descripcion,
                    precio              = :precio,
                    fecha_publicacion   = :fecha_publicacion,
                    fk_categoria        = :fk_categoria
                WHERE producto_id = :producto_id";
        $stmt = $db->prepare($query);

        $stmt->execute([
            'producto_id'            => $id,
            'titulo'                => $data['titulo'],
            'sinopsis'              => $data['sinopsis'],
            'descripcion'                 => $data['descripcion'],
            'imagen'                => $data['imagen'],
            'imagen_descripcion'    => $data['imagen_descripcion'],
            'precio'                => $data['precio'],
            'fecha_publicacion'     => $data['fecha_publicacion'],
            'fk_categoria'          => $data['fk_categoria']
        ]);
    }


    public function eliminar(int $id)
    {
        $db = (new DB)->getConexion();
        $query = "DELETE FROM producto
                WHERE producto_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
    }

    /************** Setters & Getters **************/
    public function setProductoId(int $producto_id)
    {
        $this->producto_id = $producto_id;
    }

    public function getProductoId(): int
    {
        return $this->producto_id;
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

    public function setDescripcion(string $descripcion)
    {
        $this->descripcion = $descripcion;
    }

    public function getDescripcion(): string
    {
        return $this->descripcion;
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

    public function setPrecio(string $precio)
    {
        $this->precio = $precio;
    }

    public function getPrecio(): string
    {
        return $this->precio;
    }
    public function setCategoria(string $categoria)
    {
        $this->categoria = $categoria;
    }

    public function getCategoria(): string
    {
        return $this->categoria;
    }
}
