'use strict';

// Declaración de variables:
let m = '',
    n,
    cont = 0,
    acum = 0,
    min,
    max,
    prom;

// Desarrollo del algoritmo:

for (cont=0;cont<5;cont++)
 {
     //Solicito el numer y valido que sea numerico
     do {
         n = parseInt(prompt('Ingrese un valor numerico.'));
     } while (isNaN(n))
     document.write('El numero ingresado es:'+n);

     //Agrego el valor al acumulador
     acum +=n;

     //Minimo y Maximo
     if (cont==0) {
         min = n;
         max = n;
     } else {
         if (n<min) {
             min = n;
         }
         if (n>max) {
             max = n;
         }            
     }
 }
prom = acum / 5; 

m += `
<ul>
    <li><strong>Promedio:</strong> ${prom}</li>
    <li><strong>Mínimo:</strong> ${min}</li>
    <li><strong>Máximo:</strong> ${max}</li>
</ul>`;