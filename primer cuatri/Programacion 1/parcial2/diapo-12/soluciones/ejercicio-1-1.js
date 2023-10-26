'use strict';

// Armado de la cadena:
let cadena = aColores.join(' y ');

// Reemplazo de caracteres:
let cadenaFinal = cadena.replace(/a/gi, '-').replace(/e/gi, '-').replace(/i/gi, '-').replace(/o/gi, '-').replace(/u/gi, '-');

console.info('cadenaFinal:', cadenaFinal);
console.info('-----');

// Armando una expresión regular "más" compleja:
let otraForma = cadena.replace(/[aeiou]/gi, '-');

console.info('otraForma:', otraForma);