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

m += `
<ul>
    <li><strong>Promedio desaprobados:</strong> ${promDpb}</li>
    <li><strong>Promedio aprobados:</strong> ${promApb}</li>
    <li><strong>Promedio promocionados:</strong> ${promPrm}</li>
    <li><strong>Mínimo:</strong> ${min}</li>
    <li><strong>Máximo:</strong> ${max}</li>
</ul>`;