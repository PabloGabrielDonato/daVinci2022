'use strict';

// Document:
const d = document;

// 1. Inicializar jQuery:
$(function () {
    // 2. Obtener el ul (ver en consola):
    console.info($('ul'));

    // 3. Cambiar el css a los li del ul#tipos: color green, font-style italic, text-decoration underline:
    $('#tipos li').css({
        color: 'green',
        'font-style': 'italic',
        'text-decoration': 'underline',
    });

    // 4. Recorrer cada elemento de los ul y mostrar su contenido interno en p#info:
    $('#tipos li').each(function (i) {
        console.info($(this), i);
        // 5. Si el ítem recorrido está en orden impar, colorear en blue:
        if (i % 2 != 0) {
            $(this).css('color', 'blue');
        }
        let liTxt = $(this).html();
        $('#info').html(function (i, contenido) {
            return contenido + liTxt + '<br />';
        });
    });

    // 6. El primer botón aplica fadeToggle al ul:
    $('button')
        .eq(0)
        .on('click', function () {
            // Con .eq(indice) se puede indicar que índice de un listado de elementos.
            $('#tipos').fadeToggle('slow', () => {
                console.info('Terminó la animación de fading');
            });
        });

    // 7. El segundo botón aplica slideToggle al ul:
    $('button')
        .eq(1)
        .on('click', function () {
            // Con .eq(indice) se puede indicar que índice de un listado de elementos.
            $('#tipos').slideToggle(500, () => {
                console.info('Terminó la animación de sliding');
            });
        });

    // 8. El tercer botón aplica toggle al ul:
    $('button')
        .eq(2)
        .on('click', function () {
            // Con .eq(indice) se puede indicar que índice de un listado de elementos.
            $('#tipos').fadeToggle('fast', () => {
                console.info('Terminó la animación');
                let txt = $('button').eq(2).find('span').eq(0).html() == 'Ocultar' ? 'Mostrar' : 'Ocultar';
                $('button').eq(2).find('span').eq(0).html(txt);
            });
        });
});
