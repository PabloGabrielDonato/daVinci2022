'use strict';

// Valores solicitados en ejemplo-1-0.js

// Reinicio m para que no se concatenen los mensajes
m = `el número ${n} es `;

// Condicional:
m += n == 0 ? 'cero (evidentemente, ¿no?)' :
     n % 2 == 0 ? 'par' :
     'impar';