'use strict';

// Array de colores:
let colores = ['red', 'green', 'blue', 'orange', 'yellow', 'cyan', 'magenta'];

// Document:
const d 	= document;

// Variables
let ul, divColores;

// Buscamos los elementos
ul 			= d.querySelector('#elementos');
divColores 	= d.querySelector('#colores')

// Eliminamos el primer elemento del ul
ul.firstElementChild.remove();

//Recorremos el array colores
for (let color of colores) {
	//Creamos el li y lo agregamos al ul #elementos
	let li = d.createElement('li');
	li.innerHTML = color;
	ul.appendChild(li);

	//Creamos un div y lo agregramos al div #colores
	let div = d.createElement('div');
	div.style.width  = '60px';
	div.style.height = '60px';
	//div.style.cssText = 'width:60px; height:60px;';
	div.style.backgroundColor = color;
	div.style.display ='inline-block';
	divColores.appendChild(div);

	div.addEventListener('click', (e) => {
		console.log(e.target);
		console.log(e.currentTarget);
		for (let li of ul.children) {
			li.style.color = e.currentTarget.style.backgroundColor;
		}

	});


}


