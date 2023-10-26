'use strict';

// Variales:
let html = '';

// Persona:
let Persona = {
    nombre: 'Alejandro',
    apellido: 'Potente',
    edad: 33,
    email: 'alejandro.potente@davinci.edu.ar',
    yoSoy: function() {
        return `<p>Mi nombre es ${this.nombre} ${this.apellido}</p>`;
    },
    tengo : function() {
        return `<p>Tengo ${this.edad} años</p>`;
    },
    contacto : function() {
        return `<p>Escribime a ${this.email}</p>`;
    }
};

// Ejecución:
html += Persona.yoSoy();
html += Persona.tengo();
html += Persona.contacto();

document.getElementById('info').innerHTML = html;