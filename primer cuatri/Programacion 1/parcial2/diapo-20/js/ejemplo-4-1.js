'use strict';

// Document:
const d = document;

let btn = d.querySelector('#btn');
let info = d.querySelector('#info');

// 2. Agregar dos eventos del tipo click al button #btn1,
// el primero ejecutará la función funcion1, que mostrará el mensaje "Función 1";
// el segundo ejecutará la función funcion2, que mostrará el mensaje "Función 2".
// Los mensajes se mostrar en p#info:
const funcion1 = (e) => {
    info.innerHTML = 'Función 1<br />';
};
const funcion2 = (e) => {
    info.innerHTML += 'Función 2<br />';
};

btn.addEventListener('click', funcion1);
btn.addEventListener('click', funcion2);

// 3. Con la estructura del div#prueba-2, probar la propagación de eventos:

// Burbujeo: de adentro hacia afuera.
d.querySelector('#a1').addEventListener('click', (e) => {
    info.innerHTML = 'Hiciste click en el a<br />';
    console.log(e.target, e.currentTarget);
    e.preventDefault();
    // e.stopPropagation();
});
d.querySelector('#p1').addEventListener('click', (e) => {
    info.innerHTML += 'Hiciste click en el p<br />';
    console.log(e.target, e.currentTarget);
    // e.stopPropagation();
});
d.querySelector('#d1').addEventListener('click', (e) => {
    info.innerHTML += 'Hiciste click en el div<br />';
    console.log(e.target, e.currentTarget);
    // e.stopPropagation();
});

// Captura: de afuera hacia adentro.
d.querySelector('#a2').addEventListener(
    'click',
    (e) => {
        info.innerHTML += 'Hiciste click en el a<br />';
        e.preventDefault();
        // e.stopPropagation();
    },
    true,
);
d.querySelector('#p2').addEventListener(
    'click',
    (e) => {
        info.innerHTML += 'Hiciste click en el p<br />';
        // e.stopPropagation();
    },
    true,
);
d.querySelector('#d2').addEventListener(
    'click',
    (e) => {
        info.innerHTML = 'Hiciste click en el div<br />';
        // e.stopPropagation();
    },
    true,
);
