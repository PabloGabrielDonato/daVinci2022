'use strict';

// Array:
let lados = [1, 1, 2, 3, 5, 8];

let mayoresA3 = lados.filter(valor => {
        if (valor>3) {
            return true;
        }
        return false;
});

console.log(mayoresA3);

let notas = [9, 6, 1, 4];
let resultado = notas.reduce((acumulador, valor) => acumulador + valor);

console.log(resultado);
/*
// Aplicación del método:
let perimetros = lados.map(CalcularPerimetro);

function CalcularPerimetro(valorLado) {
    return valorLado * 4;
}

let areas = lados.map(valorLado => valorLado ** 2);

// Resultados:
console.info('perimetros:', perimetros);
console.info('-----');
console.info('areas:', areas);
console.info('-----');

// Array:
let personas = [
    { nombre: 'Pablo', apellido: 'Intilisano'},
    { nombre: 'Ale', apellido: 'Potente'},
    { nombre: 'Juan', apellido: 'Beret'},
];

// Aplicación del método:
let nombreApellidos = personas.map(ObtenerNombreApellido);
function ObtenerNombreApellido(laPersona) {
    return laPersona.nombre + ' ' + laPersona.apellido;
}

// Resultados:
console.info('nombreApellidos:', nombreApellidos);

let htmlNombres = personas.map(persona => { return `Nombre: ${ persona.nombre } ${ persona.apellido }`;});
document.write(`<p>${ htmlNombres.join('<br>') }</p>`);

*/

