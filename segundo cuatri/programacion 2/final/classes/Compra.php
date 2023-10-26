<?php 

class Compra {

    

   /**
     * Obtiene el listado de compras de un usuario especifico.
     * Si el usuario no ha realizado ninguna compra, devuelve null
     *
     * @param int $usuario_id
     * @return array|null
     */
    function traerComprasDeUsuario(int $usuario_id): array|null
    {
        $db = (new DB)->getConexion();
        $query = "SELECT * FROM compras INNER JOIN usuario ON usuario.usuario_id = compras.usuario_id WHERE compras.usuario_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$usuario_id]);
        $producto = $stmt->fetchAll();
        if (!$producto) {
            return null;
        }
        return $producto;
    }

    


    /**
     * Guarda la compra en la base de datos.
     * 
     * @param array $data
     * @return int|bool
     */
    public function registrarCompra(array $data) : int|bool {
        
        $db = (new DB)->getConexion();
        $query = "INSERT INTO compras( total, fecha, usuario_id) 
                VALUES (:total, :fecha, :usuario_id)";
        $stmt = $db->prepare($query);

        $resultado = $stmt->execute([
            'total'            => $data['total'],
            'fecha'     => $data['fecha'],
            'usuario_id'                => $data['usuario_id']]);

            if($resultado){
                return $db->lastInsertId();
            }

            return false;
        
    }


    /**
     * Guarda el detalle de la compra en la base de datos
     * 
     * @param array $data
     * @throws PDOException
     */
    public function registrarDetalleCompra(array $data) {
        
        $db = (new DB)->getConexion();
        $query = "INSERT INTO detalle_compra(cantidad, precio_venta, producto_id, compra_id) 
                    VALUES (:cantidad, :precio, :producto_id, :compra_id)";
        $stmt = $db->prepare($query);
        $resultado = $stmt->execute([
            'cantidad'            => $data['cantidad'],
            'precio'     => $data['precio'],
            'producto_id'                => $data['producto_id'],
            'compra_id' => $data['compra_id']
        ]);

        
    }
}

?>