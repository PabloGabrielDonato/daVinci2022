'use strict';

// clase-18/ejercicio-2-1.js

$(function () {
    // Busco el ul:
    let ul = $('#listado');

    // Busco los li dentro del ul:
    let aLi = ul.children();

    // Recorrer los li:
    aLi.each(function () {
        // Busco el de cada li y le asigno una funcion a su onclick:
        $(this).find('a').on('click', Borrar);
    });

    // Creo la función Borrar, que borra el li padre del a, del ul:
    function Borrar() {
        // Remuevo el li del ul:
        $(this).parent().remove();
    }

    // Obtengo el txt y el btn:
    let txt = $('[type=text]');
    let btn = $('[type=button]');

    // Le asigno una función al onclick del botón:
    btn.click(function () {
        // Obtener el valor del txt:
        let t = txt.val();
        // Verifico que tenga algun contenido el input:
        if (!t.length) {
            // Si no lo tiene lo informo:
            $('#mensaje').html('Ingrese un valor');
        } else {
            // Si tiene creo un li y el a:
            $(`<li>${t} <a href="#">[-]</a></li>`).find('a').on('click', Borrar).parent().appendTo(ul);
            txt.val('');
        }
    });
});
