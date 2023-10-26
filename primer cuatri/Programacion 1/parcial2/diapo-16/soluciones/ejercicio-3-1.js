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
    // Crear una nueva imagen:
    let img = d.createElement('img');
    // Asignar las propiedades de la original:
    img.src = e.target.src;
    img.alt = e.target.alt;
    img.width = e.target.width;
    img.height = e.target.height;
    // Agregar la nueva imagen a quitados:
    quitados.appendChild(img);
    // A la original se le asigna la clase "inactivo":
    e.target.className = 'inactivo';
    // Removemos del event click el listener mover:
    e.target.removeEventListener('click', mover);
}

// Recorrer las imágenes:
for (let img of imgs) {
    // Asignar el onclick a cada imagen:
    img.addEventListener('click', mover);
}
