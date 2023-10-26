'use strict';

// Declaración de variables:
let mensaje = '',
    ciudad,
    sexo,
    edad,
    cont    = 0,
    contM   = 0,
    contH   = 0,
    acum    = 0,
    acumM   = 0,
    acumH   = 0,
    contM21 = 0,
    contH21 = 0,
    maxM,
    minH,
    prom,
    promM,
    promH,
    porcH,
    porcM;

// Desarrollo del algoritmo:

do {
    //Pido y valido la Ciudad
    do {
        ciudad = prompt('Ingrese la ciudad');    
    } while (!isNaN(ciudad))

    //Pido y valido el Sexo
    do {
        sexo = prompt('Ingrese su sexo H o M').toUpperCase();    
    } while (!(sexo=='H' !! sexo=='M'))

    //Pido y valido la Edad    


} while (confirm('¿Quiere seguir cargando datos?'))





m += `
<ul>
    <li>Promedio de edad general: ${prom}.</li>
    <li>Promedio de edad de las mujeres: ${promM}.</li>
    <li>Promedio de edad de los hombres: ${promH}.</li>
    <li>Porcentaje de mujeres menores a 21 años: ${porcM }.</li>
    <li>Porcentaje de hombres mayores a 21 años: ${porcH }.</li>
    <li>La mayor edad ingresada de las mujeres: ${maxM}.</li>
    <li>La menor edad ingresada de los hombres: ${minH}.</li>
</ul>`;