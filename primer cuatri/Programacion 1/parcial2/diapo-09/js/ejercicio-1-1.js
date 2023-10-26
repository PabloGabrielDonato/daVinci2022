'use strict';
/*
Crear un array para una Entrega.
Crear la posición asociativa Alumno y adentro subdividirla en Nombre, Apellido y Comisión.
Crear la posición asociativa Materia y asignarle un objeto con las propiedades Nombre, 
Docente y Exámen parcial.
Recorrer esta matriz/objeto con un for in, uno para cada nivel, mostrando el nombre 
del nivel y mostrando cada una de sus propiedades / índices.
*/

// Variales:
let html1 = '';

// Array:
//let Entrega = [];

// Object:
let Entrega = {
	Alumno : {
		Nombre: 'Juan',
		Apellido: 'Perez',
		'Comisión': 'dwm2ah',
	},
	Materia : {
		Nombre: 'Programacion 1',
		Docente: 'Alejandro Potente',
		'Exámen Parcial': 1,
	}
};
console.log(Entrega.Materia.Nombre);
console.log(Entrega['Materia']['Nombre']);
// Creando nuevo índice y sub-índices:
/*Entrega['Alumno'] = [];
Entrega['Alumno']['Nombre'] = 'Juan';
Entrega['Alumno']['Apellido'] = 'Perez';
Entrega['Alumno']['Comisión'] = 'dwm2ah';*/

// Creando nuevo índice y sub propiedades:
/*Entrega['Materia'] = {
	Nombre: 'Programacion 1',
	Docente: 'Alejandro Potente',
	'Exámen Parcial': 1,
}*/

// Recorrida:
for (let titulo in Entrega) {
	html1 += `<p>${ titulo }</p>`;
	html1 += `<ul>`;
	for (let campo in Entrega[titulo]) {
		html1 += `<li><strong>${ campo }</strong> ${ Entrega[titulo][campo] }</li>`;
	}
	html1 += `</ul>`;

}

document.getElementById('info-1').innerHTML = html1;