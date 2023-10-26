'use strict';

// Document:
const d = document;

// Creación del objeto y su propiedades:
let div = d.createElement('div');
div.style.cssText = 'background: red; width: 100px; height: 100px; opacity: 0';

// Agregar div a escenario:
d.querySelector('#escenario').append(div);

// Variable de sentido:
let sentido = 1; // cuando se incrementa valdrá 1, cuando decrementa -1

// Intervalo:
setInterval(() => {
    let o = parseFloat(div.style.opacity);
    // Verificar los topes:
    if (o <= 0) {
        sentido = 1;
    } else if (o >= 1) {
        sentido = -1;
    }
    // Actualizo la opacidad:
    div.style.opacity = o + 0.1 * sentido;
}, 60);
