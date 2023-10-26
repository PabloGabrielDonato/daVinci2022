'use strict';

// String:
let cadena = 'La programación es algo maravilloso';

// Aplicación del método:
let rta1 = cadena.endsWith('oso');
let rta2 = cadena.endsWith('soso');
let rta3 = cadena.endsWith('La p', 4);
let rta4 = cadena.endsWith('La p', 3);

// Resultados:
console.info('rta1:', rta1);
console.info('rta2:', rta2);
console.info('rta3:', rta3);
console.info('rta4:', rta4);