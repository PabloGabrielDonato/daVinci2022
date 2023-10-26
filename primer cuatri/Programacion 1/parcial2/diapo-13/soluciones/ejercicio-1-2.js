'use strict';

String.prototype.ReplaceAll = function (busqueda, reemplazo, insensible = false) {
    let expresionRegular = new RegExp(busqueda, insensible ? 'gi' : 'g');
    return this.replace(expresionRegular, reemplazo);
};

document.getElementById('info').innerHTML += `<p>${cadena.ReplaceAll('a', '-')}</p>`;
document.getElementById('info').innerHTML += `<p>${cadena.ReplaceAll('a', '-', true)}</p>`;
