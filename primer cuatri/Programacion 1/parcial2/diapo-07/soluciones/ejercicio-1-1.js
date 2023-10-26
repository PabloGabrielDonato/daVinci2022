'use strict';

// Variables:
let html = '';
let colores = [
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'black',
    'white',
    'orange',
    'pink',
];

// Recorrida del array:
for (let indice in colores) {
    html += `<span style="background-color: ${colores[indice]};">${indice}</span>`;
}

document.querySelector('.galeria').innerHTML = html;