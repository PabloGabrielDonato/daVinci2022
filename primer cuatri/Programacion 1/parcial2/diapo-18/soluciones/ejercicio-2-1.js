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
let info = d.querySelector('#info-carrito');
let reset = d.querySelector('#reset');
let addBtns = d.querySelectorAll('.add');
let delBtns = d.querySelectorAll('.del');
let filtros = d.querySelectorAll('#filtros a');

let carrito = {
    productosIds: [],
    cantidades: [],
    total: 0,
};

// Objeto carrito, según localStorage:
if (localStorage.carrito) {
    // Si existe el carrito, se lee del localStorage:
    carrito = JSON.parse(localStorage.carrito);
} else {
    // Si no existe el carrito, se crea en el localStorage:
    localStorage.carrito = JSON.stringify(carrito);
}

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
        let id = parseInt(e.target.dataset.id);
        let val = parseInt(e.target.dataset.val);
        // Se verifica si ya existe el producto:
        let indiceId = carrito.productosIds.indexOf(id);
        if (indiceId != -1) {
            // Si existe, se actualiza el índice de la cantidades:
            carrito.cantidades[indiceId]++;
        } else {
            // Si no existe, se crea el índice en productosId y cantidades:
            carrito.productosIds.push(id);
            carrito.cantidades.push(1);
        }
        // Se actualiza el total:
        carrito.total = parseInt(carrito.total) + val;
        // Se actualiza el carrito en el localStorage:
        localStorage.carrito = JSON.stringify(carrito);
        // Se muestra el detalle del carrito:
        mostrarCarrito();
    });
}

// Acción de los botones para quitar productos:
for (let btn of delBtns) {
    btn.addEventListener('click', (e) => {
        let id = parseInt(e.target.dataset.id);
        let val = parseInt(e.target.dataset.val);
        // Se verifica si ya existe el producto:
        let indiceId = carrito.productosIds.indexOf(id);
        if (indiceId != -1) {
            // Verifico si llegó a cero:
            if (carrito.cantidades[indiceId] > 0) {
                // Si existe, actualizo el índice de la cantidad:
                carrito.cantidades[indiceId]--;
                // Actualizo el total:
                carrito.total = parseInt(carrito.total) - val;
            }
        }
        // Se actualiza el carrito en el localStorage:
        localStorage.carrito = JSON.stringify(carrito);
        // Se muestra el detalle del carrito:
        mostrarCarrito();
    });
}

// Reseteo:
reset.addEventListener('click', (e) => {
    // Limpiar el localStorage:
    localStorage.clear();
    // Opcionalmente, refrescar la página:
    location.reload();
});

// Acción de los filtros:
for (let filtro of filtros) {
    filtro.addEventListener('click', (e) => {
        catId = parseInt(e.target.dataset.cat);
        if (catId != 0) {
            console.table(productos.filter((producto) => producto.categoria == catId));
        } else {
            console.table(productos);
        }
    });
}

// Mostrar carrito inicial:
mostrarCarrito();
