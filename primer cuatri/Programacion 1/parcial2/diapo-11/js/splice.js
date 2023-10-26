'use strict';

// Array:
let frutas = ['banana', 'limón', 'manzana', 'mango'];

// Aplicación del método:
let removidos1 = frutas.splice(1, 1, 'kiwi', 'naranja');

// Resultados:
console.info('frutas:', frutas);
console.info('removidos1:', removidos1);
console.info('-----');

// Aplicación del método:
let removidos2 = frutas.splice(-3, 2);

// Resultados:
console.info('frutas:', frutas);
console.info('removidos2:', removidos2);

// Aplicación del método:
let removidos3 = frutas.splice(1, 0, 'anana');

// Resultados:
console.info('frutas:', frutas);
console.info('removidos3:', removidos3);