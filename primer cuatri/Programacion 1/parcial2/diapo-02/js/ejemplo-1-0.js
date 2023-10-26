'use strict';

// Esto es una función, tema que veremos en breve:
const elResultadoLogico = (valor, tipoDeDato = '') => {
    let r = '';
    r += `
    <li>
        El valor evaluado <strong>
        ${tipoDeDato == 'string' ? `'${valor}'` : valor}
        ${tipoDeDato ? `(${tipoDeDato})` : ''}
        </strong> se resolverá como <strong>${valor ? 'true' : 'false'}</strong>.
    </li>`;
    document.write(r);
}