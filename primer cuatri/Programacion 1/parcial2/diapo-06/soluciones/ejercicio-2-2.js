'use strict';

// Creación de la función para ingresar un valor númerico validado:
const IngresarNumero = function(txt = 'Ingrese un valor numérico', esFloat = true) {
    let n;
    do {
        n = esFloat ? parseFloat(prompt(txt)) : parseInt(prompt(txt));
    } while (isNaN(n))
    return n;
}