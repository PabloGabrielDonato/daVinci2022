'use strict';

// Declaración de variables:
let m = '',
    nombre,
    apellido,
    dni,
    edad,
    sexo,
    nota;

// Desarrollo del algoritmo:
nombre = prompt('Ingrese el nombre del alumno');
apellido = prompt('Ingrese el apellido del alumno');
dni = prompt('Ingrese el DNI del alumno');
sexo = prompt('Ingrese el sexo del alumno');
nota = parseInt(prompt('Ingrese la nota del alumno'));

m += `
<ul>
    <li><strong>Nombre:</strong> ${nombre}</li>
    <li><strong>Apellido:</strong> ${apellido}</li>
    <li><strong>DNI:</strong> ${dni}</li>
    <li><strong>Edad:</strong> ${edad}</li>
    <li><strong>Sexo:</strong> ${sexo}</li>
    <li><strong>Nota:</strong> ${nota}</li>
</ul>`;