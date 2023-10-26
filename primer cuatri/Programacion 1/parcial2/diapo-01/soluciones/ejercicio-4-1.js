'use strict';

// Valores solicitados en ejercicio-4-0.js

// Inicio m para que no se concatenen los mensajes
m = `Por ser de la categería ${cat + sub} su sueldo es u$s `;

// Desarrollar la estructura condicional:
switch (cat) {
    case 1:
        sueldo = 1000;
        break;
    case 2:
        sueldo = 1500;
        break;
    case 3:
        sueldo = 2000;
        break;
    default:
        sueldo = 0;
}

switch (sub) {
    case 'a':
    case 'A':
        sueldo *= 1.5;
        break;
    case 'b':
    case 'B':
        sueldo *= 2;
        break;
    case 'c':
    case 'C':
        sueldo *= 2.5;
        break;
    default:
        sueldo *= 0;
}

m += sueldo;

if (sueldo >= 1500 && sueldo <= 3000) {
    m += ' y pertenece al rango "inicial".';
} else if (sueldo >= 3001 && sueldo <= 4000) {
    m += ' y pertenece al rango "intermedio".';
} else if (sueldo >= 4001) {
    m += ' y pertenece al rango "avanzado".';
}