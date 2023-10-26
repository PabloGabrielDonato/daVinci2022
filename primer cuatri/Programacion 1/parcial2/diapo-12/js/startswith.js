'use strict';

// String:
let cadena = 'La programación es algo maravilloso';

// Aplicación del método:
let rta1 = cadena.startsWith('La');
let rta2 = cadena.startsWith('la');
let rta3 = cadena.startsWith('p', 3);
let rta4 = cadena.startsWith('o', cadena.length - 1);

// Resultados:
console.info('rta1:', rta1);
console.info('rta2:', rta2);
console.info('rta3:', rta3);
console.info('rta4:', rta4);