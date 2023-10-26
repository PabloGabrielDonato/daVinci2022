'use strict';

// Función indexOfAll:
Array.prototype.indexOfAll = function (busqueda = '', inicio = 0) {
    let indice,
        aIndices = [];
    do {
        indice = this.indexOf(busqueda, inicio);
        if (indice != -1) {
            aIndices.push(indice);
            inicio = indice + 1;
        }
    } while (indice != -1 && inicio < this.length);
    return aIndices;
};

// Función lastIndexOfAll:
Array.prototype.lastIndexOfAll = function (busqueda = '', inicio = this.length - 1) {
    let indice,
        aIndices = [];
    do {
        indice = this.lastIndexOf(busqueda, inicio);
        if (indice != -1) {
            aIndices.push(indice);
            inicio = indice - 1;
        }
    } while (indice != -1 && inicio >= 0);
    return aIndices;
};

// Función para listar colores:
Array.prototype.Listar = function (color = '', metodo = 'indexof') {
    let aArray = metodo == 'indexof' ? this.indexOfAll(color) : this.lastIndexOfAll(color);
    let html = `<p>El valor "${color}" aparece la siguiente cantidad de veces: ${aArray.length}.</p>`;
    if (aArray.length) {
        html += `<p>Aparece en el/los índice/s: ${aArray.toString()}.</p>`;
    }
    html += '<hr />';
    document.getElementById('info').innerHTML += html;
};

colores.Listar('rojo');
colores.Listar('verde', 'lastindexof');
