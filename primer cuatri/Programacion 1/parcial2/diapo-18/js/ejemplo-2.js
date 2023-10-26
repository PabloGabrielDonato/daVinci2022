const d = document;

let txt         = d.querySelector('[type=text]');
let btnGuardar  = d.querySelector('[value=Guardar]');
let btnCargar   = d.querySelector('[value=Cargar]');
let btnLimpiar  = d.querySelector('[value=Limpiar]');
let msj         = d.querySelector('main > p');

let valor = '';

btnCargar.addEventListener('click', (e) => {
    if (localStorage.valor) {
        // Si existe el valor, se lee del localStorage:
        valor = JSON.parse(localStorage.valor);
    } else {
        // Si no existe el valor, se crea en el localStorage:
        localStorage.valor = JSON.stringify(valor);
    }
    // Salida:
    msj.innerHTML = valor;
});

btnGuardar.addEventListener('click', (e) => {
    let texto = txt.value.trim();
    if (texto.length != 0) {
        localStorage.valor = JSON.stringify(texto);
    }
    msj.innerHTML = 'Valor guardado';
});

btnLimpiar.addEventListener('click', (e) => {
    // Limpiar todo el localStorage:
    // localStorage.clear();
    // Limpiar solamente valor:
    localStorage.removeItem('valor');
    msj.innerHTML = 'Limpieza realizada!';
});
