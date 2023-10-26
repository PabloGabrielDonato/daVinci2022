'use strict';

// Creo la función:
function indexOfAll(array = [], busqueda = '', inicio = 0) {
    // Variable que se encarga de guardar el índice de la búsqueda:
    let indice;

    // Variable que se encarga de ir guardando todos los índices de la búsqueda:
    let indices = [];

    // Se repite el proceso mientras haya índices:
    do {
        // Búsqueda:
        indice = array.indexOf(busqueda, inicio);

        // Se verifica si hubo algún resultado:
        if (indice != -1) {
            // Si lo hubo, se guarda el índice:
            indices.push(indice);

            // Ahora el inicio será la siguiente posición al índice encontrado:
            inicio = indice + 1;
        }
    } while (indice != -1 && inicio < array.length);

    // Se retorna el array con los índices:
    return indices;
}

// Función para listar colores:
function ListarIndexOf(color, array) {
    let unArray = indexOfAll(array, color);
    let html = `<p>El valor "${color}" aparece la siguiente cantidad de veces: ${unArray.length}.</p>`;
    if (unArray.length) {
        html += `<p>Aparece en el/los índice/s: ${unArray.toString()}.</p>`;
    }
    html += '<hr />';
    document.getElementById('info').innerHTML += html;
}

ListarIndexOf('rojo', colores);
ListarIndexOf('verde', colores);
ListarIndexOf('blanco', colores);
