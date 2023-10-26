'use strict';

function ReplaceAll(cadena, busqueda, reemplazo, insensible = false) {
    let expresionRegular = new RegExp(busqueda, insensible ? 'gi' : 'g');
    return cadena.replace(expresionRegular, reemplazo);
}

document.getElementById('info').innerHTML += `<p>${ReplaceAll(cadena, 'a', '-')}</p>`;
document.getElementById('info').innerHTML += `<p>${ReplaceAll(cadena, 'a', '-', true)}</p>`;
