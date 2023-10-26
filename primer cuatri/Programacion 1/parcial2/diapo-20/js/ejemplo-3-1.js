'use strict';

// Document:
const d = document;

/*
X. Buscar todos las div y los links #up, #down y #top.
X. Al hacer scroll en el body, detectar la posición del scroll (mostrarla en consola).
X. Recorrer los div para detectar sus límites y en base a ellos, ir cambiando el color de fondo según el color del h2 del div por el cual está pasando el scroll. Comenzamos con el color #D4EAF3.
X. Al hacer click en el link #top, evitar que vaya directamente al anchor (return false) y animar el scroll para que suba 15px cada 10ms.
X. Al hacer click en el link #up, evitar que vaya directamente al anchor (return false) y que suba 50px.
X. Al hacer click en el link #down, evitar que vaya directamente al anchor (return false) y que baje 50px.
*/

// 1. Buscar todos las div y los links #up, #down y #top:
let aDiv = d.querySelectorAll('div');
let aTop = d.querySelector('#top');
let aUp = d.querySelector('#up');
let aDown = d.querySelector('#down');

// 2. Al hacer scroll en el body, detectar la posición del scroll (mostrarla en consola).
window.addEventListener('scroll', () => {
    // Posición del scroll:
    let pos = window.pageYOffset;
    console.info('Pos Y del scroll:', pos);

    // Recorrer los div para detectar sus límites y en base a ellos, ir cambiando el color de fondo según el color del h2 del div por el cual está pasando el scroll. Comenzamos con el color #D4EAF3.:
    let color = '#D4EAF3'; // Color por defecto.

    // Variables:
    let ini, // Posición donde comienza cada div.
        fin, // Posición donde termina cada div.
        h2; // Variable donde guardaremos el h2.

    // Recorrido de las secciones:
    for (let div of aDiv) {
        // Inicio de la sección: límite superior.
        ini = div.offsetTop;

        // Fin de la sección: límite de altura de la sección, más el inicio de la sección.
        fin = div.offsetHeight + ini;

        // Buscamos si el scroll se encuentra en la sección:
        if (pos >= ini && pos <= fin) {
            // Obtenemos el color del h2:
            color = div.firstElementChild.style.color;
        }
        // Cambia color:
        d.body.style.backgroundColor = color;
    }
});

// 4. Al hacer clic en el link, evitar que vaya directamente al anchor (return false) y animar el scroll para que suba 15px cada 10ms:
aTop.addEventListener('click', () => {
    // Posición del scroll:
    let pos = window.pageYOffset;
    // Verificamos que el scroll no esté arriba de todo, de no ser así, animamos el scroll:
    if (pos > 0) {
        let fx = setInterval(() => {
            pos -= 15;
            // Cuando llega o supera los 0px, colocar en 0 y detener el intervalo:
            if (pos <= 0) {
                pos = 0;
                clearInterval(fx);
            }
            window.scrollTo(0, pos);
        }, 10);
    }
    return false;
});

// 5. Al hacer click en el link #up, evitar que vaya directamente al anchor (return false) y que suba 50px.
aUp.addEventListener('click', () => {
    Mover('up');
    return false;
});

// 6. Al hacer click en el link #down, evitar que vaya directamente al anchor (return false) y que baje 50px.
aDown.addEventListener('click', () => {
    Mover('down');
    return false;
});

const Mover = (direccion = 'down', cantidad = 50) => {
    // Posición del scroll:
    let sentido = direccion == 'down' ? 1 : -1;
    // Cada una determinada cantidad:
    window.scrollBy(0, cantidad * sentido);
    // Cada "alto de página";
    //window.scrollBy(0, window.innerHeight * sentido);
};
