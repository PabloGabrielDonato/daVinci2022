'use strict';

// Creación de la función:
const PedirNombre = function() {
    let nombre = prompt('Ingrese un nombre');
    console.log(`Valor ingresado: ${nombre}`);
}

const miBoton = document.getElementById('miBoton');

miBoton.onclick = function () {
    let nombre = prompt('Ingrese un nombre');
    console.log(`Valor ingresado: ${nombre}`);
};