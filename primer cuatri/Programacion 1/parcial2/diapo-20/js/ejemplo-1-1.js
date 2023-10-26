'use strict';

// Document:
const d = document;

// Objetos:
let p = d.querySelector('.prueba');
let btn = d.querySelector('button');

// Veamos los estilos deseados al hacer click:
btn.addEventListener('click', () => {
    let pBackgroundColor = getComputedStyle(p).getPropertyValue('background-color');
    let pColor = getComputedStyle(p).getPropertyValue('color');
    let fontSize = getComputedStyle(p).getPropertyValue('font-size');
    console.log({ pBackgroundColor, pColor, fontSize });
});

const cssEtiqueta = (etiqueta) => {
    let cssComputado = getComputedStyle(etiqueta);
    for (let propiedad of cssComputado) {
        console.log(`${propiedad} : ${cssComputado.getPropertyValue(propiedad)}`);
    }
    return cssComputado;
};

// cssEtiqueta(p);
