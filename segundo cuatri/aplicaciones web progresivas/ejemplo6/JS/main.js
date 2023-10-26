window.addEventListener('DOMContentLoaded', function(){
    const formProducto = document.getElementById('form-producto');
    const inputNombre = document.getElementById('nombre');
    const inputPrecio = document.getElementById('precio');
    const inputMarca = document.getElementById('marca');
    
    formProducto.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('envio del form')
        const data = {
            nombre: inputNombre.value,
            precio: inputPrecio.value,
            marca: inputMarca.value
        };

    
        fetch('api/guardar-producto.php',
        {
            method: 'POST', body: JSON.stringify(data) })
        .then(respuesta => respuesta.text())
        .then(data => {
            //ya tenemos la respuesta en json
            let dvRespuesta = document.getElementById('dvRespuesta')
            dvRespuesta.innerHTML = data;
        })
    })
})