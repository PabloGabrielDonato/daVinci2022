'use strict';

function Mostrar () {
    let siglaIngresada = 'dw';
    
    return ObtenerDias(siglaIngresada);
}



const ObtenerDias = function(sigla) {
    let dias;
    switch (sigla.toLowerCase()) {
        case 'dw':
            dias = 'Ma, Ju, Vi';
            break;
        case 'dm':
            dias = 'Lu, Mi, Vi';
            break;
        case 'dg':
            dias = 'Mi, Ju, Vi';
    }
    return dias;
}