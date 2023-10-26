'use strict';

// Document:
const d = document;

// Armado del array:
let arrayImagenes = [];
for (let i = 1; i <= 12; i++) {
    arrayImagenes.push(`queen-${i < 10 ? '0' : ''}${i}.jpg`);
}

// Búsqueda de elementos:
let btnAnt, btnSig, imgBig, imgs;

imgBig = d.querySelector('#foto');
btnAnt = d.querySelector('#anterior');
btnSig = d.querySelector('#siguiente');
imgs = d.querySelectorAll('#galeria > div > div img');

console.log(imgBig, btnAnt, btnSig, imgs);

// Acción para cambiar el src:
for (let img of imgs) {
    img.addEventListener('click', (e) => {
        imgBig.src = e.target.src;
    });
}

// Identifico los topes:
let movimientoImgs = 3,
    posActual = 0,
    posInicial = 0,
    // El total de imágenes - la cantidad de miniaturas.
    posFinal = arrayImagenes.length - imgs.length;

// Botón anterior:
btnAnt.addEventListener('click', (e) => {
    // Decremento la cantidad de imágenes a mover:
    posActual -= movimientoImgs;
    if (posActual < posInicial) {
        // Con tope:
        posActual = posInicial;
        // Rotativo:
        // posActual = posFinal;
    }
    // Recorro cada miniatura:
    imgs.forEach((img, i) => {
        console.log(img, i);
        img.src = 'items/' + arrayImagenes[i + posActual];
    });
    // Actualizo la imagen grande:
    imgBig.src = imgs[0].src;
});

// Botón siguiente:
btnSig.addEventListener('click', (e) => {
    // Incremento la cantidad de imágenes a mover:
    posActual += movimientoImgs;
    if (posActual > posFinal) {
        // Con tope:
        posActual = posFinal;
        // Rotativo:
        // posActual = posInicial;
    }
    // Recorro cada miniatura:
    imgs.forEach((img, i) => {
        console.log(img, i);
        img.src = 'items/' + arrayImagenes[i + posActual];
    });
    // Actualizo la imagen grande:
    imgBig.src = imgs[0].src;
});
