'use strict';

// Array:
let notas = [9, 6, 1, 4];


// Aplicación del método:
let resultado = notas.reduce((acumulador, valor) => acumulador + valor);

// Exta:
let promedio = resultado / notas.length;

// Resultados:
console.info('resultado:', resultado);
console.info('-----');
console.info('promedio:', promedio);