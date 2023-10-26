'use strict';

// Paises y provincias:
let datos = {
    Argentina: ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'],
    Chile: ['Arica', 'Parinacota', 'Iquique', 'El Tamarugal', 'Antofagasta', 'El Loa', 'Tocopilla', 'Chañaral', 'Copiapó', 'Huasco', 'Choapa', 'Elqui', 'Limarí', 'Isla de Pascua', 'Los Andes', 'Petorca', 'Quillota', 'San Antonio', 'San Felipe de Aconcagua', 'Valparaiso', 'Chacabuco', 'Cordillera', 'Maipo', 'Melipilla', 'Santiago', 'Talagante', 'Cachapoal', 'Cardenal Caro', 'Colchagua', 'Cauquenes', 'Curicó', 'Linares', 'Talca', 'Arauco', 'Bio Bío', 'Concepción', 'Ñuble', 'Cautín', 'Malleco', 'Valdivia', 'Ranco', 'Chiloé', 'Llanquihue', 'Osorno', 'Palena', 'Aisén', 'Capitán Prat', 'Coihaique', 'General Carrera', 'Antártica Chilena', 'Magallanes', 'Tierra del Fuego', 'Última Esperanza'],
    Uruguay: ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres'],
};

// Document:
const d = document;

let selPais = document.querySelector('select[name=pais]');
let selProv = document.querySelector('select[name=prov]');

// Declaramos una variable option
let option;

// Recorremos el array y cargamos el select de paises con las opciones de paises que nos entrega el array
for (let pais in datos) {
    option = d.createElement('option');
    option.value = pais;
    option.innerHTML = pais;
    selPais.append(option);
}

let CargarProvincias = (pais) => {
    selProv.innerHTML = '';
    for (let provincia of datos[pais]) {
        option = d.createElement('option');
        option.value = provincia;
        option.innerHTML = provincia;
        selProv.append(option);

    }
}

CargarProvincias('Argentina');
selPais.addEventListener('change', (e) => {
    console.log(e.target.value);
    CargarProvincias(e.target.value);
})


let nombre = d.querySelector('input[name=nombre]');

nombre.addEventListener('blur', (e) => {
    if (e.target.value.length <3) {
        e.target.setCustomValidity('El nombre debe tener al menos 3 caracteres');
    } else {
        e.target.setCustomValidity('');
    }

});


