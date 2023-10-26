'use strict';

// Document:
const d = document;

// Elementos:
let escenario = d.querySelector('#escenario');
let spanTimer = d.querySelector('#timer');
let spanColor = d.querySelector('#color');
let spanPuntos = d.querySelector('#puntos');
let spanAciertos = d.querySelector('#aciertos');
let spanFallos = d.querySelector('#fallos');
let boton = d.querySelector('#start');

// Funciones:
const determinarVelocidad = (nivel) => {
    let velocidad = 0;
    return velocidad;
};

const determinarColor = () => {
    return colores[Math.round(Math.random() * (colores.length - 1))];
};

const agregarObjeto = (medida = 50, suma = 100, resta = 50) => {

};

// Valores:
const colores = ['red', 'green', 'blue', 'yellow', 'cyan'];
const nivel = 1;
const tiempo = 10;
const colorGanador = determinarColor();
let puntaje = 0;
let aciertos = 0;
let fallos = 0;

boton.addEventListener('click', (e) => {
    
});
