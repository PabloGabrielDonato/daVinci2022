'use strict';

// Document:
const d = document;

// Cajitas:
let cajas,
    // Inputs:
    txtProp,
    txtVal,
    btn,
    /** Variable global que se encarga de guardar el último div seleccionado (similar a lo que hacemos con document).
    Como por defecto no hay div seleccionado, incializa en null:
     */
    seleccion = null,
    // Párrafo:
    msj;


txtProp = d.querySelector('#css-propiedad');
txtVal  = d.querySelector('#css-valor');
btn     = d.querySelector('#boton');
msj     = d.querySelector('#mensaje');

// Búsqueda de elementos (por id y herencia):
cajas   = d.querySelectorAll('#cajas-editables > div');


// Recorremos las cajas para asignarle un escuchador de eventos:
for (let caja of cajas) {
    // Asigno la función a cada div en su evento click:
    caja.addEventListener('click', (e) => {
        // Verificamos el div:
        console.info(e.target);
        // Guardamos el div "OBJETIVO" en la variable auxiliar:
        seleccion = e.target;
        for (let caja of cajas) { 
            caja.style.fontWeight = '';
        }
        seleccion.style.fontWeight = 'bold';
        // Como hacemos con d = document;
    });
}

// Asigno una función al click del botón:
btn.addEventListener('click', (e) => {
    // Primero verifico que haya un div seleccionado:
    if (seleccion === null) {
        msj.style.color ='red';
        msj.innerHTML = 'No se seleccionó un div';
        return;
    }
    // Obtengo los valores de los inputs:
    let prop = txtProp.value;
    let val  = txtVal.value;
    // Asigno al div seleccionado la propiedad y el valor:
    seleccion.style[prop] = val;
    // Por las dudas se resetea el mensaje:
    msj.innerHTML = '';
});
