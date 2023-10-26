'use strict';

// Document:
const d = document;

// Mensaje:
let p = d.querySelector('#mensaje');

// Creación del objeto y su propiedades:
let div = d.createElement('div');
div.style.cssText = 'background: red; width: 100px; height: 100px; margin-top: 0';

// Agregar div a escenario:
d.querySelector('#escenario').append(div);

// Variables para efectos:
let fx1, fx2, fx3;

// Animación:
fx1 = setInterval(() => {
    // Actualizar ancho:
    let ancho = parseInt(div.style.width);
    let anchoNuevo = ancho + 10;
    div.style.width = anchoNuevo + 'px';
    // Verificación de ancho:
    if (anchoNuevo >= 400) {
        // Frenar intervalo:
        clearInterval(fx1);
        // Iniciar segundo intervalo:
        fx2 = setInterval(HaciaAbajo, 24);
    }
}, 30);

// Hacia abajo:
const HaciaAbajo = () => {
    let marginTop = parseInt(div.style.marginTop);
    let marginTopNuevo = marginTop + 5;
    div.style.marginTop = marginTopNuevo + 'px';
    // Verificación de margin:
    if (marginTopNuevo >= 100) {
        // Frenar intervalo:
        clearInterval(fx2);
        // Actualizar color:
        div.style.background = 'yellow';
        // Inicializo el #mensaje si no hay contenido:
        if (!p.innerHTML.length) {
            p.innerHTML = 3;
        }
        // Iniciar cuenta regresiva:
        fx3 = setInterval(CuentaAtas, 1000);
    }
};

// Cuenta regresiva:
const CuentaAtas = () => {
    // Decremento:
    p.innerHTML--;
    // Verificación:
    if (p.innerHTML <= 0) {
        clearInterval(fx3);
        // Inicia la cuenta invisible:
        setTimeout(ElFinal, 2000);
    }
};

// Timeout final:
const ElFinal = () => {
    div.remove();
};
