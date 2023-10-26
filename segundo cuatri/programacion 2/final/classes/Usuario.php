<?php

class Usuario
{
    private int $usuario_id;

    private string $password;
    private string $nombre;
    private string $apellido;
    private string $email;
    private string $rol;


    /**
     * Instancia un producto, opcionalmente inicializada con un id.
     *
     * @param int|null $id
     */
    public function __construct(?int $id = null)
    {
        if ($id !== null) {
            $usuario = $this->traerPorId($id);

            $this->usuario_id = $usuario->usuario_id;
            $this->nombre = $usuario->nombre;
            $this->apellido = $usuario->apellido;
            $this->email = $usuario->email;
            $this->rol = $usuario->rol;
            $this->password = $usuario->password;
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
        $this->usuario_id          = $data['usuario_id'];
        $this->nombre                = $data['nombre'];
        $this->apellido              = $data['apellido'];
        $this->email                 = $data['email'];
        $this->rol                   = $data['rol'];
    }

    /**
     * Obtiene todos los usuarios disponibles.
     *
     * @return usuario[] - Esto significa que el retorno es un "array".
     */
    public function todo(): array
    {
        $db = (new DB)->getConexion();
        $query = "SELECT * FROM usuario INNER JOIN rol ON rol.rol_id = usuario.fk_rol";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_CLASS, usuario::class);

        return $stmt->fetchAll();
    }

    /**
     * Obtiene el usuario correspondiente al $id provisto.
     * Si el usuario no existe, retorna null.
     *
     * @param int $id
     * @return usuario|null
     */
    function traerPorId(int $id): ?usuario
    {

        $db = (new DB)->getConexion();
        $query = "SELECT * FROM usuario INNER JOIN rol ON rol.rol_id = usuario.fk_rol
                WHERE usuario_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, usuario::class);
        $usuario = $stmt->fetch();
        if (!$usuario) {
            return null;
        }
        return $usuario;
    }

    /**
     * Obtiene el usuario correspondiente al $correo provisto.
     * Si el usuario no existe, retorna null.
     *
     * @param string $id
     * @return usuario|null
     */
    function traerPorEmail(string $email): ?usuario
    {

        $db = (new DB)->getConexion();
        $query = "SELECT * FROM usuario INNER JOIN rol ON rol.rol_id = usuario.fk_rol
                WHERE email= ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$email]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, usuario::class);
        $usuario = $stmt->fetch();
        if (!$usuario) {
            return null;
        }
        return $usuario;
    }


    /**
     * Guarda el usuario en la base de datos.
     * 
     * @param array $data
     * @throws PDOException
     */
    public function crear(array $data)
    {
        $db = (new DB)->getConexion();
        $query = "INSERT INTO usuario (nombre, apellido, email, password, fk_rol) 
                VALUES (:nombre, :apellido, :email, :password, :fk_rol)";
        $stmt = $db->prepare($query);

        $stmt->execute([
            'nombre'            => $data['nombre'],
            'apellido'     => $data['apellido'],
            'email'                => $data['email'],
            'password'              => $data['password'],
            'fk_rol'                 => $data['fk_rol'],
        ]);

    }

    public function editar(int $id, array $data)
    {
        $db = (new DB)->getConexion();

        $query = "UPDATE usuario 
                SET nombre     = :nombre,
                    apellido   = :apellido,
                    email      = :email,
                    fk_rol     = :fk_rol
                WHERE usuario_id = :usuario_id";

        $stmt = $db->prepare($query);

        $stmt->execute([
            'usuario_id'            => $id,
            'nombre'                => $data['nombre'],
            'apellido'              => $data['apellido'],
            'email'                 => $data['email'],
            'fk_rol'                   => $data['fk_rol']
        ]);
    }


    public function eliminar(int $id)
    {
        $db = (new DB)->getConexion();
        $query = "DELETE FROM usuario
                WHERE usuario_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
    }

    /************** Setters & Getters **************/
   

  

  

 
    public function getUsuarioId() : int{
        return $this->usuario_id;
    }


    public function setNombre(string $nombre)
    {
        $this->nombre = $nombre;
    }

    public function getUsuarioNombre() : string{
        return $this->nombre;
    }

    public function setApellido(string $apellido)
    {
        $this->apellido = $apellido;
    }

    public function getApellido(): string
    {
        return $this->apellido;
    }

    public function setEmail(string $email)
    {
        $this->email = $email;
    }

    public function getEmail(): string
    {
        return $this->email;
    }


    public function setRol(string $rol)
    {
        $this->rol = $rol;
    }

    public function getUsuarioRol() : string{
        return $this->rol;
    }

    public function getUsuarioPassword() : string{
        return $this->password;
    }


  
}
