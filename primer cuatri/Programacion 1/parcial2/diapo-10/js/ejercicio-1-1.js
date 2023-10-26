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
        do {
            this.nombre = prompt('Ingrese el nombre del/la alumno/a.');
        } while(!isNaN(this.nombre))
    }

    guardarMateria(materia) {
        this.materias.push(materia);
    }

    calcularPromedio() {
        let suma = 0;
        for (let materia of this.materias) {
                suma += materia.leerNota();
            }
        return suma / this.materias.length;
    }

    armar() {
        // Armo la info de cada alumno:
        let res =`
                <p>Alumno/a: ${this.nombre}</p>
                <p>Notas:</p>
                <ul>`;
                    // Recorro cada una de las materias:
                    for (let materia of this.materias) {
                        res += materia.armar();
                    }
        res += `</ul>
               <p>Promedio: ${this.calcularPromedio()}</p>`;
        return res;
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
        do {
            this.nombre = prompt('Ingrese el nombre de la materia.');
        } while(!isNaN(this.nombre))
    }

    ingresarNota() {
        do {
            this.nota = parseInt(prompt('Ingrese la nota de la materia.'));
        } while(!(this.nota >=1 && this.nota <=10))
    }

    leerNota() {
        return this.nota;
    }

    armar() {
        return `<li>Nombre: ${this.nombre} - Nota:${this.nota} </li>`;
    }
}

// Todos los alumnos:
let alumnos = [];

// Funciones:
const Cargar = () => {
    // Variables:
    let alumno;
    let materia;

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
    } while (confirm('¿Más materias?'));

    // Guardo al alumno en el array:
    alumnos.push(alumno);
};

const Mostrar = () => {
    // Variable que guarda el html generado:
    let html = '';

    // Muestro el total de alumnos/as:
    html +=`<h2>Cantidad de alumnos/as: ${Alumno.cantidadAlumnos}</h2>`;

    // Recorro a los alumnos:
    for (let alumno of alumnos) {
        // Muestro cada alumno:
        html += alumno.armar();
        html += '<hr />';
    }

    // Llamo a la función 'Generar':
    document.getElementById('info').innerHTML = html;
};
