'use strict';

// Valores solicitados en ejercicio-1-0.js

// Inicio m para que no se concatenen los mensajes
m = 'el triángulo es ';

// Desarrollar la estructura condicional:
if (l1 == l2) {
    if (l2 == l3) {
        m += 'equilatero';
    } else {
        m += 'isósceles';
    }
} else if (l2 == l3) {
    m += 'isósceles';
} else if (l3 == l1) {
    m += 'isósceles';
} else {
    m += 'escaleno';
}