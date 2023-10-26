'use strict';

// Document:
const d = document;

// Guardar ambos div:
let original = d.querySelector('#original');
let quitados = d.querySelector('#quitados');

// Guardar las imágenes:
let imgs = original.children;

// Función mover:
const mover = (e) => {
    // Clonar la imagen clickeada:
    let img = e.target.cloneNode();
    // Agregar la nueva imagen a quitados:
    quitados.appendChild(img);
    // A la original se le asigna la clase "inactivo":
    e.target.className = 'inactivo';
    // Removemos del event click el listener mover:
    e.target.removeEventListener('click', mover);
};

// Recorrer las imágenes:
for (let img of imgs) {
    // Asignar el onclick a cada imagen:
    img.addEventListener('click', mover);
}
