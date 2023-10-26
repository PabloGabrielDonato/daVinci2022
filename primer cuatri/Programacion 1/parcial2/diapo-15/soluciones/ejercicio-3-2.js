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
let movimientoImgs = 1,
    posActual = 0,
    posInicial = 0,
    // El total de imágenes - la cantidad de miniaturas.
    posFinal = arrayImagenes.length - imgs.length;

// Navegación:
const Navegacion = (direccion) => {
    let sentido = direccion == 'ant' ? -1 : 1;
    posActual += movimientoImgs * sentido;
    if (direccion == 'ant') {
        if (posActual < posInicial) {
            // Con tope:
            posActual = posInicial;
            // Semi rotativo:
            // posActual = posFinal;
        }
    } else {
        if (posActual > posFinal) {
            // Con tope:
            posActual = posFinal;
            // Semi rotativo:
            // posActual = posInicial;
        }
    }
    // Recorro cada miniatura:
    imgs.forEach((img, i) => {
        console.log(img, i);
        img.src = 'items/' + arrayImagenes[i + posActual];
    });
    // Actualizo la imagen grande:
    imgBig.src = imgs[0].src;
};

// Botón anterior:
btnAnt.addEventListener('click', (e) => {
    Navegacion('ant');
});

// Botón siguiente:
btnSig.addEventListener('click', (e) => {
    Navegacion('sig');
});
