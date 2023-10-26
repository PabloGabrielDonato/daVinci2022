window.addEventListener('DOMContentLoaded', function(){
    const btnTraer = document.getElementById('btnTraer');

    btnTraer.addEventListener('click', function(){

        fetch('https://rickandmortyapi.com/api/character')
        .then(respuesta => respuesta.json())
        .then(data => {
            //ya tenemos la respuesta en json
            let dvRespuesta = document.getElementById('dvRespuesta')

            let html = '<ul>con fetch';
                for (let personaje of data.results){
                    html += ` <li>${ personaje.name}-${ personaje.status}</li>`
                    html += ` <li><img src="${ personaje.image}"></li>`
                    
                }
            html += '</ul>';
            dvRespuesta.innerHTML = html;
        })


        // // Paso 1: creamos la instancia del objeto XMLHttpRequest
        // const xhr = new XMLHttpRequest();

        // //Paso 2: configuramos la peticion con el metodo open
        // // Recordemos que las urls relativas en JS, son en relacion al archivos que incluye el script
        // xhr.open('GET', 'https://rickandmortyapi.com/api/character');

        // //Paso 3: asociamos el evento onreadystatechange

        // xhr.addEventListener('readystatechange', function(){

        //     //Paso 3.1: verificamos el readyState, hasta que sea 4(DONE)

        //     if (xhr.readyState===4){
        //         //Paso 3.2: verificamos que el estatus sea 200(OK)

        //         if (xhr.status===200){

        //             let data = JSON.parse(xhr.responseText);

        //         }
        //     }
        // })

        // //paso 4: enviamos la peticion
        // xhr.send(null);
    })
})