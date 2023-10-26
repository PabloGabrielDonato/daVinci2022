'use strict';

// Valores solicitados en ejercicio-3-0.js

// Inicio m para que no se concatenen los mensajes
m = `La opreación ${n1} ${op} ${n2} es `;

// Desarrollar la estructura condicional:
if (op == '+') {
    r = n1 + n2;
} else if (op == '-') {
    r = n1 - n2;
} else if (op == '*') {
    r = n1 * n2;
} else if (op == '/') {
    r = n1 / n2;
} else {
    r = 'incalculable';
}

// Contateno el resultado de la operación al mensaje:
m += r;