'use strict';

// String:
let cadena = 'La programación es algo maravilloso';

// Aplicación del método:
let rta1 = cadena.includes('prog');
let rta2 = cadena.includes('la');
let rta3 = cadena.includes('prog', 3);
let rta4 = cadena.includes('prog', 4);

// Resultados:
console.info('rta1:', rta1);
console.info('rta2:', rta2);
console.info('rta3:', rta3);
console.info('rta4:', rta4);