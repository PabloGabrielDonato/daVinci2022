<?php

class Categoria
{

    private int $categoria_id;
    private string $categoria;

    
    /**
     * Instancia una categoría, opcionalmente inicializada con un id.
     *
     * @param int|null $id
     */
    public function __construct(?int $id = null)
    {
        if ($id !== null) {
            $categoria = $this->traerPorId($id);

            $this->categoria_id = $categoria->categoria_id;
            $this->categoria = $categoria->categoria;
            
            
        }
    }

      /**
     * Obtiene todos las categorías disponibles.
     *
     * @return Categoria[] - Esto significa que el retorno es un "array de Categoria".
     */
    public function todo(): array
    {
        $db = (new DB)->getConexion();
        $query = "SELECT * FROM categoria";
        $stmt = $db->prepare($query);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_CLASS, Categoria::class);

        return $stmt->fetchAll();

    }

        /**
     * Obtiene la categoria correspondiente al $id provisto.
     * Si la categoria no existe, retorna null.
     *
     * @param int $id
     * @return Categoria|null
     */
    function traerPorId(int $id): ?Categoria
    {

        $db = (new DB)->getConexion();
        $query = "SELECT * FROM categoria WHERE categoria_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $stmt->setFetchMode(PDO::FETCH_CLASS, Categoria::class);
        $categoria = $stmt->fetch();
        if (!$categoria) {
            return null;
        }
        return $categoria;
    }

    public function setCategoriaId(int $categoria_id)
    {
        $this->categoria_id = $categoria_id;
    }

    public function getCategoriaId(): int
    {
        return $this->categoria_id;
    }

    public function setCategoriaNombre(string $categoria)
    {
        $this->categoria = $categoria;
    }

    public function getCategoriaNombre(): string
    {
        return $this->categoria;
    }

}
?>