'use strict';

// Document:
const d = document;

// Declaro e inicializo variables, buscando los elementos sobre los cuales voy a trabajar
let original 	= d.querySelector('#original');
let juego    	= d.querySelector('#juego');
let puntos   	= d.querySelector('#puntos')
let acumPuntos 	= 0;
let arrayImg    = [];
let mensaje 	= d.querySelector('#mensaje');
let reloj		= d.querySelector('#reloj');

function Reloj() 
{
	reloj.innerHTML = parseInt(reloj.innerHTML)+1;
	setTimeout(Reloj,1000);
}

setTimeout(Reloj,1000);

// Obtengo todas las img que estan en el div original
let imagenes = original.children;

let imagen1 = null;
let imagen2 = null;

// Creo una función para crear una copia de la imagen en la cual hicieron click y agregarla a quitados.
// Tambien cambiar el opacity de la imagen y quitarle el click.
const seleccion = (e) => {
	console.log(e.target);
	if (imagen1==null) {
		imagen1 = e.target;
		e.target.className = 'inactivo';
		mensaje.innerHTML = '';
	} else {
		if (imagen1.src == e.target.src) {
			acumPuntos +=5;
			e.target.className = 'inactivo';
			imagen1.removeEventListener('click', seleccion);
			e.target.removeEventListener('click', seleccion);
			mensaje.innerHTML="Correcto!";
			imagen1 = null;
		} else {
			e.target.className = 'inactivo';
			imagen2 = e.target;
			mensaje.innerHTML="Incorrecto!";
			setTimeout(function () {
				imagen2.className = '';
				imagen1.className = '';
				imagen1 = null;
				imagen2 = null;
			},1000);
		}
	}
	puntos.innerHTML = acumPuntos + ' puntos';
}
// Pasamos la coleccion de imagenes a un array
for (let img of imagenes) {
	arrayImg.push(img);
}

// Reordeno el array
let arrayFinal = arrayImg.concat(arrayImg);
//console.log(Math.round(Math.random()*2));

arrayFinal.sort((a, b) => {
				let rand = Math.round(Math.random()*2);
				if (rand == 2) { return -1; } else { return rand; }
			}
);

// Recorro arrayFinal
for (let img of arrayFinal) {
	let div = d.createElement('div');
	div.className = 'inicial';
	let imgNueva = img.cloneNode();
	imgNueva.addEventListener('click', seleccion);
	div.appendChild(imgNueva);
	juego.appendChild(div);
}