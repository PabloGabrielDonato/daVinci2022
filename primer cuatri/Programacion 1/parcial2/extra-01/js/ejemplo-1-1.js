'use strict';

// Variables:
let num, banderita, banderitaError;

// Validación con error:
banderita = false;
do {
    if (banderita) {
        alert('Error, debe ingresar número');
    }
    num = parseInt(prompt('Ejemplo 1: Número?'));
    banderita = true;
} while (isNaN(num));
banderita = false;
console.log(num);

// Validación con cantidad de errores:
banderita = 0;
do {
    if (banderita) {
        alert(`Error n° ${banderita}, debe ingresar un número`);
    }
    num = parseInt(prompt('Ejemplo 2: Número?'));
    banderita++;
} while (isNaN(num));
banderita = 0;
console.log(num);

// Validación con límite de errores:
banderita = 0;
banderitaError = false;
do {
    if (banderita) {
        alert(`Error ${banderita}, no es un número`);
        if (banderita == 3) {
            banderitaError = true;
            break;
        }
    }
    num = parseInt(prompt('Ejemplo 3: Número?'));
    banderita++;
} while (isNaN(num));

if (banderitaError) {
    /* Consecuencias */
    location.href = 'http://https://es.wikipedia.org/wiki/N%C3%BAmero';
}
banderita = 0;
banderitaError = false;
