'use strict';

// Creación de la matriz:
let sodaStereo = [
    ['Gustavo', 'Cerati'   , 'Guitarra', 'soda-stereo-cerati.jpg', ['Juan', 'Pedro', 'Camila']],
    ['Héctor' , 'Bosio'    , 'Bajo'    , 'soda-stereo-bosio.jpg', ['Jose', 'Lucas', 'Ana'] ],
    ['Carlos' , 'Ficicchia', 'Batería' , 'soda-stereo-alberti.jpg', ['Fer'] ],
];

// Función para mostrar la info recorrida:

const MostrarInfo = () => {
    let info = '';
    //Recorremos el Array sodaStereo, mediante el indice indiceMusico
    for (let indiceMusico in sodaStereo) {
        console.log(sodaStereo[indiceMusico]);
        for (let indiceValor in sodaStereo[indiceMusico]) {
            console.log(sodaStereo[indiceMusico][indiceValor])
            if (indiceValor==4) {
                for (let hije of sodaStereo[indiceMusico][indiceValor]) {
                    console.log(hije);
                }
            }
        }        
    }
    document.getElementById('info').innerHTML = info;
}