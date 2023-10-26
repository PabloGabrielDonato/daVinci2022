'use strict';

// Array:
let frutas = ['banana', 'limón', 'manzana', 'kiwi'];

// Aplicación del método:
let frutas1 = frutas.slice(2);
let frutas2 = frutas.slice(-1);
let frutas3 = frutas.slice(1, 3);
let frutas4 = frutas.slice(-2, -1);

// Resultados:
console.info('frutas1:', frutas1);
console.info('-----');
console.info('frutas2:', frutas2);
console.info('-----');
console.info('frutas3:', frutas3);
console.info('-----');
console.info('frutas4:', frutas4);