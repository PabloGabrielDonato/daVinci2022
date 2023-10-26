'use strict';

//Escucho el evento load de window, para saber que se finalizo la carga del documento
window.addEventListener('load', function () {
	let imagen   = document.getElementById('imagen');
	let texto    = document.getElementById('texto');
    let bandas   = document.getElementById('bandas');
	let boton    = document.getElementById('boton');
	let cantidad = 0;

    bandas.style.display = 'none';

    document.querySelector('#cantidad').innerHTML = cantidad;

    // Estilos:
	 for (let li of document.querySelectorAll('.impar')) {
	     li.style.color = 'red';

	     li.addEventListener('click', function() {
	     	console.log(this.innerHTML, this.dataset.lanzamiento);
	     });
	 }
	 for (let li of document.querySelectorAll('.par')) {
	     li.style.color = 'blue';
	 }
	// Otra forma:
	// for (let li of lisBandas) {
	//     li.style.color = li.className == 'par' ? 'blue' : 'red';
	// }



		

	imagen.addEventListener('click', function(eventObject) {
	cantidad++;
	document.querySelector('#cantidad').innerHTML = cantidad;

	if (imagen.attributes.src.value =='items/flaco-spinetta.jpg') {
			imagen.attributes.src.value ='items/charly-garcia.jpg';
			texto.style.color ='blue';
			texto.innerHTML ='<em>Charly</em> García tocando el piano';
	} else {
			imagen.attributes.src.value ='items/flaco-spinetta.jpg';
			texto.style.color ='red';
			texto.innerHTML ='<em>El flaco</em> tocando la guitarra';
		}
	});

	boton.addEventListener('click', function(eventObject) {
		if (bandas.style.display=='none') {
			boton.value ='Ocultar Bandas';
			bandas.style.display = 'block';
		} else {
	   	    bandas.style.display = 'none';
			boton.value ='Mostrar Bandas';
		}
	});
	
});






























// La imagen:
// let img = document.querySelector('#imagen');
// console.log('Imagen:', img);
// console.log('Imagen alt:', img.alt);
// console.info('Imagen src:', img.src);
// console.info('Imagen attributes.src.value:', img.attributes.src.value);
// console.log('Imagen title:', img.title);

// El texto:
// let txt = document.querySelector('#texto');
// console.info('Párrafo:', txt);
// console.log('Párrafo contenido:', txt.innerHTML);

// Ul y lis y recorrida::
// let ulBandas = document.querySelector('#bandas');
// let lisBandas = document.querySelectorAll('#bandas li');
// for (let li of lisBandas) {
//     console.log(li.innerHTML);
// }

// Modificación del alt y src de la imagen:
// img.src = 'items/flaco-spinetta.jpg';
// img.alt = 'Luis Alberto Spinetta tocando la guitarra';
// img.title = 'Te cuento lo que hace el Flaco';

// Modificación del title y contenido del texto:
// txt.innerHTML = 'El <em>flaco</em> Spinetta tocando la guitarra';

// Estilos:
// for (let li of document.querySelectorAll('.impar')) {
//     li.style.color = 'red';
// }
// for (let li of document.querySelectorAll('.par')) {
//     li.style.color = 'blue';
// }
// Otra forma:
// for (let li of lisBandas) {
//     li.style.color = li.className == 'par' ? 'blue' : 'red';
// }
