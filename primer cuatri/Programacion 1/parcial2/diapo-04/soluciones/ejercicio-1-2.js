'use strict';

const MostrarCarreraConDW = function() {
    let m = 'Cursa la carrera de ';
    if (!siglas) { // if (siglas == null) {
        m = 'Primero debe ingresar las siglas';
    } else {
        switch(siglas.toLowerCase()) {
            case 'dw':
                m += 'Diseño Web';
                break;
            case 'dm':
                m += 'Diseño Multimedial';
                break;
            case 'dg':
                m += 'Diseño Gráfico';
                break;
            default:
                m = 'La siga no es válida';
        }
        // Una vez armado el mensaje, reinicio:
        suglas = null;
    }
    document.write(m);
}