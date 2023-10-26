const productos = [
    {
        id: 1,
        categoria: 1,
        nombre: 'Prod 1',
        precio: 100,
    },
    {
        id: 2,
        categoria: 2,
        nombre: 'Prod 2',
        precio: 200,
    },
    {
        id: 3,
        categoria: 1,
        nombre: 'Prod 3',
        precio: 300,
    },
    {
        id: 4,
        categoria: 2,
        nombre: 'Prod 4',
        precio: 400,
    },
];

// Document:
const d = document;

// Objetos:
let info    = d.querySelector('#info-carrito');
let reset   = d.querySelector('#reset');
let addBtns = d.querySelectorAll('.add');
let delBtns = d.querySelectorAll('.del');
let filtros = d.querySelectorAll('#filtros a');

let carrito = {
    productosIds: [],
    cantidades: [],
    total: 0,
};

const mostrarCarritoUsuario = () => {
    // Limpiamos la consola:
    console.clear();
    // Recorremos los productos agregados al carrito con un forEach, ya que se necesita el id y su índice:
    carrito.productosIds.forEach((productoId, indice) => {
        // Obtengo la cantidad en base al índice:
        let cantidad = carrito.cantidades[indice];
        // console.log({indice, productoId, cantidad});
        // Por cada producto agregado, filtramos en el catalogo por id, para traer dicho producto:
        let elProducto = catalogo.filter((producto) => producto.id == productoId)[0];
        // console.log(elProducto);
        console.log(`Producto: ${elProducto.nombre} - Cantidad: ${cantidad} - Precio: $${elProducto.precio}`);
    });
};

const mostrarCarrito = () => {
    // Muestro el detalle del carrito:
    info.innerHTML = `
    Productos: ${carrito.productosIds} <br />
    Cantidades: ${carrito.cantidades} (${carrito.cantidades.reduce((acum, n) => acum + n, 0)})<br />
    Total: $${carrito.total}
    `;
    // mostrarCarritoUsuario();
};

// Acción de los botones para agregar productos:
for (let btn of addBtns) {
    btn.addEventListener('click', (e) => {
        // Acciones:

        // Se muestra el detalle del carrito:
        mostrarCarrito();
    });
}

// Acción de los botones para quitar productos:
for (let btn of delBtns) {
    btn.addEventListener('click', (e) => {
        // Acciones:

        // Se muestra el detalle del carrito:
        mostrarCarrito();
    });
}

// Reseteo:
reset.addEventListener('click', (e) => {
    // Se limpia el carrito:
    carrito = {
        productosIds: [],
        cantidades: [],
        total: 0,
    };
    // Se muestra el detalle del carrito limpio:
    mostrarCarrito();
    // Opcionalmente, refrescar la página:
    // location.reload();
});

// Acción de los filtros:
for (let filtro of filtros) {
    filtro.addEventListener('click', (e) => {
        // Acciones:
    });
}

// Mostrar carrito inicial:
mostrarCarrito();

// Recorrer los id de productos del carrito para mostrar la info de cada uno por su id:
const recorrerItemsCarrito = () => {
    carrito.productosIds.forEach((productoId, indice) => {
        let producto = productos.filter((producto) => producto.id == productoId)[0];
        let cantidad = carrito.cantidades[indice];
        console.log(producto, { cantidad });
    });
};
