'use strict';

// Document:
const d = document;

// Obtener párrafo y inicializar su contenido interno en 10:
let txt = d.querySelector('#mensaje');
txt.innerHTML = 10;

// Intervalo:
let fx = setInterval(() => {
    // Decremento:
    txt.innerHTML--;
    // Verificaciones de tiempo:
    if (txt.innerHTML <= 5) {
        txt.style.color = 'red';
        if (txt.innerHTML <= 0) {
            txt.innerHTML = 'FIN';
            // Limpiar el intervalo:
            clearInterval(fx);
        }
    }
}, 1000);
