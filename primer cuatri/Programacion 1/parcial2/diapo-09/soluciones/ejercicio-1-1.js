'use strict';

// Variales:
let html1 = '';

// Array:
let Entrega = [];

// Creando nuevo índice y sub-índices:
Entrega['Alumno'] = [];
Entrega['Alumno']['Nombre'] = 'Norberto';
Entrega['Alumno']['Apellido'] = 'Napolitano';
Entrega['Alumno']['Comisión'] = 'dw2a';

// Creando nuevo índice y sub propiedades:
Entrega['Materia'] = {
    Nombre: 'Programación I',
    Docente: 'Lic. Alejandro Potente',
    'Exámen parcial': 1,
}

// Recorrida:
for (let titulo in Entrega) {
    html1 += `<p>${titulo}</h2>`;
    html1 += '<ul>';
    for (let campo in Entrega[titulo]) {
        html1 += `<li><strong>${campo}:</strong> ${Entrega[titulo][campo]}</li>`;
    }
    html1 += '</ul>';
}

document.getElementById('info-1').innerHTML = html1;