
let carrito = [];

let CargarProducto = (producto) => {
    console.log(producto);
    let precioProd = producto.dataset.precio;
    let nombreProd = producto.dataset.nombre;

    if (localStorage.getItem('miCarrito') != null) {
        carrito = JSON.parse(localStorage.getItem('miCarrito'));
    }

    let nuevoProducto = {nombre: nombreProd, precio: precioProd}; 

    carrito.push(nuevoProducto);

    localStorage.setItem('miCarrito', JSON.stringify(carrito));
}

let btnProd1 = document.querySelector('#btnProd1');
let btnProd2 = document.querySelector('#btnProd2');
let btnProd3 = document.querySelector('#btnProd3');

btnProd1.addEventListener('click', (e) => {
    CargarProducto(e.target);
})
btnProd2.addEventListener('click', (e) => {
    CargarProducto(e.target);
})
btnProd3.addEventListener('click', (e) => {
    CargarProducto(e.target);
})

