const productos = [{
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
    {
        id: 5,
        categoria: 2,
        nombre: 'Prod 5',
        precio: 500,
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
let productoList = d.querySelector('#productos-list');

let carrito = [];

for (let filtro of filtros) {
    filtro.addEventListener('click', (e) => {
        e.preventDefault();
        Filtrar(e.target);
    })
}

function Filtrar(filtro) {
    MostrarProductos(filtro.dataset.cat);
}

reset.addEventListener('click', (e) => {
    localStorage.clear();
    carrito = [];
    ShowCart();
})

MostrarProductos();

function MostrarProductos(filtro = 0) {
    let div, add, del, p;
    productoList.innerHTML = '';

    for (let prod of productos.filter((item) => { return (item.categoria == filtro || filtro == 0) ? true : false; })) {
        //if (filtro==0 || filtro==prod.categoria) {
        div = d.createElement('div');
        p = d.createElement('p');
        p.innerHTML = '<strong>Prod ' + prod.id + ':</strong> <em>$' + prod.precio + '</em>';
        add = d.createElement('button');
        add.setAttribute('data-id', prod.id);
        add.setAttribute('data-val', prod.precio);
        add.setAttribute('data-cat', prod.categoria);
        add.setAttribute('class', 'add');
        add.innerHTML = "Agregar";

        del = d.createElement('button');
        del.setAttribute('data-id', prod.id);
        del.setAttribute('data-val', prod.precio);
        del.setAttribute('data-cat', prod.categoria);
        del.setAttribute('class', 'del');
        del.innerHTML = "Quitar";

        div.append(p);
        div.append(add);
        div.append(del);
        productoList.append(div);

        add.addEventListener('click', (e) => {
            AddToCart(e.target);
        })

        del.addEventListener('click', (e) => {
                DelToCart(e.target);
            })
            // }        
    }
}


function AddToCart(producto) {
    let idProd = producto.dataset.id;
    let precioProd = producto.dataset.val;
    let categoriaProd = producto.dataset.cat;
    let existe = false;

    if (localStorage.getItem('cartPower') != null) {
        carrito = JSON.parse(localStorage.getItem('cartPower'));
    }

    for (let item of carrito) {
        if (item.id == idProd) {
            item.cantidad += 1;
            existe = true;
        }
    }

    if (!existe) {
        let newProd = { id: idProd, precio: precioProd, categoria: categoriaProd, cantidad: 1 };
        carrito.push(newProd);
    }

    localStorage.setItem('cartPower', JSON.stringify(carrito));
    ShowCart();
}

function DelToCart(producto) {
    let idProd = producto.dataset.id;

    if (localStorage.getItem('cartPower') != null) {
        carrito = JSON.parse(localStorage.getItem('cartPower'));
    }

    for (let item in carrito) {
        if (carrito[item].id == idProd) {
            if (carrito[item].cantidad == 1) {
                carrito.splice(item, 1);
            } else {
                carrito[item].cantidad -= 1;
            }
        }
    }

    localStorage.setItem('cartPower', JSON.stringify(carrito));
    ShowCart();
}

function ShowCart() {
    info.innerHTML = '';
    if (localStorage.getItem('cartPower') != null) {
        carrito = JSON.parse(localStorage.getItem('cartPower'));
        info.innerHTML = '<ul>';
        let total = 0;
        for (let item of carrito) {
            info.innerHTML += `<li>Producto: ${item.id} Precio: $${item.precio} Categoria: ${item.categoria} Cantidad: ${item.cantidad} SubTotal: ${item.precio*item.cantidad} <button class="btn-del" data-id="${item.id}">x</button></li>`;
            total += item.precio * item.cantidad;
        }
        info.innerHTML += '</ul>';
        info.innerHTML += '<strong>Total: $' + total + '</strong>';

        let buttonsDel = document.querySelectorAll('.btn-del');
        for (let button of buttonsDel) {
            button.addEventListener('click', (e) => {
                DelToCart(e.target);
            })
        }
    }
}


ShowCart();


/*
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
*/