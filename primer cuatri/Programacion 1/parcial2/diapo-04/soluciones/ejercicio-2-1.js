'use strict';

// Declaración de variables globales:
let num = null;

// Creación de funciones:
const IngresarNumero = function () {
    do {
        num = parseInt(prompt('Ingrese un número'));
    } while (isNaN(num))
}

const MostrarParidad = function () {
    let m = 'El número ';
    if (num == null) { // No puedo poner !num, porque el 0 se considera false
        m = 'Primero debe ingresar un número';
    } else {
        m += num + ' es '
        if (num == 0) {
            m += 'cero';
        } else if (num % 2 == 0) {
            m += 'par';
        } else {
            m += 'impar';
        }
        num = null;
    }
    console.log(m);
}