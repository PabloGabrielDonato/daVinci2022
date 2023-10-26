'use strict';

// Variales:
let html2 = '';

// Objeto:
let Entrega2 = {
    Alumno: {
        Nombre: 'Norberto',
        Apellido: 'Napolitano',
        'Comisión': 'dw2a',
    },
    Materia: {
        Nombre: 'Programación I',
        Docente: 'Lic. Alejandro Potente',
        'Exámen parcial': 1,
    },
};

// Recorrida:
for (let titulo in Entrega2) {
    html2 += `<p>${titulo}</h2>`;
    html2 += '<ul>';
    for (let campo in Entrega2[titulo]) {
        html2 += `<li><strong>${campo}:</strong> ${Entrega2[titulo][campo]}</li>`;
    }
    html2 += '</ul>';
}

document.getElementById('info-2').innerHTML = html2;