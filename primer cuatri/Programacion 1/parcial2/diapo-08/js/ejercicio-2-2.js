'use strict';
/*
Voy a crear un array que se va a llamar comision, y dentro va a tener en cada
elemento un array que se va a llamar alumno y alumno va a tener nombre, apellido
y notas (que tambien notas es un array)
*/

//Funcion de carga de Alumnos.
//Pide, valida y guarda: Nombre, Apellido, Notas, crea el array de notas y
//el de alumno y lo agrega al array comision

let comision = [];

const CargarAlumno = () => {
	let nombre, apellido, nota;
	//Pido y valido el nombre
	do {
		nombre = prompt('Ingrese el nombre del alumno');
	} while(!isNaN(nombre))

	//Pido y valido el apellido
	do {
		apellido = prompt('Ingrese el apellido del alumno');
	} while(!isNaN(apellido))
    
    //Creo un array de notas para las notas del alumno
    let notas=[];
	
	//Pido las notas que quiera cargar el usuario
	do {
		do {
			nota = parseInt(prompt('Ingrese una nota.'));
		} while(isNaN(nota) || nota<1 || nota >10)

		//Agrego la nota al array de notas del alumno (push, agrega un elemento al final del array)
		notas.push(nota);

	} while(confirm('¿Desea seguir cargando notas al alumno?'))

	let alumno = [];
	alumno['Nombre']   = nombre; 
	alumno['Apellido'] = apellido; 
	alumno['Notas']    = notas; 
	
	comision.push(alumno);
	console.log(comision);
}

//Funcion de impresion de datos en pantalla.
const MostrarDatos = () => {
	let html = '';
	
	//Recorro el array de comision para obtener los datos de cada alumno
	for (let alumno of comision) {
		console.log(alumno);
		let acum = 0, cont =0;
		html +=`<p>${alumno['Nombre']} ${alumno['Apellido']} </p>`;
		html +=`<ul>`; 
			for (let nota of alumno['Notas']) {
				acum += nota;
				cont++;
				html += nota>=4 ? `<li style="color:green;">${nota}</li>` : `<li style="color:red;">${nota}</li>`; 
			}
			html +=`<li>Promedio: ${acum / cont}</li>`;
		html +=`</ul>`; 
	}

	document.getElementById('info').innerHTML = html;
}