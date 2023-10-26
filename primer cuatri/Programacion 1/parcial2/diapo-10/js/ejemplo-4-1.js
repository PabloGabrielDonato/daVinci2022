'use strict';

// Creo la función constructora Humano:
class Humano {
    // Propiedad estática:
    static cont = 0;

    // Getter estático:
    static get verCont() {
        return Humano.cont; // Se acceder colocando Clase.propiedad
    }

    // Método estático:
    static mensaje() {
        console.log('Soy un método estático');
    }

    // Constructor
    constructor(nombre = 'sin nombre', apellido = 'sin apellido') {
        this.nombre = nombre;
        this.apellido = apellido;
        console.log(`Nuevo/a humano/a creado/a, ${this.nombre} ${this.apellido}`);
        // Afecto a la propiedad estática:
        Humano.cont++; // Cada vez que se cree un "Humano", se incrementa el propiedad estática.
    }

    // Método:
    presentarse() {
        let m = `Soy ${this.nombre} ${this.apellido}`;
        return m;
    }
}

let juan = new Humano('Juan', 'Perez');
let maria = new Humano('María', 'Gomez');
let pedro = new Humano('Pedro', 'Gonzalez');

// Ejecutamos el método estático:
Humano.mensaje();

// Ejecutamos el geeter estático:
console.log(Humano.verCont);

// Modificamos la propiedad estática y vemos su nuevo valor:
Humano.cont = 100;
console.log(Humano.verCont);
