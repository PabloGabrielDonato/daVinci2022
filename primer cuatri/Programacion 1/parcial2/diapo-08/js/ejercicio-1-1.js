// Variable para guardar mensaje:
let info = '';

// Matriz base:
let sodaStereo = [];

sodaStereo[0] = [];            // Necesito indicar que la posición 0 será un array.
sodaStereo[0]['Nombre'] = 'Gustavo';
sodaStereo[0]['Apellido'] = 'Cerati';
sodaStereo[0]['Instrumento'] = 'Guitarra';
sodaStereo[0]['Foto'] = 'soda-stereo-cerati.jpg';

sodaStereo[1] = [];            // Necesito indicar que la posición 1 será un array.
sodaStereo[1]['Nombre'] = 'Héctor';
sodaStereo[1]['Apellido'] = 'Bosio';
sodaStereo[1]['Instrumento'] = 'Bajo';
sodaStereo[1]['Foto'] = 'soda-stereo-bosio.jpg';

sodaStereo[2] = [];            // Necesito indicar que la posición 2 será un array.
sodaStereo[2]['Nombre'] = 'Carlos';
sodaStereo[2]['Apellido'] = 'Ficicchia';
sodaStereo[2]['Instrumento'] = 'Batería';
sodaStereo[2]['Foto'] = 'soda-stereo-alberti.jpg';

// Creación de la matriz asociativa:

// Recorrida de la matriz:
//Recorro primer nivel de sodaStereo
for (let indiceNumerico=0; indiceNumerico<sodaStereo.length; indiceNumerico++) { 
	//Recorro segundo nivel de sodaStereo
	info +='<ul>';
	for (let indiceAsociativo in sodaStereo[indiceNumerico]) {
		if (indiceAsociativo=='Foto') {
			info += '<li><img src="items/'+sodaStereo[indiceNumerico][indiceAsociativo]+'"></li>';
		} else {
			info += '<li>'+indiceAsociativo + ': ' +sodaStereo[indiceNumerico][indiceAsociativo]+'</li>';
		}
	}
	info +='</ul>';
}

// Egreso de información:
document.getElementById('info').innerHTML = info;