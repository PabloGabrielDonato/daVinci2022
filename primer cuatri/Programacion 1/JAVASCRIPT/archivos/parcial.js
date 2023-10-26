"use strict";

/*
 *  APELLIDOS
 */

const productos = [{
        id: 1,
        categoria: 1,
        nombre: "Casco",
        imagen: 'casco.jpg',
        descripcion: 'casco termico con visor polarizado',
        precio: 100,
    },
    {
        id: 2,
        categoria: 2,
        nombre: "Salto individual",
        imagen: 'paracaidas.jpg',
        descripcion: 'Salto tandem desde un avion para una persona',
        precio: 200,
    },
    {
        id: 3,
        categoria: 1,
        nombre: "Paracaidas",
        imagen: 'paracaidasprofesional.jpg',
        descripcion: 'Paracaidas profesional importado',
        precio: 300,
    },
    {
        id: 4,
        categoria: 2,
        nombre: "Salto para 2",
        imagen: 'Paracaidismopara2.jpg',
        descripcion: 'Salto tandem desde un avion para dos personas',
        precio: 400,
    },
    {
        id: 5,
        categoria: 2,
        nombre: "Salto grabado",
        imagen: 'saltograbado.jpg',
        descripcion: 'Salto tandem desde un avion grabado para una persona',
        precio: 500,
    },
    {
        id: 6,
        categoria: 3,
        nombre: "2 minutos",
        imagen: '2minutos.jpg',
        descripcion: 'Dos minutos dentro del tunel de viento para una persona',
        precio: 500,
    },
    {
        id: 7,
        categoria: 3,
        nombre: "5 minutos",
        imagen: 'descarga.png',
        descripcion: 'Cinco minutos dentro del tunel de viento para una persona',
        precio: 1000,
    },
    {
        id: 8,
        categoria: 3,
        nombre: "10 minutos",
        imagen: '10minutos.jpg',
        descripcion: 'Diez minutos dentro del tunel de viento para una persona',
        precio: 1500,
    },

];

// Document:
const d = document;

// Objetos:
let info = d.querySelector("#info-carrito");
let infoTotal = d.querySelector("#info-total");
let infoItems = d.querySelector("#info-items");
let reset = d.querySelector("#reset");
let addBtns = d.querySelectorAll(".add");
let delBtns = d.querySelectorAll(".del");
let filtros = d.querySelectorAll("#filtros a");
let productoList = d.querySelector("#productos-list");

let carrito = [];

for (let filtro of filtros) {
    filtro.addEventListener("click", (e) => {
        e.preventDefault();
        Filtrar(e.target);
    });
}

function Filtrar(filtro) {
    MostrarProductos(filtro.dataset.cat);
}

reset.addEventListener("click", (e) => {
    localStorage.clear();
    carrito = [];
    ShowCart();
});

MostrarProductos();

function MostrarProductos(filtro = 0) {
    let div, add, del, imag, p;
    productoList.innerHTML = "";

    for (let prod of productos.filter((item) => {
            return item.categoria == filtro || filtro == 0 ? true : false;
        })) {
        //if (filtro==0 || filtro==prod.categoria) {
        div = d.createElement("div");
        p = d.createElement("p");

        imag = d.createElement("img");
        imag.setAttribute("id", "img-prodcutos");
        imag.setAttribute('src', prod.imagen);
        div.append(imag);

        p.innerHTML =
            "<strong>Prod: " +
            prod.nombre +

            "</strong> <br> <em>Precio: $" +
            prod.precio +

            "</em> <br>" +
            prod.descripcion

        add = d.createElement("button");
        add.setAttribute("data-id", prod.id);
        add.setAttribute("data-name", prod.nombre);
        add.setAttribute("data-val", prod.precio);
        add.setAttribute("data-cat", prod.categoria);
        add.setAttribute("data-imag", prod.imagen)
        add.setAttribute("class", "add");

        add.innerHTML = "Agregar";

        // console.log(prod);

        del = d.createElement("button");
        del.setAttribute("data-id", prod.id);
        del.setAttribute("data-name", prod.nombre);
        del.setAttribute("data-val", prod.precio);
        del.setAttribute("data-cat", prod.categoria);
        del.setAttribute("class", "del");
        del.innerHTML = "Quitar";

        div.append(p);
        div.append(add);
        div.append(del);
        productoList.append(div);

        add.addEventListener("click", (e) => {
            AddToCart(e.target);
        });

        del.addEventListener("click", (e) => {
            DelToCart(e.target);
        });
        // }
    }
}

function AddToCart(producto) {
    let idProd = producto.dataset.id;
    let precioProd = producto.dataset.val;
    let nombreProd = producto.dataset.name;
    let categoriaProd = producto.dataset.cat;
    let existe = false;

    if (localStorage.getItem("cartPower") != null) {
        carrito = JSON.parse(localStorage.getItem("cartPower"));
    }

    for (let item of carrito) {
        if (item.id == idProd) {
            item.cantidad += 1;
            existe = true;
        }
        console.log(item.cantidad);
    }

    if (!existe) {
        let newProd = {
            id: idProd,
            precio: precioProd,
            nombre: nombreProd,
            categoria: categoriaProd,
            cantidad: 1,
        };
        carrito.push(newProd);
    }

    localStorage.setItem("cartPower", JSON.stringify(carrito));
    ShowCart();
}

function DelToCart(producto) {
    let idProd = producto.dataset.id;

    if (localStorage.getItem("cartPower") != null) {
        carrito = JSON.parse(localStorage.getItem("cartPower"));
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

    localStorage.setItem("cartPower", JSON.stringify(carrito));
    ShowCart();
}

function ShowCart() {
    infoTotal.innerHTML = "Total: 0";
    infoItems.innerHTML = "Total Cantidades: 0";
    info.innerHTML = "";
    if (localStorage.getItem("cartPower") != null) {
        carrito = JSON.parse(localStorage.getItem("cartPower"));
        info.innerHTML = "<ul>";
        let total = 0;
        let cantidadItem = 0;
        for (let item of carrito) {
            info.innerHTML += `<li>Producto: ${item.id} Precio: $${
        item.precio
      } Categoria: ${item.categoria} Nombre: ${item.nombre} Cantidad: ${
        item.cantidad
      } SubTotal: ${
        item.precio * item.cantidad
      } <button class="btn-del" data-id="${item.id}">x</button></li>`;
            total += item.precio * item.cantidad;
            cantidadItem += item.cantidad;
        }
        info.innerHTML += "</ul>";
        infoTotal.innerHTML = "";
        infoTotal.innerHTML += "<strong>Total: $" + total + "</strong>";
        infoItems.innerHTML = "";
        infoItems.innerHTML =
            "<strong>Total Cantidades:" + cantidadItem + "</strong>";

        let buttonsDel = document.querySelectorAll(".btn-del");
        for (let button of buttonsDel) {
            button.addEventListener("click", (e) => {
                DelToCart(e.target);
            });
        }
    }
}
ShowCart();