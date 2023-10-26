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
    switch (nivel) {
        case 1:
            velocidad = 400;
            break;
        case 2:
            velocidad = 300;
            break;
        case 3:
            velocidad = 200;
            break;
        case 4:
            velocidad = 100;
            break;
        case 5:
            velocidad = 50;
            break;
        case 6:
            velocidad = 10;
            break;
    }
    return velocidad;
};

const determinarColor = () => {
    return colores[Math.round(Math.random() * (colores.length - 1))];
};

const agregarObjeto = (medida = 50, suma = 100, resta = 50) => {
    let div = d.createElement('div');
    let color = determinarColor();
    let x = Math.round(Math.random() * (escenario.offsetWidth - medida));
    let y = Math.round(Math.random() * (escenario.offsetHeight - medida));
    div.style.cssText = `width: ${medida}px; height: ${medida}px; border-radius: ${medida}px; position: absolute; margin-top: ${y}px; margin-left: ${x}px; background-color: ${color}; cursor: pointer;`;

    console.log(escenario.offsetWidth, escenario.offsetHeight, x, y);

    // Cada vez que el usuario hace click en un div del color "ganador" suma 100 puntos, de lo contario resta 50 puntos:
    div.addEventListener('click', (e) => {
        if (e.currentTarget.style.backgroundColor == colorGanador) {
            puntaje += suma;
            spanAciertos.innerHTML++;
        } else {
            puntaje -= resta;
            spanFallos.innerHTML++;
        }
        spanPuntos.innerHTML = puntaje;
        e.currentTarget.remove();
    });
    escenario.append(div);
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
    // Invervalos:
    let fxObjeto, timer;
    // Inicialización:
    escenario.innerHTML = '';
    spanTimer.innerHTML = tiempo;
    spanColor.innerHTML = colorGanador;
    spanColor.style.color = colorGanador;

    // Deshabilitamos el botón hasta que termine la partida:
    e.target.disabled = true;

    // Función - Velocidad - Tamaño - Puntos a sumar - Puntos a restar:
    fxObjeto = setInterval(agregarObjeto, determinarVelocidad(1), 40);
    // Temporizador:
    timer = setInterval(() => {
        spanTimer.innerHTML--;
        if (spanTimer.innerHTML <= 0) {
            // Frenamos los timers:
            clearInterval(fxObjeto);
            clearInterval(timer);
            // Volvemos a habilitar el botón:
            boton.disabled = false;
            // Limpiamos el escenario, informando que el juego terminó:
            escenario.innerHTML = '<p>JUEGO TERMINADO</p>';
        }
    }, 1000);
});
