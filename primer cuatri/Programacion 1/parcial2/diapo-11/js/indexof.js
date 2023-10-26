'use strict';

// Array:
let colores = ['rojo', 'verde', 'azul', 'rojo', 'blanco', 'negro', 'verde'];

// Aplicación del método:
let color1 = colores.indexOf('rojo');
let color2 = colores.indexOf('rojo', 1);
let color3 = colores.indexOf('verde', -3);
let color4 = colores.indexOf('amarillo');

// Resultados:
console.info('color1:', color1);
console.info('-----');
console.info('color2:', color2);
console.info('-----');
console.info('color3:', color3);
console.info('-----');
console.info('color4:', color4);