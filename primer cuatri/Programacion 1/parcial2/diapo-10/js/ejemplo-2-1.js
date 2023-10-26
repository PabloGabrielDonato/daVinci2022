'use strict';

// Creo la función constructora Humano:
class Humano {
    // Propiedades públicas:
    // nombre = 'Nombre';
    // apellido = 'Apellido';
    // Propiedad privada:
    #dni = 12345678;

    // Constructor
    constructor(nombre = 'sin nombre', apellido = 'sin apellido', dni = 1111111) {
        // Guardamos los parámetros en propiedades públicas:
        this.nombre = nombre;
        this.apellido = apellido;
        this.#dni = dni;
        console.log(`Nuevo/a humano/a creado/a, ${this.nombre} ${this.apellido}`);
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
let juan = new Humano('Juan', 'Perez', 23456789);

// Se accede a la propiedades del objeto juan
console.log(juan.nombre, juan.apellido, juan.dni);

// Se ejecuta el método objeto juan
console.log(juan.presentarse());

// Se ejecuta el método con un parámetro objeto juan
juan.estudio('Programación I');

// Creamos otro objeto:
let pedro = new Humano('Pedro', 'Sanchez', 321321312);
console.log(pedro.presentarse());
