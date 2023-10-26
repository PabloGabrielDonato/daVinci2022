'use strict';

// Creación de la función:
const CalcularImpuesto = function (precio = null, impuesto = 21) {
    // console.log({precio, impuesto});
    // 1ro - Analizamos si llega un argumento válido o no para el parámetro precio:
    if (precio == null) {
        // No llegó nada
        console.log('%cNo llegó nada', 'color: red; background: pink;');
        // "Matamos" a la función con un return:
        // return 'Matamos a la función';
        return 'Error 1';
    }

    // Una vez que sabemos que recibimos algo, deberemos convertir el valor de precio a un número:
    precio = parseFloat(precio);

    // 2do - Analizamos si llega un argumento válido o no para el parámetro precio:
    if (isNaN(precio)) {
        // Lo que llegó es un NAN
        console.log('%cLo que llegó es un NAN', 'color: red; background: pink;');
        // "Matamos" a la función con un return:
        // return 'Matamos a la función';
        return 'Error 2';
    }

    // Si llegamos hasta aquí, deberemos devolver un valor válido ...

    // ... pero primero analicemos el argumento que llega (o no) al párámetro impuesto:
    console.log({impuesto});

    // Convertimos el valor de impuesto a un número:
    impuesto = parseFloat(impuesto);

    // Si el usuario envía un argumento al parámetro impuesto, por más que no sirva, lo va a pisar, por lo tanto deberemos forzar a que vuelva a tener un valor por defecto
    if (!(impuesto >= 0 && impuesto <= 100)) {
        // El impuesto no es válido, forzamos a que sea un valor por defecto, en este caso, 21:
        console.log('%cEl argumento de impuesto no servía, vuelve a 21', 'color: brown; background: lightyellow;');
        impuesto = 21;
    }

    let iva = precio * impuesto / 100;
    let total = precio + iva;

    // Calculamos, armamos mensaje y retornamos:
    // let m = `Precio: ${precio} – IVA: ${impuesto}% – Total: ${total}`;
    // return m;
    return `Precio: ${precio} – IVA: ${impuesto}% – Total: ${total}`;
    // return total;
}

// Generalmente se suele probar la función "a mano":

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

// Una vez testeada la función, ejecutar el comando de limpieza de consola:
console.clear();


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