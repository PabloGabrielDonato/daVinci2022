'use strict';

/*Cargar un array de 10 colores.
Convertir el array en una cadena, uniendo los colores con un " y ".
Finalmente reemplazar todas las vocales, tanto minúsculas como mayúsculas, por "-".
Mostrar el resultado final.*/

// Array:
let aColores = [
    'Verde',
    'Rojo',
    'Amarillo',
    'Azul',
    'Indigo',
    'Blanco',
    'Negro',
    'Marrón',
    'Celeste',
    'Naranja',
];


// Armado de la cadena:
let cadena = aColores.join(' y ');

// Reemplazo de caracteres:
let cadenaFinal = '';



console.info('cadenaOriginal:', cadena);
console.info('-----');

//cadena.length tengo la cantidad de caracteres de la cadena
for (let i=0;i<cadena.length;i++) {
	//charAt me devuelve el caracter del indice que le pase como parametro
	cadenaFinal += cadena.charAt(i).replace('a','-').replace('e','-').replace('i','-').replace('o','-').replace('u','-').replace('A','-').replace('E','-').replace('I','-').replace('O','-').replace('U','-');
}

// Reemplazo de caracteres:
//cadenaFinal = cadena.replace(/a/gi, '-').replace(/e/gi, '-').replace(/i/gi, '-').replace(/o/gi, '-').replace(/u/gi, '-');

console.info('cadenaFinal:', cadenaFinal);
console.info('-----');


document.getElementById('info').innerHTML = cadenaFinal;
