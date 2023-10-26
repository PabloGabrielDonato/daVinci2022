'use strict';

// Document:
const d = document;

// Buscar elementos:
let btn = d.querySelector('#chat input[type=button]');
let div = d.querySelector('#chat div');
let msj = d.querySelector('#mensaje');

// Limpiar el div:
div.innerHTML = '';

// Asignar el onclick al botón:
btn.addEventListener('click', (e) => {
    // Buscar los input radio:
    let aRad = d.querySelectorAll('#chat input[name=estado]');
    // Obtenger el value del textarea:
    let txt = d.querySelector('#chat textarea').value;
    // Verificar si hay algún estado seleccionado:
    let estado = false;
    for (let radio of aRad) {
        // Si existe, guardarlo:
        if (radio.checked) {
            estado = radio.value;
        }
    }
    // Verificar si existe valor para el textarea y estado:
    if (!txt.length || !estado) {
        msj.style.color = 'red';
        msj.innerHTML = 'Debe elegir un estado y escribir un mensaje';
    } else {
        // Crear el p, darle propiedades, métodos y agregarlo al div:
        let p = d.createElement('p');
        p.innerHTML = txt;
        p.style.backgroundImage = 'url(items/' + estado + '.jpg)';
        msj.innerHTML = '';
        // Reset:
        d.querySelector('#chat textarea').value = '';
        //d.querySelector('form').reset();
        p.addEventListener('dblclick', (e) => {
            btn.remove();
        });
        div.append(p);
    }
});
