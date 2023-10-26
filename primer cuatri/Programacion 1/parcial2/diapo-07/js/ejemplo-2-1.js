'use strict';

let alumno = [];
alumno['Nombre'] = 'Franco';
alumno['Apellido'] = 'Martin';
alumno['Egresado'] = 'true';
alumno['DDMMYYYY'] = '20051985';

for (let indice in alumno){
    console.log(indice, alumno[indice]);
}
/*
let materias = [
    'Análisis de Datos',
    'Diseño Gráfico para Web',
    'Diseño Vectorial',
    'Experiencia del Usuario',
    'Interacción con Dispositivos Móviles',
    'Programación I',
];

for (let i = 0; i < materias.length; i++) {
    console.log(i, materias[i]);
}

for (let indice in materias) {
    console.log(indice, materias[indice]);
}

for (let valor of materias) {
    console.log(valor);
}*/