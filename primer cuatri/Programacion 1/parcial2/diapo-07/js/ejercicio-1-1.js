'use strict';

// Variables:
let html    = '';

//Creacion Constructor
//Creacion Literal
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
// <span style="background-color: VALOR">INDICE</span>

/*for (let i=0; i<colores.length; i++) {
    //aca adentro vamos a acceder a cada valor del array
    html += '<span style="background-color: '+ colores[i]  +'">' + i + '</span>';
}*/

for (let indice in colores) {
    html += '<span style="background-color: '+ colores[indice]  +'">' + indice + '</span>';
}

console.log(html);



document.querySelector('.galeria').innerHTML = html;