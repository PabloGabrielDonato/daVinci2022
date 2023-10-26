'use strict';

// Valores solicitados en ejercicio-2-0.js

// Inicio m para que no se concatenen los mensajes
m = `La letra ${l} es `;

// Condicional:
if (l === 'a' || l === 'A') {
    m += 'la primera vocal';
} else if (l === 'e' || l === 'E') {
    m += 'la segunda vocal';
} else if (l === 'i' || l === 'I') {
    m += 'la tercera vocal';
} else if (l === 'o' || l === 'O') {
    m += 'la cuarta vocal';
} else if (l === 'u' || l === 'U') {
    m += 'la quinta vocal';
} else {
    m += 'una consonante';
}