'use strict';

// Document:
const d = document;

// Obtener párrafo:
let txt = d.querySelector('#cuenta');

// Tiempo:
let ahora = new Date();
let objetivo = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + 90, 0, 0, 0);
console.info('ahora:', ahora, '- objetivo:', objetivo);

// Variables para realizar cálculos de conversión:
let segundos = 1000, // los milisegundos de un segundo
    minutos = segundos * 60, // los segundos de un minuto
    horas = minutos * 60, // los minutos de una hora
    dias = horas * 24; // las horas de un día

const armarCuenta = (tiempoMilisegundos) => {
    // El tiempo en milisegundos divido por la cantidad de horas del día:
    let d = Math.floor(tiempoMilisegundos / dias);

    // El resto del tiempo en milisegundos dividido por las horas del día
    // (para dejar los milisegundos para horas, minutos, segundos),
    // divido por la cantidad de minutos de la hora:
    let h = Math.floor((tiempoMilisegundos % dias) / horas);

    // El resto del tiempo en milisegundos dividido por los minutos de la hora
    // (para dejar los milisegundos para minutos, segundos),
    // divido por la cantidad de segundos del minuto:
    let m = Math.floor((tiempoMilisegundos % horas) / minutos);

    // El resto de el tiempo en milisegundos dividido por los segundos del minuto
    // (para dejar los milisegundos para segundos),
    // divido por la cantidad de milisegundos del segundo:
    let s = Math.floor((tiempoMilisegundos % minutos) / segundos);

    // Armado:
    return `
    ${d < 10 ? '0' + d : d} días
    ${h < 10 ? '0' + h : h} horas
    ${m < 10 ? '0' + m : m} minutos
    ${s < 10 ? '0' + s : s} segundos
    `;
};

// Primer valor:
txt.innerHTML = armarCuenta(objetivo.getTime() - ahora.getTime());

// Cuenta regresiva:
let timer = setInterval(() => {
    // Actualización de la fecha actual cada 1000 milisegundos:
    let ahora = new Date();

    // Obtener la diferencia de milisegundos de las fechas:
    let diferencia = objetivo.getTime() - ahora.getTime();

    // Armado y salida:
    txt.innerHTML = armarCuenta(diferencia);

    // Verificación:
    if (diferencia <= 0) {
        clearInterval(timer);
    }
}, 1000);
