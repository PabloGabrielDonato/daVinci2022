'use strict';

// Document:
const d = document;

// Buscar las imágenes:
let imgs = d.querySelectorAll('main img');

// Recorrer las imágenes:
for (let img of imgs) {
    // Asignar el onclick a cada imagen:
    img.addEventListener('click', (e) => {
        // Crear el div y darle sus propiedades:
        let div = d.createElement('div');
        div.id = 'big';
        // Crear el p y darle sus propiedades:
        let p = d.createElement('p');
        p.innerHTML = e.target.alt;
        // Crear el a y darle sus propiedades y evento:
        let a = d.createElement('a');
        a.href = '#';
        a.innerHTML = 'CERRAR';
        a.addEventListener('click', () => {
            d.querySelector('#big').remove();
            // Para eveitar que haga la acción por defecto de un href="#":
            return false;
        });
        // Clonar la imagen de referencia:
        let img = e.target.cloneNode();
        // Hacer los append:
        d.body.append(div);
        div.append(p);
        div.append(a);
        div.append(img);
    });
}

// Plus:
window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key == 'Escape' && d.querySelector('#big')) {
        d.querySelector('#big').remove();
    }
});