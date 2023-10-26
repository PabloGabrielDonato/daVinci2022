'use strict';

// clase-18/ejercicio-1-1.js

// Array de colores:
let aColores = ['red', 'green', 'blue', 'orange', 'yellow', 'cyan', 'magenta'];

$(function () {
    // Buscamos los elementos necesarios:
    let ul = $('#elementos');
    let divColores = $('#colores');

    // Elimino el primer y único li del ul:
    ul.find('li').remove();

    // Recorro el array:
    for (let color of aColores) {
        // Creo el li, le doy propiedades y agrego al ul:
        $(`<li>${color}</li>`).appendTo(ul);

        // Creo el div, le doy propiedades, preparo su onclick y agrego a #elementos:
        $('<div></div>')
            .css({
                width: '60px',
                height: '60px',
                display: 'inline-block',
                backgroundColor: color,
            })
            .on('click', function () {
                let color = $(this).css('background-color');
                // Buscamos todos los li y le asignamos el color:
                ul.children().css('color', color);
            })
            .appendTo(divColores);
    }
});
