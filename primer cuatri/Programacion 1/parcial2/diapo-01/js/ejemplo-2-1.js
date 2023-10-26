'use strict';

// Valores solicitados en ejercicio-2-0.js

// Inicio m para que no se concatenen los mensajes
m = `La letra ${l} es `;

// Condicional:
switch (l) { //Evaluamos siempre 1 variable, no 2, ni 3 ni etc.
    case 'a':
    case 'A':
         m += 'la primera vocal';
        break;
    case 'e':
    case 'E':
        m += 'la segunda vocal';
        break;
    case 'i':
    case 'I':
        m += 'la tercera vocal';
        break;
    case 'o':
    case 'O':
        m += 'la cuarta vocal';
        break;
    case 'u':
    case 'U':
        m += 'la quinta vocal';
        break;
    default:
        m += 'una consonante';
}