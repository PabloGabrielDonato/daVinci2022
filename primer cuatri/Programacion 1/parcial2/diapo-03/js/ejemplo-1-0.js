'use strict';

// Esto es una función, tema que veremos en breve:
const devolucionIsNaN = (valor, tipoDeDato = '') => {
    let r = '';
    r += `
    <li>
        El valor evaluado <strong>
        ${tipoDeDato == 'string' ? `'${valor}'` : valor}
        ${tipoDeDato ? `(${tipoDeDato})` : ''}
        </strong> devolverá <strong>${isNaN(valor)}</strong>.
    </li>`;
    document.write(r);
}