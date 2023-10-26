window.addEventListener("DOMContentLoaded", function () {
  //Registramos nuestro serviceWorker
  if ("serviceWorker" in this.navigator) {
    this.navigator.serviceWorker
      .register("sw.js")
      .then((res) => console.log("SW. Se registro correctamente"))
      .catch((res) => console.log("SW. No se pudo registrar"));
  }
});

let numero = 0;
let array_favoritos = [];
if (localStorage.getItem("favoritos") != null) {
  array_favoritos = JSON.parse(localStorage.favoritos);
}

function consultaPeli() {
  let peliculas = "";
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es`
  )
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      datos.results.forEach((pelicula) => {
        peliculas += `
            <div class="pelicula">
              <img class="poster" src="https://image.tmdb.org/t/p/w500/${
                pelicula.poster_path
              }">
              <h3 class="titulo">${pelicula.title} </h3>
              ${
                array_favoritos.indexOf(numero) != -1
                  ? `<button class="btn btn-danger" onclick="AgregarQuitarPeli(this,${numero})"><i class="fas fa-heart"></i></button>`
                  : `<button class="btn btn-danger" onclick="AgregarQuitarPeli(this,${numero})"><i class="far fa-heart"></i></button>`
              }
              <button class="btn btn-primary" onclick="consultarUnaPeli(${numero})" data-bs-toggle="modal" data-bs-target="#exampleModal">Detalle</button>
            </div>
            
          `;
        // la variable numero asigna la posición dentro de la array: datos.results
        numero++;
      });
      document.getElementById("contenedor").innerHTML = peliculas;
    });
}

//preguntamos si quiere recibir notificaciones

if (window.Notification) {
  if (Notification.permission !== "denied") {
    setTimeout(function () {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("El usuario acepto, realizo la subscripcion al servidor");
        } else {
          console.log(
            "El usuario no acepto, no realizo la subscripcion al servidor"
          );
        }
      });
    }, 5000);
  }
}

//deteccion del estado de la conexion
var encabezado = document.querySelector(".encabezado");
var contacto = document.querySelector("#contacto");

let OnLineStatus = () => {
  console.log(navigator.onLine);
  if (navigator.onLine) {
    encabezado.style.backgroundColor = "black";
    contacto.style.display = "block";
    console.log("Estamos online");
  } else {
    encabezado.style.backgroundColor = "blue";
    contacto.style.display = "none";
    console.log("Estamos offline");
  }
};
OnLineStatus();
window.addEventListener("online", OnLineStatus);
window.addEventListener("offline", OnLineStatus);

function AgregarQuitarPeli(boton, numero) {
  if (array_favoritos.indexOf(parseInt(numero)) != -1) {
    array_favoritos.splice(array_favoritos.indexOf(parseInt(numero)), 1);
    boton.className = "btn btn btn-danger";
    boton.innerHTML = '<i class="far fa-heart"></i>';
  } else {
    array_favoritos.push(parseInt(numero));
    boton.className = "btn btn-danger";
    boton.innerHTML = '<i class="fas fa-heart"></i>';
  }
  localStorage.setItem("favoritos", JSON.stringify(array_favoritos));
}

function consultarUnaPeli(numero) {
  let titulo = "";
  let detalle = "";

  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es`
  )
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      titulo = ` 
                  <div>
                  <h3>${datos.results[numero].title}</h3>
                  </div>`;

      detalle = `
                  <div>
                    <p>${datos.results[numero].overview}</p>
                    <p>Titulo original: <b>${datos.results[numero].original_title}</b></p>
                    <p>Fecha estreno: ${datos.results[numero].release_date}</p>
                    <P>Valoración: ${datos.results[numero].vote_average}</P>
                  </div>`;

      document.getElementById("titulo").innerHTML = titulo;
      document.getElementById("detalle").innerHTML = detalle;
    });
}
consultaPeli();

//form local storage

function Enviar() {
  //Me fijo si existe la clave agenda en mi localStorage
  console.log(localStorage.getItem("agenda"));
  let array_para_data = [];
  if (localStorage.getItem("agenda") == null) {
    //creo un array vacio porque no tengo nada en agenda
    array_para_data = [];
  } else {
    //Traigo los objetos de contactos que tengo en agenda.
    array_para_data = JSON.parse(localStorage.agenda);
  }

  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let telefono = document.querySelector("#telefono").value;
  let comentario = document.querySelector("#comentario").value;

  //Creo un objeto con los datos a guardar
  dataNueva = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    comentario: comentario,
  };
  array_para_data.push(dataNueva);
  localStorage.setItem("agenda", JSON.stringify(array_para_data));
  Mostrar();
}

function Mostrar() {
  let recuperar_localStorage = JSON.parse(localStorage.getItem("agenda"));
  let outerHTML = "";
  for (let key in recuperar_localStorage) {
    outerHTML +=
      '<p class="datos" ><span>' +
      recuperar_localStorage[key].nombre +
      "</span><span> " +
      recuperar_localStorage[key].apellido +
      "</span><span> " +
      recuperar_localStorage[key].telefono +
      "</span><span>" +
      recuperar_localStorage[key].comentario +
      "</span></p>";
  }

  document.querySelector("#mostrar").innerHTML = outerHTML;

  document.querySelector("#nombre").value = "";
  document.querySelector("#apellido").value = "";
  document.querySelector("#telefono").value = "";
}

//BOTON COMPARTIR
document.querySelector(".share").addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "PWA APIS",
      text: "Ejemplo de api share",
      url: "http://localhost/davinci/davinci%202022/segundo%20cuatri/aplicaciones%20web%20progresivas/app-COPIA/index.html",
    });
  }
});
