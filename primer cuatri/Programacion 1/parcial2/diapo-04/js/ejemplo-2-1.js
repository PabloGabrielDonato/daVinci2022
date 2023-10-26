'use strict';

// Declaración de variables:
let nombre = 'Alejandro',
    apellido = 'Potente';

// Creación de la función:
function Saludar() {
    let nombre = 'Mariana';
    console.log(`Hola ${nombre} ${apellido}`);
}

function SaludarOtra() {
    console.log(`Hola ${nombre} ${apellido}`);
}

Saludar();
SaludarOtra();


/*
    1. var
       function-scope
    2. let
       block-scope
    3. const
       block-scope
       No se puede sobreescribir luego de su inicializacion.
*/

const lang ="PHP";

{
    lang = "JS";
}

console.log(lang); 








