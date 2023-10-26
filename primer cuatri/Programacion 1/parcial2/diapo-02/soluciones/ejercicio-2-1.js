'use strict';

// Declaración de variables:
let m = '',
    n,
    cont = 0,
    contApb = 0,
    contDpb = 0,
    contPrm = 0,
    acumApb = 0,
    acumDpb = 0,
    acumPrm = 0,
    min,
    max,
    promDpb,
    promApb,
    promPrm;

// Desarrollo del algoritmo:
m += '<ul>';
do {
    n = parseInt(prompt('Ingrese una nota (sí, usted es bueno e ingesa notas de 1 a 10'));
    if (n < 4) {
        contDpb++;
        acumDpb += n;
    } else {
        contApb++;
        acumApb += n;
        if (n >= 7) {
            contPrm++;
            acumPrm += n;
        }
    }
    cont++;
    // Mínimo y máximo:
    if (cont == 1) {
        min = n;
        max = n;
    } else {
        min = n < min ? n : min;
        max = n > max ? n : max;
    }
    // Consola:
    console.info('Nota:', n, 'cont', cont, 'contDpb:', contDpb, 'contApb:', contApb, 'contPrm:', contPrm, 'min:', min, 'max:', max);
    // Armo el mensaje:
    m += `<li>Nota ${cont}: <strong> ${n}</strong>.</li>`;
} while (confirm('¿Desea ingresar otra nota?'))
m += '</ul>';

// Calculo de promedio:
promDpb = acumDpb / contDpb;
promApb = acumApb / contApb;
promPrm = acumPrm / contPrm;

m += `
<ul>
    <li><strong>Promedio desaprobados:</strong> ${promDpb}</li>
    <li><strong>Promedio aprobados:</strong> ${promApb}</li>
    <li><strong>Promedio promocionados:</strong> ${promPrm}</li>
    <li><strong>Mínimo:</strong> ${min}</li>
    <li><strong>Máximo:</strong> ${max}</li>
</ul>`;