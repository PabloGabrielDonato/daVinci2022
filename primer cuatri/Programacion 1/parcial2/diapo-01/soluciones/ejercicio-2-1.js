'use strict';

// Valores solicitados en ejercicio-2-0.js

// Inicio m para que no se concatenen los mensajes
m = `En el rango entre ${inf} y ${sup}, ${num} `;

// Desarrollar la estructura condicional:
if (num >= inf && num <= sup) {
    m += 'está en rango';
    m += num != 0 && num % 2 == 0 ? ' y es par' : '';
} else {
    m += 'no está en rango';
    m += num % 2 != 0 ? ' y es impar' : '';
}