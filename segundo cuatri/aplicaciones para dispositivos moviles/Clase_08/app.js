const app = new Vue({
  el: "#app",
  data: {
    lista: [
      {
        id: 1,
        like:false,
        nombre: "Gabinete MSI",
        precio: 2011,
        fotoUrl: "https://http2.mlstatic.com/D_NQ_NP_607721-MLA51719691865_092022-O.webp"
    },
    {
      id: 2,
      like:false,
      nombre: "Memoria RAM Vengeance RGB Pro gamer color negro 16GB",
      precio: 2011,
      fotoUrl: "https://http2.mlstatic.com/D_NQ_NP_797873-MLA47873778769_102021-O.webp"
    },
    {
      id: 3,
      like:false,
      nombre: "Nvidia Asus TUF Gaming GeForce GTX 16 Series GTX 1660 SUPER",
      precio: 2011,
      fotoUrl: "https://http2.mlstatic.com/D_NQ_NP_632567-MLA42136065705_062020-O.webp"
    },
    {
      id: 4,
      like:false,
      nombre: "Procesador Intel Core i7-10700",
      precio: 2011,
      fotoUrl: "https://http2.mlstatic.com/D_NQ_NP_929815-MLA42767633540_072020-O.webp"
    },
    {
      id: 5,
      like:false,
      nombre: "Monitor Gamer 24 Samsung Curvo Full Hd 144hz ",
      precio: 2011,
      fotoUrl: "https://http2.mlstatic.com/D_NQ_NP_690040-MLA51546834978_092022-O.webp"
    },
    {
      id: 6,
      like:false,
      nombre: "PlayStation 5 825GB",
      precio: 2011,
      fotoUrl: "https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp"
    },
        ],
      },
      methods: {
        leer: function () {
          this.lista = localStorage.getItem("productos");
        },
        guardar: function () {
          localStorage.setItem("productos", JSON.parse(this.lista));
        },
        

      },
    });
