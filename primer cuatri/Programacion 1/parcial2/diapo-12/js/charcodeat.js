'use strict';

// String:
let cadena = 'Una cadena';

// Aplicación del método:
let segundaLetra = cadena.charCodeAt(1);
let ultimaLetra = cadena.charCodeAt(cadena.length - 1);

// Resultados:
console.info('segundaLetra:', segundaLetra);
console.info('ultimaLetra:', ultimaLetra);

let input = document.getElementById('txtDNIN');

input.addEventListener('keypress', function (e) {
	if (e.keyCode<47 || e.keyCode>57){
		e.preventDefault();
	}
})