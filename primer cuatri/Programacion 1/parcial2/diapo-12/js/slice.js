'use strict';

// String:
let cadena = 'La programación es algo maravilloso';

// Aplicación del método:
let cadena1 = cadena.slice(16);
let cadena2 = cadena.slice(-11);
let cadena3 = cadena.slice(3, 15);
let cadena4 = cadena.slice(-16, -12);

// Resultados:
console.info('cadena1:', cadena1);
console.info('cadena2:', cadena2);
console.info('cadena3:', cadena3);
console.info('cadena4:', cadena4);

let textoCompleto = `Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).`;

let titulo = `Lorem Ipsum`;
let copete = textoCompleto.slice(0,210);
let nota   = document.getElementById('nota');
console.log(copete);


copete = copete.slice(0, copete.lastIndexOf(' '));


nota.innerHTML = `<h1>${titulo}</h1>`;
nota.innerHTML += `<p>${copete}...</p>`;
nota.innerHTML += `<button>Ver nota completa</button>`;

