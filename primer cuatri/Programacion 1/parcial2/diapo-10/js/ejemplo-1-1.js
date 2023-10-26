'use strict';

// Creo la función constructora Humano:
class Humano {
    // Propiedades públicas:
    nombre = 'Nombre';
    apellido = 'Apellido';
    // Propiedad privada:
    #dni = 12345678;

    // Constructor
    constructor() {
        console.log('Nuevo humano creado');
    }
    // Método:
    presentarse() {
        let m = `Soy ${this.nombre} ${this.apellido}, con DNI ${this.#dni}`;
        return m;
    }
    // Método con parámetro:
    estudio(materia) {
        console.log(`Estoy estudiando ${materia}`);
    }
}

// Se crea el objeto juan:
let juan = new Humano();

// Se accede a la propiedades del objeto juan
console.log(juan.nombre, juan.apellido, juan.dni);

// Se ejecuta el método objeto juan
console.log(juan.presentarse());

// Se ejecuta el método con un parámetro objeto juan
juan.estudio('Programación I');
