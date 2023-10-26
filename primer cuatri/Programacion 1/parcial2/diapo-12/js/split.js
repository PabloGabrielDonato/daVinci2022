'use strict';

// String:
let cadena = 'La programación es algo maravilloso';

// Aplicación del método:
let array1 = cadena.split();
let array2 = cadena.split('');
let array3 = cadena.split(' ', 2);
let array4 = cadena.split('a');

// Resultados:
console.info('array1:', array1);
console.info('array2:', array2);
console.info('array3:', array3);
console.info('array4:', array4);