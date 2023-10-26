'use strict';

// Declaración de variables globales:
let n1 = null, n2 = null, r = null;

// Creación de las funciones:
const ObtenerNumero1 = function() {
    do {
        n1 = parseInt(prompt('Ingrese el primer número'));
    } while (isNaN(n1))
}

const ObtenerNumero2 = function() {
    do {
        n2 = parseInt(prompt('Ingrese el segundo número'));
    } while (isNaN(n2))
}

const Operacion = function(operador) {
    if (n1 == null || n2 == null) {
        console.error('No ingresó valor/es numérico/s.');
    } else {
        switch (operador) {
            case 'sumar':
                r = n1 + n2;
                break;
            case 'restar':
                r = n1 - n2;
                break;
            case 'multiplicar':
                r = n1 * n2;
                break;
            case 'dividir':
                r = n1 / n2;
        }
    }
}

const Mostrar = function() {
    if (r == null) {
        console.error('No se realizó ninguna operación.');
    } else {
        let m = 'El resultado de la operación es ';
        console.info(m + r);
        // Reinicio de variables:
        n1 = null;
        n2 = null;
        r = null;
    }
}