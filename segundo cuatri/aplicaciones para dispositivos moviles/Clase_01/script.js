console.log('Clase 01');
// Crear una app para el registro de 3 empleados con los datos:
// nombre, dni, lenguajes
// Luego mostrar en una tabla los empleados

let empleados = [];

for (let i = 0; i < 3; i++) {

    let nombre = prompt('Nombre del empleado');
    let dni = prompt('Dni del empleado');
    let lenguajes = [];
    
    do {
        lenguajes.push( prompt('Ingrese el primer lenguaje') )

    } while( confirm('¿Ingresar más lenguajes?'))

    // Agregar al array empleados los datos del empleado
    empleados.push({
            nombre: nombre,
            dni: dni,
            lenguajes: lenguajes
        })

}

console.table(empleados);