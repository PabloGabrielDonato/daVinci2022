'use strict';

// Reinicio m para que no se concatenen los mensajes:
m = '';

// for:
for (let i = 1; i <= 3; i++) {
    // Ingreso de datos:
    n = parseInt(prompt('Ingrese una nota para el for'));
    // Consola:
    console.info('Valor de i:', i, 'Nota ingresada por for:', n);
    // Armo el mensaje:
    m += `<li>Nota ${i}: <strong>${n}</strong>.</li>`;
}