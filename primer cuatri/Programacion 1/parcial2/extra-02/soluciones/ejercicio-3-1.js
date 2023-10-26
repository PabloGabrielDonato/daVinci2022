'use strict';

// clase-18/ejercicio-4-1.js

$(function () {
    // Busco las imágenes y recorro las imágenes:
    $('img').each(function () {
        // Asigno el onclick a cada imagen:
        $(this).on('click', Ampliar);
    });

    // Función que amplía:
    function Ampliar() {
        // Creo el div, el p, el a, la img y le doy sus propiedades:
        $(`
            <div id="big">
                <p>${$(this).attr('alt')}</p>
                <a href="#">CERRAR</a>
                <img src="${$(this).attr('src')}" alt="${$(this).attr('alt')}" />
            </div>
        `).
        find('a').
            click(function () {
                $('#big').fadeOut('slow', function() { $(this).remove() });
                return false;
            }).
            parent().
        hide().
        fadeIn('fast').
        appendTo($('body'));
    }
});