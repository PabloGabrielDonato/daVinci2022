/* 
Se le solicita al usuario que ingrese el nombre, apellido y las notas del parcial.

Se desconoce la cantidad de alumnos y las notas por alumno.

Destacar visualmente las notas aprobadas (green) y de notas desaprobados (red).

Los valores deben ser válidos (las notas del 1 al 10, inclusive).

Al oprimir el botón “Cargar alumno”, se debe disparar la función CargarAlumno( ), que realice la carga de los datos del alumno y sus notas. El proceso se repite cada vez que el usuario oprime el botón.

Al oprimir el botón “Mostrar datos”, se debe disparar la función MostrarDatos( ), que debe listar todos los alumnos, sus datos, notas (destacadas) y los promedios de cada uno. 
*/

'use strict';

// Creo ARRAY que se va a llamar comision y dentro va  a
// tener por cada elemento un array que se va a llamar:
// alumno y alumno a su vez tendra: nombre, apellido y 
// NOTAS que tambien notas sera un array

let comision = [];

// Funcion de carga de alumnos
// Pide nombre, apellido y notas.
// Crea, valida y guarda el array de notas y el de alumno 
// y lo agrega al array comision

const CargarAlumno = () => {

    let nombre;
    let apellido;
    let nota;

   

        

    // NOMBRE

    do 
    {
        nombre = prompt('Ingrese el nombre del alumno.');
    }
    while (!isNaN(nombre))

    // APELLIDO

    do 
    {
        apellido = prompt('Ingrese el apellido del alumno');
    }
    while (!isNaN(apellido))

    // CREO ARRAY NOTAS PARA LAS NOTAS DEL ALUMNO

    let notas = [];
    
    // PIDO LAS NOTAS QUE QUIERA CARGAR EL USUARIO

    do
    {
        do
        {
            nota = parseInt(prompt('Ingrese la nota del alumno.'));
        }
        while (isNaN(nota) || nota<1 || nota >10)

        // AGREGO LA NOTA AL ARRAY NOTAS

        notas.push(nota); // Se agrega un elemento al final del array

    }
    while (confirm('¿Desea ingresar mas notas?'))

    let alumno = [];
    alumno['Nombre']   = nombre;   // Indice 0
    alumno['Apellido'] = apellido; // Indice 1
    alumno['Notas']    = notas;    // Indice 2
    
    comision.push(alumno); // Al crear un array comision por fuera de la funcion al hacer .push
                           // de comision me guardara cada alumno despues de cada confirm                     
    console.log(comision);

}

// Funcion de mostrar datos en pantalla

const MostrarDatos = () => {

    let html = '';

    // RECORRO EL ARRAY PARA OBTENER LOS DATOS DE CADA ALUMNO

    for (let alumno of comision) 
    {
        console.log(alumno);

        let acum = 0;
        let cont = 0;

        html += `<p>${alumno['Nombre']} ${alumno['Apellido']}</p>`;
        html += `<ul>`;

        for (let nota of alumno['Notas']) // Entro al subindice notas (que es un array) y lo recorro 
        {
            acum += nota;
            cont ++;

            if (nota >=4)
            {
                html += `<li style="color:green;">${nota}</li>`;
            }
            else 
            {
                html += `<li style="color:red;">${nota}</li>`;
            }
           
        }  
        html += `<li>Promedio: ${acum / cont}</li>`  
        html += `</ul>`;
    }

    document.getElementById('info').innerHTML = html;

}