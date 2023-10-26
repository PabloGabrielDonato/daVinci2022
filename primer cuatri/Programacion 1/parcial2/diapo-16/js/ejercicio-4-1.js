'use strict';

// Document:
const d = document;

// Plus:
window.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key == 'Escape' && d.querySelector('#big')) {
        d.querySelector('#big').remove();
    }
});