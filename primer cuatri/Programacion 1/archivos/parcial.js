'use strict';



let totalDiscos = [];
let chekCodigo = [];
let cantDiscos = 0;


const Cargar = () => {

    let nombre;
    let autor;
    let codigo;
    let pista;
    let duracion;
    let marca;

    do {
        let disco = [];

        do {
            nombre = prompt('Ingrese Disco');
            if (nombre == '') {
                alert('Debe ingresar un NOMBRE al disco')
            }
        }
        while (!isNaN(nombre));

        do {
            autor = prompt('Ingrese Autor');
            if (autor == '') {
                alert('Debe ingresar un AUTOR/BANDA')
            }
        } while (!isNaN(autor));

        do {
            codigo = prompt('Ingrese Codigo');
            if (codigo >= 1 & codigo <= 999) {
                if (chekCodigo.indexOf(codigo) < 0) {
                    chekCodigo.push(codigo);
                    marca = 1
                } else {
                    alert("El código ya existe")
                    marca = 0;
                }
            } else { alert("El número debe estar ente 1 y 999") };
        } while (marca != 1);



        let pistas = [];

        do {

            do {
                pista = prompt('Ingrese Pista.');
                if (pista == '') {
                    alert('Debe ingresar un NOMBRE a la PISTA')
                }
            } while (!isNaN(pista))

            do {
                duracion = parseInt(prompt('Ingrese duracion.'));
                if (duracion >= 0 & duracion <= 7200) {
                    marca = 1
                } else {
                    confirm('El valor de duración debe estar entre 0 y 7200 segundos')
                    marca = 0;
                }
            } while (marca != 1);


            pistas.push(pista, duracion);
        }
        while (confirm('¿Desea ingresar mas Pistas?'))


        disco['Nombre'] = nombre; 
        disco['Autor'] = autor; 
        disco['Codigo'] = codigo;
        disco['Pista'] = pistas; 



        totalDiscos.push(disco);                    
        console.log(totalDiscos);

        cantDiscos++;

    }
    while (confirm('Desea ingresar otro disco?'))
}



const Mostrar = () => {

    let html = '';


    html += `<p style="font-weight:900;">Cantidad de discos:  ${cantDiscos} </p>`;
    for (let disco of totalDiscos) {
        console.log(disco);

        let acum = 0;
        let cont = 0;


        html += `<p>Nombre del disco: ${disco['Nombre']}</p>`;
        html += `<p>Autor del disco: ${disco['Autor']}</p>`;
        html += `<p>Código del disco: ${disco['Codigo']}</p>`;
        html += `<ul>`;

        for (let item of disco['Pista']) 


        {   if(!isNaN(item)){
            acum += item;
            cont++;
        }


            if (item >= 180) {
                html += `<li style="color:red;">${item}</li>`;
            } else {
                html += `<li style="color:black;">${item}</li>`;
            }

        }
        html += `<li>Cantidad de pistas: ${cont}</li>`
        html += `<li>Tiempo de duración: ${acum}</li>`
        html += `<li>Promedio de duración: ${acum / cont}</li>`
        html += `</ul>`;
    }

    document.getElementById('info').innerHTML = html;

}