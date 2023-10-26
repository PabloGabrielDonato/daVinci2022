'use strict';

// Creación de las funciones:
const CrearImgOpcional = function(rutaArchivo = 'items/000000.jpg') {
    document.write(`<img src="${rutaArchivo}" alt="Imagen de un color" />`);
}

const CrearImgObligatorio = function(rutaArchivo = null) {
    if (rutaArchivo == null) {
        console.error('No se recibió un valor válido');
    } else {
        document.write(`<img src="${rutaArchivo}" alt="Imagen de un color" />`);
    }
}