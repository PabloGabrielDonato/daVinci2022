'use strict';

let cadena = 'La programación es algo maravilloso';

let cadena1 = cadena.replace('La programación', 'El diseño');
let cadena2 = cadena.replace(/l/i, '-');
let cadena3 = cadena.replace(/a/g, '*');
let cadena4 = cadena.replace(/l/gi, '#');

// Resultados:
console.info({cadena1});
console.info({cadena2});
console.info({cadena3});
console.info({cadena4});

console.log(cadena.replace(/a/gi, '-').replace(/e/gi, '-').replace(/i/gi, '-').replace(/o/gi, '-').replace(/u/gi, '-'));
console.log(cadena.replace(/[aeiouáéíóú]/gi, '-'));