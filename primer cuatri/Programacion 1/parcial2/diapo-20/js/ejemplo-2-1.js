'use strict';

// Document:
const d = document;

// 1. Crear un div de 100x100px, fondo verde, con posición absoluta, bottom 0, left 0, z-index 100:
let div = d.createElement('div');
div.style.cssText = 'width: 100px; height: 100px; background-color: green; position: fixed; bottom: 0; left: 0; z-index: 100;';

// 2. Agregarlo al body:
d.body.appendChild(div);

// 3. Obtener el ancho del body (mostrarlo por consola):
let ancho = d.body.offsetWidth;
console.log('Ancho del body:', ancho);

// 4. Con el evento onresize del window, actualizar el ancho (mostrarlo por consola):
window.addEventListener('resize', () => {
    ancho = d.body.offsetWidth;
    console.log('Ancho de body onresize:', ancho);
});

// 5. Obtener el ancho del div (mostrarlo por consola):
let anchoDiv = div.offsetWidth;
console.log('Ancho del div:', anchoDiv);

// 6. Crear una variable auxiliar que ayude a controlar el sentido:
let sentido = 1;

// 7. Crear un array de colores:
let aColores = ['red', 'green', 'blue', 'yellow', 'orange', 'black'];

// 8. Crear una función que devuelva un color random:
const ColorRandom = () => {
    let numero = Math.round(Math.random() * aColores.length);
    return aColores[numero];
};

// 9. Animar el div, que se mueva hacia la derecha, de a 10px cada 24ms:
let fx = setInterval(() => {
    let posDiv = parseInt(div.offsetLeft);
    posDiv += 10 * sentido;
    // 10. Al llegar al límite del body, que vuelva hacia la izquierda. Y repitir:
    if (posDiv >= ancho - anchoDiv) {
        sentido = -1;
        posDiv = ancho - anchoDiv;
        // 11. Cada vez que el div llega a un tope, que cambie aleatoriamente el fondo del div:
        div.style.backgroundColor = ColorRandom();
    }
    // 10. Al llegar al límite del body, que vuelva hacia la izquierda. Y repitir:
    if (posDiv <= 0) {
        sentido = 1;
        posDiv = 0;
        // 11. Cada vez que el div llega a un tope, que cambie aleatoriamente el fondo del div:
        div.style.backgroundColor = ColorRandom();
    }
    div.style.left = posDiv + 'px';
}, 24);

// 12. Al hacer click en el div, detener su movimiento:
div.addEventListener('click', () => {
    clearInterval(fx);
});
