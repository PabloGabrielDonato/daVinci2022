'use strict';

// Declaración de variables globales:
let rutaArchivo;

// Creación de las funciones:
const CrearImg = function() {
    document.write(`<img src="${rutaArchivo}" alt="Imagen de un color" />`);
}

const CrearImgConParametro = function(rutaArchivo) {
    document.write(`<img src="${rutaArchivo}" alt="Imagen de un color" />`);
}