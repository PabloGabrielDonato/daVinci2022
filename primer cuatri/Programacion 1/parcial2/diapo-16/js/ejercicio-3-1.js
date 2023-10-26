'use strict';

// Document:
const d = document;

// Declaro e inicializo variables, buscando los elementos sobre los cuales voy a trabajar
let original = d.querySelector('#original');
let quitados = d.querySelector('#quitados');

// Obtengo todas las img que estan en el div original
let imagenes = original.children;


// Creo una función para crear una copia de la imagen en la cual hicieron click y agregarla a quitados.
// Tambien cambiar el opacity de la imagen y quitarle el click.
const mover = (e) => {
	console.log(e.target);
	let imagen 		= d.createElement('img');
	imagen.src 		= e.target.src;
	imagen.width 	= e.target.width; 
	imagen.height 	= e.target.height;
	imagen.alt 		= e.target.alt;
	quitados.appendChild(imagen);

	//Quitar el click de la e.target
	e.target.removeEventListener('click', mover);

	e.target.className = 'inactivo';
}

// Recorro la colección de imagenes y les agrego el evento click
for (let img of imagenes) {
	img.addEventListener('click', mover);
}

