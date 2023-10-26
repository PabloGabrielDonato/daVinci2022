'use strict';

// Document:
const d = document;

// Div:
let div = null;

// Función que crea el div:
const Crear = () => {
    div = d.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = 'black';
    div.style.position = 'absolute';
    div.style.top = '50%';
    div.style.left = '50%';
    d.body.appendChild(div);
};

// Creo el div:
Crear();

// Colores:
let aColores = ['red', 'green', 'blue', 'yellow', 'orange', 'white'];

// Detectar tecla:
window.addEventListener('keydown', (e) => {
    console.log('e.key:', e.key, '- e.code:', e.code);
    // Creación del div, si no existe:
    if (e.code == 'KeyN' && div == null) {
        Crear();
    }
    if (div != null) {
        // Detección de tecla común:
        switch (e.key) {
            // Arriba:
            case 'ArrowUp':
                Animar('arr');
                break;
                break;
            // Abajo:
            case 'ArrowDown':
                Animar('aba');
                break;
            // Izquierda:
            case 'ArrowLeft':
                Animar('izq');
                break;
            // Derecha:
            case 'ArrowRight':
                Animar('der');
                break;
            // Enter:
            case 'Enter':
                d.querySelector('main').style.backgroundColor = ColorRandom();
                div.style.backgroundColor = ColorRandom();
                break;
            // Escape:
            case 'Escape':
                div.remove();
                div = null;
                break;
        }
    }
});

// Animación:
const Animar = (direccion) => {
    let x = div.offsetLeft;
    let y = div.offsetTop;
    let nuevaX, nuevaY;
    switch (direccion) {
        case 'arr':
            nuevaX = x;
            nuevaY = y - 10;
            break;
        case 'aba':
            nuevaX = x;
            nuevaY = y + 10;
            break;
        case 'izq':
            nuevaX = x - 10;
            nuevaY = y;
            break;
        case 'der':
            nuevaX = x + 10;
            nuevaY = y;
            break;
    }
    div.style.left = nuevaX + 'px';
    div.style.top = nuevaY + 'px';
    console.log({ nuevaX, nuevaY });
};
// Random:
const ColorRandom = () => {
    let numero = Math.round(Math.random() * aColores.length);
    return aColores[numero];
};
