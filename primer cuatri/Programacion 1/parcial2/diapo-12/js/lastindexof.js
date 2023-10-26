'use strict';

// Array:
let cadena = 'La programación es algo maravilloso';

// Aplicación del método:
let indice1 = cadena.lastIndexOf('La');
let indice2 = cadena.lastIndexOf('a');
let indice3 = cadena.lastIndexOf('m');
let indice4 = cadena.lastIndexOf('m', 10);

// Resultados:
console.info('indice1:', indice1);
console.info('-----');
console.info('indice2:', indice2);
console.info('-----');
console.info('indice3:', indice3);
console.info('-----');
console.info('indice4:', indice4);