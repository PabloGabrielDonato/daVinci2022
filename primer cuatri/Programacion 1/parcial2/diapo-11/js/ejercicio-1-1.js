'use strict';

// Creo la función:
function indexOfAll(array = [], busqueda = '', inicio = 0) {

    // Array donde vamos a guardar los indices en los que encontremos el color que buscamos
    let indices = [];

    // Variable donde voy a guardar el indice resultante de la busqueda con indexOf
    let indice;

    do {
        indice = array.indexOf(busqueda, inicio);

        if (indice != -1) {
            //Agrego el indice donde lo encontramos al array de indices de resultado
            indices.push(indice);

            //Establecemos el siguiente inicio desde la posicion siguiente a donde encontramos el color
            inicio = indice + 1;
        }

    } while(indice != -1)

    // Retornamos el array resultante
    return indices;
}

// Función para listar colores:
function ListarIndexOf(color, array) {
    let unArray = indexOfAll(array, color);
    let html = `<p>El color "${color}" aparece la siguiente cantidad de veces: ${unArray.length}.</p>`;
    if (unArray.length) {
        html += `<p>Aparece en el/los índice/s: ${unArray.toString()}.</p>`;
    }
    html += '<hr />';
    document.getElementById('info').innerHTML += html;
}

ListarIndexOf('rojo', colores);
ListarIndexOf('verde', colores);
ListarIndexOf('blanco', colores);
ListarIndexOf('azul', colores);
ListarIndexOf('amarillo', colores);