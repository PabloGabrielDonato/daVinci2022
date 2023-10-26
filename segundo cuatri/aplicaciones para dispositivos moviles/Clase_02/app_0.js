const imagen = document.querySelector('img');
const texto = document.querySelector('p');
imagen.addEventListener('click', function(){
    console.log('Seleccionado');
    texto.classList.toggle('oculto')

})

let mensaje = `El mensaje es ${ variable }`;