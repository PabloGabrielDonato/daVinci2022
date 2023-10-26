// Variable para guardar mensaje:
let info = '';

// Matriz base:
let sodaStereo = [];
/*
sodaStereo[0] = [];            // Necesito indicar que la posición 0 será un array.
sodaStereo[0][0] = 'Gustavo';
sodaStereo[0][1] = 'Cerati';
sodaStereo[0][2] = 'Guitarra';
sodaStereo[0][3] = 'soda-stereo-cerati.jpg';

sodaStereo[1] = [];            // Necesito indicar que la posición 1 será un array.
sodaStereo[1][0] = 'Héctor';
sodaStereo[1][1] = 'Bosio';
sodaStereo[1][2] = 'Bajo';
sodaStereo[1][3] = 'soda-stereo-bosio.jpg';

sodaStereo[2] = [];            // Necesito indicar que la posición 2 será un array.
sodaStereo[2][0] = 'Carlos';
sodaStereo[2][1] = 'Ficicchia';
sodaStereo[2][2] = 'Batería';
sodaStereo[2][3] = 'soda-stereo-alberti.jpg';
*/
// Creación de la matriz asociativa:
sodaStereo[0] = [];            // Necesito indicar que la posición 0 será un array.
sodaStereo[0]['Nombre'] = 'Gustavo';
sodaStereo[0]['Apellido'] = 'Cerati';
sodaStereo[0]['Instrumento'] = 'Guitarra';
sodaStereo[0]['Imagen'] = 'soda-stereo-cerati.jpg';

sodaStereo[1] = [];            // Necesito indicar que la posición 1 será un array.
sodaStereo[1]['Nombre'] = 'Héctor';
sodaStereo[1]['Apellido'] = 'Bosio';
sodaStereo[1]['Instrumento'] = 'Bajo';
sodaStereo[1]['Imagen'] = 'soda-stereo-bosio.jpg';

sodaStereo[2] = [];            // Necesito indicar que la posición 2 será un array.
sodaStereo[2]['Nombre'] = 'Carlos';
sodaStereo[2]['Apellido'] = 'Ficicchia';
sodaStereo[2]['Instrumento'] = 'Batería';
sodaStereo[2]['Imagen'] = 'soda-stereo-alberti.jpg';

// Recorrida de la matriz:
for (let musico of sodaStereo) {
    info += '<ul>';
    for (let dato in musico) {
        if (dato == 'Imagen') {
            info += `<li><strong>${dato}:</strong> <img src="items/${musico[dato]}" /></li>`;
        } else {
            info += `<li><strong>${dato}:</strong> ${musico[dato]}</li>`;
        }
    }
    info += '</ul>';
}

// Egreso de información:
document.getElementById('info').innerHTML = info;