'use strict';

// src y alt para no perder tiempo redactando:
const srcCharly = 'items/charly-garcia.jpg';
const altCharly = 'Carlos Alberto García Moreno tocando el piano';
const txtCharly = '<em>Charly</em> García tocando el piano';
const srcFlaco = 'items/flaco-spinetta.jpg';
const altFlaco = 'Luis Alberto Spinetta tocando la guitarra';
const txtFlaco = 'El <em>flaco</em> Spinetta tocando la guitarra';

// La imagen:
let img = document.querySelector('#imagen');

// El texto:
let txt = document.querySelector('#texto');

// Colocamos el color en red:
txt.style.color = 'red';

// Asignamos un escuchador de eventos para el click de la imagen:
img.addEventListener('click', (e) => {
    // Debo saber cuál es el src actual:
    if (e.target.dataset.musico == 'charly') {
        // Cambio al Flaco:
        e.target.src = srcFlaco;
        e.target.alt = altFlaco;
        e.target.dataset.musico = 'flaco';
        txt.innerHTML = txtFlaco;
        txt.style.color = 'blue';
    } else {
        // Cambio a Charly:
        e.target.src = srcCharly;
        e.target.alt = altCharly;
        e.target.dataset.musico = 'charly';
        txt.innerHTML = txtCharly;
        txt.style.color = 'red';
    }
});
