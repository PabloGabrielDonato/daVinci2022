<?php 

class Carrito{

    private array $carrito;

      /**
     * Instancia un producto, opcionalmente inicializada con un id.
     *
     * @param int|null $id
     */
    public function __construct(array $carrito = null)
    {
        if ($carrito !== null){
            $this->carrito = $carrito;
        }
    
    }

       /**
     * Obtiene el producto correspondiente al $id provisto.
     * Si el producto no existe, retorna null.
     *
     * @param int $id
     * @return array|null
     */
    function traerProductoPorId(int $id): array|null
    {
        $db = (new DB)->getConexion();
        $query = "SELECT producto_id,titulo,sinopsis,imagen,precio FROM producto WHERE producto_id = ?";
        $stmt = $db->prepare($query);
        $stmt->execute([$id]);
        $producto = $stmt->fetch();
        if (!$producto) {
            return null;
        }
        return $producto;
    }

    /**
     * Añade el item al carrito
     *
     * @param array $data
     * @return void
     */
    public function cargarCarrito(array $data)
    {
        $carrito = $this->obtenerCarrito();
        
        $bandera = false;
        if(!empty($carrito)){
            // RECORRO EL CARRITO BUSCANDO SI EL PRODUCTO YA ESTA AGREGADO
            for ($i=0; $i < count($carrito); $i++) { 
                if($data['producto_id'] == $carrito[$i]['producto_id']){
                    $pos = $i;
                    $bandera = true;
                }
            }

            if($bandera){
                    //SI EL PRODUCTO YA EXISTE EN EL CARRITO AUMENTO LA CANTIDAD Y EL IMPORTE
                    $carrito[$pos]['cantidad'] += 1;
            }else{
                //SINO LO AÑADO COMO UN NUEVO PRODUCTO
                array_push($carrito,$data);
            }
        }else{
            array_push($carrito,$data);
        }

        $_SESSION['carrito'] = $carrito;

    }

     /**
     * Quitar el item al carrito
     *
     * @param int $producto_id
     * @return void
     */
    public function quitarProductoCarrito(int $producto_id)
    {
        $carrito = $this->obtenerCarrito();
        $bandera = false;
        $i = 0;
		if(!empty($carrito)){
            // RECORRO EL CARRITO BUSCANDO SI EL PRODUCTO EXISTE
              // RECORRO EL CARRITO BUSCANDO SI EL PRODUCTO YA ESTA AGREGADO
            for ($i=0; $i < count($carrito); $i++) { 
                if($producto_id == $carrito[$i]['producto_id']){
                    $pos = $i;
                    $bandera = true;
                }
            }
            if($bandera){
				//QUITO EL PRODUCTO DEL CARRITO
				array_splice($carrito, $pos,1);
                $_SESSION['carrito'] = $carrito;
                
                return true;
            }
        }
        return false;

    }

     /**
     * Quitar el item al carrito
     *
     * 
     * @return float
     */
    public function calcularTotalCarrito() : float
    {
        $carrito = $this->obtenerCarrito();
        $total = 0;

        foreach ($carrito as $itemCarrito) {
            $total += $itemCarrito['precio'] * $itemCarrito['cantidad'];
        }

        return floatval($total);

    }


    public function obtenerCarrito(): array
	{
		return isset($_SESSION['carrito']) ? $_SESSION['carrito'] : $_SESSION['carrito'] = [];
	}


    
}

?>