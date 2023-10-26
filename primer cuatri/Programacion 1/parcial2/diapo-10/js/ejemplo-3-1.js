'use strict';

// Creo la función constructora Humano:
class Humano {
    // Propiedades públicas:
    // nombre = 'Nombre';
    // apellido = 'Apellido';
    // Propiedad privada:
    #dni = 12345678;
    edad;

    // Constructor
    constructor(nombre = 'sin nombre', apellido = 'sin apellido') {
        // Guardamos los parámetros en propiedades públicas:
        this.nombre = nombre;
        this.apellido = apellido;
        console.log(`Nuevo/a humano/a creado/a, ${this.nombre} ${this.apellido}`);
    }

    // Set y get:
    set setEdad(edad) {
        this.edad = edad;
    }
    get getEdad() {
        return this.edad;
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
let juan = new Humano('Juan', 'Perez');

// Se establece la edad como si fuera una propiedad:
juan.setEdad = 33;
// Se lee la edad como si fuera una propiedad:
console.log(juan.getEdad);
