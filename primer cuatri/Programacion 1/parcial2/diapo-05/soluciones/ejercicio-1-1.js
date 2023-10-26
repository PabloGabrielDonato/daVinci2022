'use strict';

// Creación de la función:
const CalcularImpuesto = function(precio = null, impuesto = 21) {
    // Verificamos:
    if (precio == null) {
        // Que el precio no esté vacío:
        console.error('No ingresó un precio');
    } else if (isNaN(precio)) {
        // que el precio sea un número:
        console.error('No ingresó un precio válido');
    } else if (isNaN(impuesto)) {
        // que el impuesto sea un número:
        console.error('No ingresó un impuesto válido');
    } else {
        // Analizo si el valor del impuesto está entre 0 y 100, sino será 21:
        impuesto = impuesto >= 0 && impuesto <= 100 ? impuesto : 21;
        // Calculo el iva:
        let iva = precio * impuesto / 100;
        // Caculo el total:
        let total = precio + iva;
        // Armo el mensaje:
        let m = `Precio: ${precio} – IVA: ${impuesto}% – Total ${total}`;
        // Retorno el mensaje:
        return m;
    }
}