'use strict';

// Creación de la matriz:
let sodaStereo = [
    ['Gustavo', 'Cerati', 'Guitarra', 'soda-stereo-cerati.jpg'],
    ['Héctor', 'Bosio', 'Bajo', 'soda-stereo-bosio.jpg'],
    ['Carlos', 'Ficicchia', 'Batería', 'soda-stereo-alberti.jpg'],
];

// Función para mostrar la info recorrida:

const MostrarInfo = () => {
    let info = '';
    for (let indiceMusico in sodaStereo) {
        info += `<p>Músico ${indiceMusico}:</p>`;
        info += '<ul>';
        for (let indiceDato in sodaStereo[indiceMusico]) {
            if (indiceDato == 3) {
                info += `<li><img src="items/${sodaStereo[indiceMusico][indiceDato]}" /></li>`;
            } else {
                info += `<li>${sodaStereo[indiceMusico][indiceDato]}</li>`;
            }
        }
        info += '</ul>';
    }
    document.getElementById('info').innerHTML = info;
}