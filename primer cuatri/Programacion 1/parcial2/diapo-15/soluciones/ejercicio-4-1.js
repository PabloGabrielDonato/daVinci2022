'use strict';

// Document:
const d = document;

// Variable que guarda el div activo:
let divActivo = null; // Inicializa en null porque al principio ningún div está desplegado.

// Busco los divs:
let divs = d.querySelectorAll('#thumbs div');
console.info(divs);

// Función que anima:
const Animacion = (accion) => {
    if (accion == 'DESPLEGAR') {
        divActivo.style.height = '265px';
        divActivo.querySelector('h3').style.color = divActivo.querySelector('img').alt;
    } else {
        divActivo.style.height = '30px';
        divActivo.querySelector('h3').style.color = 'gray';
    }
};

// Recorro el array de divs:
for (let div of divs) {
    // A cada div le asigno un onclick:
    div.addEventListener('click', (e) => {
        // Animaciones:
        console.info(e.currentTarget);
        if (divActivo == null) {
            // Como no hay ningun div desplegado, el div al que le acabo de hacer click pasa a serlo, lo despliego:
            divActivo = e.currentTarget;
            Animacion('DESPLEGAR');
        } else if (divActivo == e.currentTarget) {
            // El divActivo es al que le acabo de hacer click, entonces lo repliego y vacío el divActivo:
            Animacion('REPLEGAR');
            divActivo = null;
        } else {
            // El div activo es otro div, lo repliego, asigno el nuevo div clickeado como activo y lo depliego:
            Animacion('REPLEGAR');
            divActivo = e.currentTarget;
            Animacion('DESPLEGAR');
        }
    });
}
