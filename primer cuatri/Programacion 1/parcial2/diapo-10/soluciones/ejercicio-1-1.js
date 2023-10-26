'use strict';

class Alumno {
    // Estático:
    static cantidadAlumnos = 0;

    // Propiedades:
    nombre = 'Nombre alumno/a';
    materias = [];

    // Constructor:
    constructor() {
        console.log('Nuevo/a alumno/a creado');
        // Incremento por cada nuevo/a alumno:
        Alumno.cantidadAlumnos++;
    }

    // Métodos:
    ingresarNombre() {
        let nombre;
        do {
            nombre = prompt('Ingrese nombre del/la alumno/a');
        } while (!isNaN(nombre));
        this.nombre = nombre;
    }

    guardarMateria(materia) {
        this.materias.push(materia);
    }

    calcularPromedio() {
        let acum = 0;
        for (let materia of this.materias) {
            acum += materia.leerNota();
        }
        return acum / this.materias.length;
    }

    armar() {
        // Armo la info de cada alumno:
        let m = `
            <p>Alumno/a: ${this.nombre}</p>
            <p>Notas:</p>
            <ul>
        `;
        // Recorro cada una de las materias:
        for (let materia of this.materias) {
            m += materia.armar();
        }
        m += `
            </ul>
            <p>Promedio: ${this.calcularPromedio()}</p>
        `;
        return m;
    }
}

class Materia {
    // Propiedades:
    nombre = 'Nombre materia';
    nota = 0;

    // Constructor:
    constructor() {
        console.log('Nueva materia creado');
    }

    // Métodos:
    ingresarNombre() {
        let nombre;
        do {
            nombre = prompt('Ingrese nombre de la materia');
        } while (!isNaN(nombre));
        this.nombre = nombre;
    }

    ingresarNota() {
        let nota;
        do {
            nota = parseInt(prompt('Ingrese nota de la materia'));
        } while (!(nota >= 1 && nota <= 10));
        this.nota = nota;
    }

    leerNota() {
        return this.nota;
    }

    armar() {
        let m = `<li>Nombre: ${this.nombre} - Nota: ${this.nota}</li>`;
        return m;
    }
}

// Todos los alumnos:
let alumnos = [];

// Funciones:
const Cargar = () => {
    // Variables:
    let alumno, materia;

    // Creo el alumno:
    alumno = new Alumno();

    // Pido su nombre:
    alumno.ingresarNombre();

    // Materias:
    do {
        // Creo la materia:
        materia = new Materia();
        // Pido nombre y nota:
        materia.ingresarNombre();
        materia.ingresarNota();
        // La guardo en el alumno:
        alumno.guardarMateria(materia);
    } while (confirm('Más materias?'));

    // Guardo al alumno en el array:
    alumnos.push(alumno);
};

const Mostrar = () => {
    // Variable que guarda el html generado:
    let html = '';

    // Muestro el total de alumnos/as:
    html += `<h2>Cantidad de alumnos/as: ${Alumno.cantidadAlumnos}</h2>`;

    // Recorro a los alumnos:
    for (let alumno of alumnos) {
        // Muestro cada alumno:
        html += alumno.armar();
        html += '<hr />';
    }

    // Llamo a la función 'Generar':
    document.getElementById('info').innerHTML = html;
};
