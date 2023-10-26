//definimos las variables de cache
const cacheName = "peliculas-files";
const assets = [
  "/",
  "bootstrap.min.css",
  "estilos.css",
  "js/main.js",
  "js/bootstrap.min.js",
  "index.html",
];

//Escuchamos el evento de instalacion
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

//escuchamos al evento fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    //debemos construir la respuesta a la peticion
    //paso 1: nos fijamos si la peticion tiene una coincidencia en cache
    caches.match(event.request).then((respuesta) => {
      //si tiene coincidencia devolvemos el recurso
      if (respuesta) {
        return respuesta;
      }
      //hago un clon de la peticionpara almacenar el recurso en el cache
      let requestToCache = event.request.clone();
      //hago una peticion al servidor del recurso deseado
      return fetch(requestToCache).then((respuesta) => {
        if (!respuesta || respuesta.status !== 200) {
          //Respuesta vacia o con un status distinto a 200
          return respuesta;
        }
        //si llego hasta aca es porque encontro el recurso en el servidor
        //paso3: hago un clon de la respuesta
        let responseToCache = respuesta.clone();
        caches.open(cacheName).then((cache) => {
          //almaceno en cache la peticion y la respuesta
          cache.put(requestToCache, responseToCache);
        });
        //por ultimo retorno la respuesta
        return respuesta;
      });
    })
  );
});
//evento push para recibir notificaciones y mostrarlas al usuario
self.addEventListener("push", (event) => {
  let title = event.data.text();
  let options = {
    body: "Nueva pelicula para ver",
    icon: "iconos/icono.png",
    vibrate: [500, 300, 500, 300, 300, 100],
    actions: [
      { action: 1, icon: "iconos/icono.png", title: "Ver ahora" },
      { action: 2, icon: "iconos/icono.png", title: "Ver luego" },
    ],
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
//evento notificationclick para accionar en base al click que haga el usuario sobre la notificacion
self.addEventListener("notificationclick", (event) => {
  if (event.action == 1) {
    console.log("el usuario quiere ver ahora");
    clients.openWindow(
      "http://localhost/davinci/davinci%202022/segundo%20cuatri/aplicaciones%20web%20progresivas/app-COPIA/index.html?id=" +
        4
    );
  } else if (event.action == 2) console.log("el usuario quiere ver luego");
  event.notification.close();
});
