'use strict';

console.log(this);

const miBoton = document.getElementById('miBoton');

miBoton.addEventListener('click', () => {
    alert('Click en el boton');
    console.log(this);
})

// Creo el objeto PersonaA:
let PersonaA = {
    Nombre: 'Alejandro',
    Apellido: 'Potente',
    Presentarse: function () {
        console.log(`Mi nombre es ${this.Nombre} ${this.Apellido}`);
    }
}

// Creo el objeto PersonaB:
let PersonaB = {
    Nombre: 'Marta',
    Apellido: 'Saffirio',
    Presentarse: function () {
        console.log(`Mi nombre es ${this.Nombre} ${this.Apellido}`);
    }
}

// Ejecuto los métodos:
PersonaA.Presentarse();
PersonaB.Presentarse();