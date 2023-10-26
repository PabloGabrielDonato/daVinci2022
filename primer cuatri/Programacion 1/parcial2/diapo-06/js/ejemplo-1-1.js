'use strict';

const Test = () => { return 'Sin parámetros'; }
console.log(Test());

const Test1 = dato => { return 'El dato es: ' + dato; }
console.log(Test1(4));

const Test2 = dato => 'El dato es: ' + dato;
console.log(Test2(4));

/*
const CalculaPerimetroDeUnCuadrado = function (lado) {
    return lado * 4;
}

// Función flecha básica:
const CalculaPerimetroDeUnCuadrado2 = (lado) => {
    return lado * 4;
}

// Si la función solamente tiene un y solo un parámetro, se pueden omitir los paréntesis.
// Si no tiene parametros o tienen mas de 1, sí o sí se deben colocar los paréntesis.
const CalculaPerimetroDeUnCuadrado3 = lado => {
    return lado * 4;
}

// Si lo unico que hace la función es retornar un valor (sea de un calculo o un valor en si mismo), se pueden omitir las llaves y el return...
const CalculaPerimetroDeUnCuadrado4 = lado => lado * 4;

// Se pueden combinar ambas funcionalidades
const CalcularPerimetroRectangulo = (lado1, lado2) => (lado1 + lado2) * 2;
*/