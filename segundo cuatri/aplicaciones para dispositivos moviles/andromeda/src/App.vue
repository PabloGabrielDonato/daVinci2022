<template>
  <div id="app">


    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img src="@/assets/logo/icono.png" alt="Logo de Andromeda" class="d-inline-block align-text-top"/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/" class="nav-link" id="tienda">Tienda</router-link>
            <router-link to="/nosotros" class="nav-link" id="nosotros">Nosotros</router-link>
            <router-link to="/carrito" class="nav-link" id="carrito">Carrito</router-link>
            <router-link to="/contacto" class="nav-link" id="contacto">Contacto</router-link>
          </div>
        </div>
      </div>
    </nav>




    <router-view v-bind:productos="productos" v-bind:carrito="carrito" />


  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      productos: [
        {
          id: 1,
          nombre: "FIGURA BANDAI | Caballeros del Zodiaco Aioria",
          descripcion:
            'Bandai de Aioria, perteneciente a la antigua serie de manga y anime "Caballeros del Zodíaco".',
          cantidad: 1,
          precio: 5300,
          imagen: require("@/assets/bandai-caballeros-del-zodiaco-leo.jpg"),
          categoria: "FIGURA BANDAI",
        },
        {
          id: 2,
          nombre: "FIGURA BANDAI | Caballeros del Zodiaco Seiya",
          descripcion:
            'Bandai de Seiya, perteneciente a la antigua serie de manga y anime "Caballeros del Zodíaco".',
          cantidad: 1,
          precio: 5500,
          imagen: require("@/assets/bandai-caballeros-del-zodiaco-sagitario.jpg"),
          categoria: "FIGURA BANDAI",
        },
        {
          id: 3,
          nombre: "FIGURA BANDAI | Caballeros del Zodiaco Shaka",
          descripcion:
            'Bandai de Virgo, perteneciente a la antigua serie de manga y anime "Caballeros del Zodíaco".',
          cantidad: 1,
          precio: 5300,
          imagen: require("@/assets/bandai-caballeros-del-zodiaco-virgo.jpg"),
          categoria: "FIGURA BANDAI",
        },
        {
          id: 4,
          nombre: "FIGURA FUNKO POP | Naruto Uzumaki #823",
          descripcion:
            'Funko Pop de Naruto Uzumaki, perteneciente a la popular serie de manga y anime "Naruto Shippuden".',
          cantidad: 1,
          precio: 3600,
          imagen: require("@/assets/funko-pop-naruto-uzumaki.jpg"),
          categoria: "FIGURA FUNKO POP",
        },
        {
          id: 5,
          nombre: "FIGURA FUNKO POP | Itachi Uchiha #790",
          descripcion:
            'Funko Pop de Itachi Uchiha, perteneciente a la popular serie de manga y anime "Naruto Shippuden".',
          cantidad: 1,
          precio: 3400,
          imagen: require("@/assets/funko-pop-itachi-uchiha.jpg"),
          categoria: "FIGURA FUNKO POP",
        },
        {
          id: 6,
          nombre: "FIGURA FUNKO POP | Kakashi Hatake #1103",
          descripcion:
            'Funko Pop de Kakashi Hatake, perteneciente a la popular serie de manga y anime "Naruto Shippuden".',
          cantidad: 1,
          precio: 3200,
          imagen: require("@/assets/funko-pop-kakashi-hatake.jpg"),
          categoria: "FIGURA FUNKO POP",
        },
        {
          id: 7,
          nombre: "FIGURA FUNKO POP | Shikamaru Nara #933",
          descripcion:
            'Funko Pop de Shikamaru Nara, perteneciente a la popular serie de manga y anime "Naruto Shippuden".',
          cantidad: 1,
          precio: 3200,
          imagen: require("@/assets/funko-pop-shikamaru-nara.jpg"),
          categoria: "FIGURA FUNKO POP",
        },
        {
          id: 8,
          nombre: "FIGURA FUNKO POP | Madara Uchiha #722",
          descripcion:
            'Funko Pop de Madara Uchiha, perteneciente a la popular serie de manga y anime "Naruto Shippuden".',
          cantidad: 1,
          precio: 3200,
          imagen: require("@/assets/funko-pop-madara-uchiha.jpg"),
          categoria: "FIGURA FUNKO POP",
        },
        {
          id: 9,
          nombre: "FIGURA Q POSKET | Inosuke Hashibira #22468",
          descripcion:
            'Q Posket de Inosuke Hashibira, perteneciente a la popular serie de manga y anime "Kimetsu No Yaiba".',
          cantidad: 1,
          precio: 6500,
          imagen: require("@/assets/q-posket-inosuke-hashibira.jpg"),
          categoria: "FIGURA Q POSKET",
        },
        {
          id: 10,
          nombre: "FIGURA Q POSKET | Kyojuro Rengoku #22478",
          descripcion:
            'Q Posket de Kyojuro Rengoku, perteneciente a la popular serie de manga y anime "Kimetsu No Yaiba".',
          cantidad: 1,
          precio: 6500,
          imagen: require("@/assets/q-posket-kyojuro-rengoku.jpg"),
          categoria: "FIGURA Q POSKET",
        },
        {
          id: 11,
          nombre: "FIGURA Q POSKET | Tanjiro Kamado #22823",
          descripcion:
            'Q Posket de Tanjiro Kamado, perteneciente a la popular serie de manga y anime "Kimetsu No Yaiba".',
          cantidad: 1,
          precio: 6500,
          imagen: require("@/assets/q-posket-tanjiro-kamado.jpg"),
          categoria: "FIGURA Q POSKET",
        },
        {
          id: 12,
          nombre: "FIGURA Q POSKET | Tengen Uzui #22691",
          descripcion:
            'Q Posket de Tengen Uzui, perteneciente a la popular serie de manga y anime "Kimetsu No Yaiba".',
          cantidad: 1,
          precio: 6500,
          imagen: require("@/assets/q-posket-tengen-uzui.jpg"),
          categoria: "FIGURA Q POSKET",
        },
        {
          id: 13,
          nombre: "FIGURA Q POSKET | Kanao Tsuyuri #22412",
          descripcion:
            'Q Posket de Kanao Tsuyuri, perteneciente a la popular serie de manga y anime "Kimetsu No Yaiba".',
          cantidad: 1,
          precio: 6500,
          imagen: require("@/assets/q-posket-kakao-tsuyuri.jpg"),
          categoria: "FIGURA Q POSKET",
        }
      ],
      carrito: [],
    };
  },
  created() {
    this.leer();
  },
  updated() {
    this.guardar();
  },
  methods: {
    leer() {
      if (localStorage.getItem("listaProductos") != null) {
        this.productos = JSON.parse(localStorage.getItem("listaProductos"));
      }
    },
    guardar() {
      localStorage.setItem("listaProductos", JSON.stringify(this.productos));
    },
  },
};
</script>



<style>
template {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    background-color: lightgray;
}

/* MENU DE NAVEGACION */
.navbar {
  background-color: #202d77;
}
.navbar a{
  color:white;
  font-size: 1.2rem;
  font-weight: 600;
}
.navbar a:hover{
  color:#FF6D0D;
}
.navbar a:focus{
  color:#999999;
}
.navbar-toggler{
  background-color: #FF6D0D!important;
}
.navbar-toggler-icon{
  background: url('assets/iconografia/menu-hamburguesa.png');
}
#tienda{
  padding-left: 1.5em;
  background: url('@/assets/iconografia/tienda.png') no-repeat 0.4em center;
}
#tienda:hover{
  background: url('@/assets/iconografia/tienda-h.png') no-repeat 0.4em center;
  transition: 200ms ease-in-out;
}
#tienda:focus{
  background: url('@/assets/iconografia/tienda-f.png') no-repeat 0.4em center;
}
#nosotros{
  padding-left: 1.5em;
  background: url('@/assets/iconografia/nosotros.png') no-repeat 0.4em center;
}
#nosotros:hover{
  background: url('@/assets/iconografia/nosotros-h.png') no-repeat 0.4em center;
  transition: 200ms ease-in-out;
}
#nosotros:focus{
  background: url('@/assets/iconografia/nosotros-f.png') no-repeat 0.4em center;
}
#carrito{
  padding-left: 1.5em;
  background: url('@/assets/iconografia/carrito.png') no-repeat 0.4em center;
}
#carrito:hover{
  background: url('@/assets/iconografia/carrito-h.png') no-repeat 0.4em center;
  transition: 200ms ease-in-out;
}
#carrito:focus{
  background: url('@/assets/iconografia/carrito-f.png') no-repeat 0.4em center;
}
#contacto{
  padding-left: 1.5em;
  background: url('@/assets/iconografia/mail.png') no-repeat 0.4em center;
}
#contacto:hover{
  background: url('@/assets/iconografia/mail-h.png') no-repeat 0.4em center;
  transition: 200ms ease-in-out;
}
#contacto:focus{
  background: url('@/assets/iconografia/mail-f.png') no-repeat 0.4em center;
}
</style>