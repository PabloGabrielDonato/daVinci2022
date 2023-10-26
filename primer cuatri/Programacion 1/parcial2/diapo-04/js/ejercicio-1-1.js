'use strict';

// Declaración de variables globales:
let siglas;

// Creación de funciones:
const IngresarSigla = function() {
	do {
    	siglas = prompt('Ingrese una sigla: dw,dm,dg').toLowerCase();
	} while(!(siglas == 'dw' || siglas == 'dm' || siglas == 'dg'))
}

const MostrarCarrera = function() {
	let mensaje = 'Cursa la carrera de ';
	switch (siglas) {
        case 'dw':
            mensaje += 'Diseño Web';
            break;
        case 'dm':
            mensaje += 'Diseño Multimedial';
            break;
        case 'dg':
            mensaje += 'Diseño Gráfico';
            break;
        default:
            alert('No cargaste la carrera');
            break;
       }    
    console.log(mensaje);
}

