'use strict';

// Valores solicitados en ejemplo-1-0.js

// Reinicio m para que no se concatenen los mensajes
m = `el número ${n} es `;

// Condicional:
if (n == 0) {
    m += 'cero (evidentemente, ¿no?)';
} else if (n % 2 == 0) {
    m += 'par';
} else {
    m += 'impar';
}