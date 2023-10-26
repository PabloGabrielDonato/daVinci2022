'use strict';

// Variables:
let cl1,
    cl2,
    btn,
    msj,
    // Contador de errores:
    err = 1;

// Obtengo todos los objetos:
cl1 = document.querySelector('#clave1');
cl2 = document.querySelector('#clave2');
btn = document.querySelector('#boton');
msj = document.querySelector('#mensaje');

// Asigno una función anónima al evento onclick del botón:
btn.addEventListener('click', (e) => {
    // Obtengo los values:
    let pw1 = cl1.value;
    let pw2 = cl2.value;
    if (pw1 == '' || pw2.length == 0) {
        // Falta ingresar:
        msj.innerHTML = 'No ingresaste correctamente las claves';
        msj.style.color = 'blue';
    } else if (pw1 != pw2) {
        // No coinciden:
        msj.innerHTML = `Las claves no son iguales (Error n° ${err})`;
        msj.style.color = 'red';
        // Banderita de error:
        err++;
        if (err > 3) {
            // Límite de errores:
            msj.innerHTML += '<br />Error fatal';
            msj.style.color = 'orange';
            // Deshabilitar el botón:
            e.target.disabled = true;
        }
    } else {
        // Coinciden:
        msj.innerHTML = 'Las claves coinciden';
        msj.style.color = 'green';
        err = 0;
    }
});
