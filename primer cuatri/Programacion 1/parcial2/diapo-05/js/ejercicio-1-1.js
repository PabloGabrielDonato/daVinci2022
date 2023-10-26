'use strict';


const CalcularImpuesto = precio => 'Hola';



// Creación de la función:
const CalcularImpuesto2 = function (precio = null, impuesto = 21) {
	//Verificar el precio
	if (precio == null) {
		// Valido que el precio no sea vacio
		console.error('No ingresó el precio');
	} else if (isNaN(precio)) {
	    // Valido que el precio sea un numero
		console.error('No ingresó un precio válido');
	} else if (parseInt(precio) != precio) {
	    // Valido que el precio sea un numero
		console.error('No ingresó un precio válido');
	} else if (isNaN(impuesto)) {
		console.error('No ingresó un impuesto válido');  
	} else {
		//Analizo el impuesto y precio total
		//Defino el impuesto a utilizar
		impuesto = impuesto >= 0 && impuesto <=100 ? impuesto : 21;  

		//Tomo la parte entera del precio
		precio = parseInt(precio);

		//Calculamos el IVA
		let iva  = precio * impuesto / 100;

		//Calculamos el total
		let total = precio + iva;

		//Armo el mensaje
		let mensaje = `Precio: ${precio} – IVA: ${impuesto}% – Total: ${total}`;
		return mensaje ;
	}
}

/*
function CalcularImpuesto (precio = null, impuesto = 21) {

}*/


// No recibe argumento (no debería andar)
console.log(`1. CalcularImpuesto()`, CalcularImpuesto());

// Recebe un argumento para precio que no sirve (no debería andar)
console.log(`2. CalcularImpuesto(NaN)`, CalcularImpuesto(NaN));

// Recibe un argumento para precio que no sirve (no debería andar), no importa lo que reicba el parámetro impuesto
console.log(`3. CalcularImpuesto(NaN, NaN)`, CalcularImpuesto(NaN, NaN));

// Recibe un argumento para precio que no sirve (no debería andar), no importa lo que reicba el parámetro impuesto
console.log(`4. CalcularImpuesto(NaN, 30)`, CalcularImpuesto(NaN, 30));

// Recibe un argumento válido para precio (anda) y como el argumento para impuesto es inválido, debería quedar en 21 (valor por defecto)
console.log(`5. CalcularImpuesto(1000, NaN)`, CalcularImpuesto(1000, NaN));

// Recibe un argumento válido para precio (anda) y como el argumento para impuesto es inválido, debería quedar en 21 (valor por defecto)
console.log(`6. CalcularImpuesto(1000, 120)`, CalcularImpuesto(1000, 120));

// Recibe un argumento válido para precio (anda), impuesto queda con su valor por defecto (21)
console.log(`7. CalcularImpuesto(1000)`, CalcularImpuesto(1000));

// Recibe un argumento potencialmente válido para precio (para que ande nuestra función debería convertir a número el precio, ¿lo implementamos?), impuesto queda con su valor por defecto (21)
console.log(`8. CalcularImpuesto(' ')`, CalcularImpuesto(' '));

// Recibe un argumento potencialmente válido para precio (para que ande nuestra función debería convertir a número el precio, ¿lo implementamos?), impuesto queda con su valor por defecto (21)
console.log(`9. CalcularImpuesto('1000')`, CalcularImpuesto('1000'));

// Recibe dos argumentos válidos (anda)
console.log(`10. CalcularImpuesto(1000, 30)`, CalcularImpuesto(1000, 30));



// Generalmente se suele probar la función "a mano":


// Una vez testeada la función, ejecutar el comando de limpieza de consola:
// console.clear();


// let valor = parseInt(prompt('Ingrese el precio'));
// let iva = parseInt(prompt('Ingrese el porcentaje de IVA'));
// let mensaje = CalcularImpuesto(valor, iva);
// console.log(mensaje);

// let mensaje = CalcularImpuesto(
//     parseInt(prompt('Ingrese el precio')),
//     parseInt(prompt('Ingrese el porcentaje de IVA'))
// );
// console.log(mensaje);

// console.log(CalcularImpuesto(
//     parseInt(prompt('Ingrese el precio')),
//     parseInt(prompt('Ingrese el porcentaje de IVA'))
// ));