'use strict';

// Variables:
let cl1,
    cl2,
    btn,
    msj,
    // Contador de errores:
    err = 1;

// Obtengo todos los objetos con document.getElementById:
/*cl1 = document.getElementById('clave1');
cl2 = document.getElementById('clave2');
btn = document.getElementById('boton');
msj = document.getElementById('mensaje');*/

// Obtengo todos los objetos con document.:
cl1 = document.querySelector('#clave1');
cl2 = document.getElementsByName('clave2')[0];
btn = document.querySelector('#boton');
msj = document.querySelector('#mensaje');

console.log(cl2);


// Asigno una función anónima al evento onclick del botón:
btn.addEventListener('click', (event) => {
    console.log(event);

    // Obtengo los values:
    let pw1 = cl1.value;
    let pw2 = cl2.value;
    console.log(pw1, pw2);

    if (pw1 == '' || pw2.length == 0) {
        // Falta ingresar:
        msj.style.color = 'blue';
        msj.innerHTML   = 'Falta completar las claves.';
    } else if (pw1 != pw2) {
        // No coinciden:
        msj.style.color = 'red';
        msj.innerHTML   = 'Los valores ingresados son distintos.';
        // Banderita de error:
        err++;
        if (err > 3) {
            msj.style.color = 'orange';
            msj.innerHTML   = 'Bloqueado por seguridad.';

            //Oculto el boton 
            //btn.style.display = 'none';
            event.target.disabled = true;
        }
        
    } else {
        // Coinciden:
         msj.style.color = 'green';
         msj.innerHTML   = 'Son Iguales!!!';
    }
});
