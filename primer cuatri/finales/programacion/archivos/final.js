"use strict";

/*
 *  APELLIDOS
 */

const productos = [{
        id: 1,
        categoria: 1,
        nombre: "Casco",
        imagen: "imagenes/casco.jpg",
        descripcion: "casco termico con visor polarizado",
        cat: "Indumentaria",
        precio: 100,
    },
    {
        id: 2,
        categoria: 2,
        nombre: "Salto individual",
        imagen: "imagenes/paracaidas.jpg",
        descripcion: "Salto tandem desde un avion para una persona",
        cat: "Saltos",
        precio: 200,
    },
    {
        id: 3,
        categoria: 1,
        nombre: "Paracaidas",
        imagen: "imagenes/paracaidasprofesional.jpg",
        descripcion: "Paracaidas profesional importado",
        cat: "Indumentaria",
        precio: 300,
    },
    {
        id: 4,
        categoria: 2,
        nombre: "Salto para 2",
        imagen: "imagenes/Paracaidismopara2.jpg",
        descripcion: "Salto tandem desde un avion para dos personas",
        cat: "Saltos",
        precio: 400,
    },
    {
        id: 5,
        categoria: 2,
        nombre: "Salto grabado",
        imagen: "imagenes/saltograbado.jpg",
        descripcion: "Salto tandem desde un avion grabado para una persona",
        cat: "Saltos",
        precio: 500,
    },
    {
        id: 6,
        categoria: 3,
        nombre: "2 minutos",
        imagen: "imagenes/2minutos.jpg",
        descripcion: "Dos minutos dentro del tunel de viento para una persona",
        cat: "Tunel de viento",
        precio: 500,
    },
    {
        id: 7,
        categoria: 3,
        nombre: "5 minutos",
        imagen: "imagenes/descarga.png",
        descripcion: "Cinco minutos dentro del tunel de viento para una persona",
        cat: "Tunel de viento",
        precio: 1000,
    },
    {
        id: 8,
        categoria: 3,
        nombre: "10 minutos",
        imagen: "imagenes/10minutos.jpg",
        descripcion: "Diez minutos dentro del tunel de viento para una persona",
        cat: "Tunel de viento",
        precio: 1500,
    },
];

document.getElementById("detalleCarrito").style.display = "none";

// Document:
const d = document;

// Objetos:
let info = d.querySelector("#info-carrito");
let infoFin = d.querySelector("#fin-carrito");
let infoTotal = d.querySelector("#info-total");
let infoItems = d.querySelector("#info-items");
let reset = d.querySelector("#reset");
let addBtns = d.querySelectorAll(".add");
let delBtns = d.querySelectorAll(".del");
let filtros = d.querySelectorAll("#filtros");
let productoList = d.querySelector("#productos-list");

let verBanner = d.querySelector("#banner");

let carrito = [];

for (let filtro of filtros) {
    filtro.addEventListener("click", (e) => {
        e.preventDefault();
        Filtrar(e.target);
    });
}

//Mensajes en las secciones
function Filtrar(filtro) {
    productoList.innerHTML = "";
    if (filtro.dataset.cat == 0) {
        MostrarProductos(filtro.dataset.cat);
    }
    if (filtro.dataset.cat == 1) {
        verBanner.innerHTML =
            " ¡Hola! Tenemos estos increíbles productos en INDUMETARIA para usted, ¡No se los pierda!";
        setTimeout(() => {
            MostrarProductos(filtro.dataset.cat);
        }, 10000);
    }
    if (filtro.dataset.cat == 2) {
        verBanner.innerHTML =
            " ¡Hola! Tenemos estos SALTOS increíbles para usted, ¡No se los pierda!";
        setTimeout(() => {
            MostrarProductos(filtro.dataset.cat);
        }, 10000);
    }
    if (filtro.dataset.cat == 3) {
        verBanner.innerHTML =
            " ¡Hola! Nuestro TUNEL de VIENTO te sorprenderá, ¡No te lo pierdas!";
        setTimeout(() => {
            MostrarProductos(filtro.dataset.cat);
        }, 10000);
    }
}

reset.addEventListener("click", (e) => {
    localStorage.clear();
    carrito = [];
    window.location.reload();
    ShowCart();
});

MostrarProductos();

function MostrarProductos(filtro = 0) {
    verBanner.innerHTML = "";
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
        imag.setAttribute("src", prod.imagen);
        div.append(imag);

        p.innerHTML =
            "<strong>Producto: " +
            prod.nombre +
            "</strong> <br> <em>Precio: $" +
            prod.precio +
            "</strong> <br> <em>Categoría: " +
            prod.cat +
            "</em> <br>" +
            prod.descripcion;

        add = d.createElement("button");
        add.setAttribute("data-id", prod.id);
        add.setAttribute("data-name", prod.nombre);
        add.setAttribute("data-val", prod.precio);
        add.setAttribute("data-cat", prod.categoria);
        add.setAttribute("data-imag", prod.imagen);
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
    document.getElementById("detalleCarrito").style.display = "none";
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

    //vacia el carrito y el local storage
    if (carrito == 0) {
        localStorage.clear();
        carrito = [];
        window.location.reload();
    }

    ShowCart();
    // showItem();
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
            total += item.precio * item.cantidad;
            cantidadItem += item.cantidad;
        }
        info.innerHTML += "</ul>";
        infoTotal.innerHTML = "";
        infoTotal.innerHTML += "<strong>Total: $" + total + "</strong>";
        infoItems.innerHTML = "";
        infoItems.innerHTML =
            "<strong>Total Cantidades:" + cantidadItem + "</strong>";
    }
}

function showItem() {
    if (localStorage.getItem("cartPower") != null) {
        document.getElementById("detalleCarrito").style.display = "block";
        carrito = JSON.parse(localStorage.getItem("cartPower"));
        info.innerHTML = "<ul>";

        for (let item of carrito) {
            info.innerHTML += `<li class="item">Producto: ${item.id} Precio: $${
        item.precio
      } Categoria: ${item.categoria} Nombre: ${item.nombre} Cantidad: ${
        item.cantidad
      } SubTotal: ${
        item.precio * item.cantidad
      } <button class="btn-del" data-id="${item.id}">x</button></li>`;
        }
        info.innerHTML += "</ul>";
        let buttonsDel = document.querySelectorAll(".btn-del");
        for (let button of buttonsDel) {
            button.addEventListener("click", (e) => {
                DelToCart(e.target);
                showItem();
            });
        }
    }
}

function ocultarCarrito() {
    document.getElementById("detalleCarrito").style.display = "none";
}

function finCompra() {
    document.getElementById("detalleCarrito").style.display = "none";
    document.getElementById("productos-list").style.display = "none";
    document.getElementById("minicarrito").style.display = "none";
    document.getElementById("checkout").style.display = "block";
    document.getElementById("confirmacion").style.display = "none";

    if (localStorage.getItem("cartPower") != null) {
        carrito = JSON.parse(localStorage.getItem("cartPower"));
        infoFin.innerHTML = "<ul>";
        let total = 0;
        let cantidad = 0;
        for (let item of carrito) {
            infoFin.innerHTML += `<li class="itmeFin">Producto: ${item.id} Precio: $${
        item.precio
      } Categoria: ${item.categoria} Nombre: ${item.nombre} Cantidad: ${
        item.cantidad
      } SubTotal: $ ${item.precio * item.cantidad}</li>`;
            total += item.precio * item.cantidad;
        }
        infoFin.innerHTML += "</ul>";
        infoFin.innerHTML += "<strong>Total a pagar: $" + total + "</strong>";
    } else {
        window.alert("No hay productos en su carrito");
        cancelar();
    }
}

function cancelar() {
    document.getElementById("checkout").style.display = "none";
    document.getElementById("minicarrito").style.display = "flex";
    document.getElementById("productos-list").style.display = "grid";
    document.getElementById("confirmacion").style.display = "none";
}

function confirmar() {
    document.getElementById("checkout").style.display = "none";
    document.getElementById("confirmacion").style.display = "block";

}

ShowCart();