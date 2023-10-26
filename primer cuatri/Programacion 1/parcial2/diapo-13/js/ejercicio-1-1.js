'use strict';

// Función indexOfAll:
function indexOfAll(array = [], busqueda = '', inicio = 0) {
    let indice,
        indices = [];
    do {
        indice = array.indexOf(busqueda, inicio);
        if (indice != -1) {
            indices.push(indice);
            inicio = indice + 1;
        }
    } while (indice != -1 && inicio < array.length);
    return indices;
}

// Función lastIndexOfAll:
function lastIndexOfAll(array = [], busqueda = '', inicio = array.length - 1) {
    let indice,
        indices = [];
    do {
        indice = array.lastIndexOf(busqueda, inicio);
        if (indice != -1) {
            indices.push(indice);
            inicio = indice - 1;
        }
    } while (indice != -1 && inicio >= 0);
    return indices;
}

// Función para listar colores:
function Listar(color = '', array = [], metodo = 'indexof') {
    let aArray = metodo == 'indexof' ? indexOfAll(array, color) : lastIndexOfAll(array, color);
    let html = `<p>El valor "${color}" aparece la siguiente cantidad de veces: ${aArray.length}.</p>`;
    if (aArray.length) {
        html += `<p>Aparece en el/los índice/s: ${aArray.toString()}.</p>`;
    }
    html += '<hr />';
    document.getElementById('info').innerHTML += html;
}

Listar('rojo', colores);
Listar('verde', colores, 'lastindexof');
