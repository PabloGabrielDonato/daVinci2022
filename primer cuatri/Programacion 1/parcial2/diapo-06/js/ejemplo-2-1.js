'use strict';

// Creación de las funciones:
const Sumar = (sumando1, sumando2) => {
    let suma = sumando1 + sumando2;
    return suma;
}

const Dividir = (dividendo, divisor) => {
    let cociente = dividendo / divisor;
    return cociente;
}

const PromediarEntre2 = (num1 = 0, num2 = 0) => {
    if (isNaN(num1) || isNaN(num2)) {
        console.error('Alguno de los valores ingresados (o ambos), no son números.');
        return 'No se pudo calcular.';
    } else {
        let suma = Sumar(num1, num2);
        let promedio = Dividir(suma, 2);
        return 'El promedio es: ' + promedio;
    }
}