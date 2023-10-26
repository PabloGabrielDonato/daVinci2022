'use strict';

// Como la consola muestra el último valor del objeto, debo crear 3 objetos para el ejemplo:

// Arrays de string:
let frutas1 = ['banana', 'limón', 'manzana', 'kiwi'];
let frutas2 = ['banana', 'limón', 'manzana', 'kiwi'];

// Aplicación del método:
frutas1.sort((a, b) => b-a);

// Resultados:
console.info('frutas1:', frutas1);

// Aplicación del método:
frutas2.sort(function (a, b) {
    if (a > b) { return -1; }
    if (a < b) { return 1; }
    return 0;});

// Resultados:
console.info('frutas2:', frutas2);
console.info('-----');

// Arrays de numbers:
let numeros1 = [40, 100, 1, 5];
let numeros2 = [40, 100, 1, 5];

// Aplicación del método:
let orden1 = numeros1.sort();
let min = orden1[0];
let orden2 = numeros2.sort((a, b) => b-a);
let max = orden2[0];

// Resultados:
console.info('orden1:', orden1);
console.info('min:', min);
console.info('orden2:', orden2);
console.info('max:', max);
console.info('-----');

// Arrays de objects:
let datos1 = [
    {
        nombre: 'Mari',
        nacimiento: 1988
    },
    {
        nombre: 'Juan',
        nacimiento: 1989
    },
    {
        nombre: 'Ale',
        nacimiento: 1985
    },
];
let datos2 = Object.create(datos1);
let datos3 = Object.create(datos1);
let datos4 = Object.create(datos1);

// Ordenar ascendete por nombre:
datos1.sort(function (a, b) {
    if (a.nombre > b.nombre) { return 1; }
    if (a.nombre < b.nombre) { return -1; }
    return 0;
});

// Resultados:
console.info('El objeto ordenado por nombre ascendete:', datos1);

// Ordenar ascendete por nacimiento:
datos2.sort(function (a, b) {
    if (a.nacimiento > b.nacimiento) { return 1; }
    if (a.nacimiento < b.nacimiento) { return -1; }
    return 0;
});

// Resultados:
console.info('El objeto ordenado por nacimiento ascendete:', datos2);

// Ordenar descendete por nombre:
datos3.sort(function (a, b) {
    if (a.nombre > b.nombre) { return -1; }
    if (a.nombre < b.nombre) { return 1; }
    return 0;
});

// Resultados:
console.info('El objeto ordenado por nombre descendete:', datos3);

// Ordenar ascendete por nacimiento:
datos4.sort(function (a, b) {
    if (a.nacimiento > b.nacimiento) { return -1; }
    if (a.nacimiento < b.nacimiento) { return 1; }
    return 0;
});

// Resultados:
console.info('El objeto ordenado por nacimiento descendete:', datos4);