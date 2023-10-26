'use strict';
let mensaje = '', lado1, lado2, lado3;

//Ingreso de datos

lado1 = parseInt(prompt('Ingrese el lado 1'));
lado2 = parseInt(prompt('Ingrese el lado 2'));
lado3 = parseInt(prompt('Ingrese el lado 3'));

 
if(lado1 == lado2)
{
    if (lado2 == lado3)
    {
        mensaje = "El triángulo es equilatero.";
    }
    else
    {
        mensaje = "El triángulo es isosceles.";
    }
}
else{
    if (lado1 != lado3)
    {
        if (lado2 != lado3)
        {
            mensaje = "El triánglo es escaleno"
        }
        else
        {
            mensaje = "El triánglo es isosceles"
        }
    }
    else {
        mensaje = "El triángulo es isosceles.";
    }
}
    
    
SEGUIR VIENDO CLASE 18-3 MINUTO 1:19:24

        