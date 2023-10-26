"use strict"
/* 
Maneras de declarar variables.
1. var
    Es la forma tradicional de declarar variables.
    Declara la variable en el ambito en el cual se encuentra.
    El ambito de su existencia es "function-scope"

2. let
    Es una forma "nueva" de declarar variables.
    declara la variable en el ambito en el cual se encuentra.
    El ambito de su existencia es "block-scope"

3. const
    Es una forma "nueva" de declarar variables.
    declara la variable en el ambito en el cual se encuentra.
    El ambito de su existencia es "block-scope"
    No podemos cambiar su valor luego de su inicializacion.

*/
    
var lang = "JavaScript";
{
    var lang = "PHP";
}
console.log("Mi lenguahe facvorito es:"+lang);



/* 
    Bloque (block)
{}
*/