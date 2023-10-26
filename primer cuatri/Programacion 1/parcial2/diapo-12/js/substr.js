'use strict';

// String:
let cadena = 'La programación es algo maravilloso';

// Aplicación del método:
let cadena1 = cadena.substr(16);
let cadena2 = cadena.substr(3, 12);
let cadena3 = cadena.substr(-11);
let cadena4 = cadena.substr(-16, 4);

// Resultados:
console.info('cadena1:', cadena1);
console.info('cadena2:', cadena2);
console.info('cadena3:', cadena3);
console.info('cadena4:', cadena4);