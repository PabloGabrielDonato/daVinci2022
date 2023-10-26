'use strict';

// Variales:
let html = '';

// Persona:
let Persona = {
    
};

// Ejecución:
html += Persona.YoSoy();
html += Persona.Tengo();
html += Persona.Contacto();

document.getElementById('info').innerHTML = html;