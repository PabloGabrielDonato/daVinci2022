<template>
  <div>
    <header>
      <h1>andromeda</h1>
    </header>
    <main>
      <p id="slogan">
        Las mejores <span>figuras</span> al mejor <span>precio</span>
      </p>

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner d-flex">
          <div class="carousel-item active">
            <picture>
              <source
                media="(min-width: 1400px)"
                srcset="@/assets/banner/xl/banner-q-posket.jpg"
              />
              <source
                media="(min-width: 1200px)"
                srcset="@/assets/banner/xl/banner-q-posket.jpg"
              />
              <source
                media="(min-width: 992px)"
                srcset="@/assets/banner/xl/banner-q-posket.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcset="@/assets/banner/xs/banner-q-posket.jpg"
              />
              <source
                media="(min-width: 576px)"
                srcset="@/assets/banner/xs/banner-q-posket.jpg"
              />
              <img
                class="img-fluid"
                src="@/assets/banner/xs/banner-q-posket.jpg"
                alt="Banner Q Posket con descuento en Andromeda Anime Merchandising"
              />
            </picture>
          </div>
          <div class="carousel-item">
            <picture>
              <source
                media="(min-width: 1400px)"
                srcset="@/assets/banner/xl/banner-bandai.jpg"
              />
              <source
                media="(min-width: 1200px)"
                srcset="@/assets/banner/xl/banner-bandai.jpg"
              />
              <source
                media="(min-width: 992px)"
                srcset="@/assets/banner/xl/banner-bandai.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcset="@/assets/banner/xs/banner-bandai.jpg"
              />
              <source
                media="(min-width: 576px)"
                srcset="@/assets/banner/xs/banner-bandai.jpg"
              />
              <img
                class="img-fluid"
                src="@/assets/banner/xs/banner-bandai.jpg"
                alt="Banner Bandai con descuento en Andromeda Anime Merchandising"
              />
            </picture>
          </div>
          <div class="carousel-item">
            <picture>
              <source
                media="(min-width: 1400px)"
                srcset="@/assets/banner/xl/banner-funko-pop.jpg"
              />
              <source
                media="(min-width: 1200px)"
                srcset="@/assets/banner/xl/banner-funko-pop.jpg"
              />
              <source
                media="(min-width: 992px)"
                srcset="@/assets/banner/xl/banner-funko-pop.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcset="@/assets/banner/xs/banner-funko-pop.jpg"
              />
              <source
                media="(min-width: 576px)"
                srcset="@/assets/banner/xs/banner-funko-pop.jpg"
              />
              <img
                class="img-fluid"
                src="@/assets/banner/xs/banner-funko-pop.jpg"
                alt="Banner Funko Pop con descuento en Andromeda Anime Merchandising"
              />
            </picture>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center">
        <div id="contenedor-busqueda">
          <h3 id="buscar">Buscar:</h3>
          <input
            type="text"
            v-model="filtrarProducto"
            v-on:keyup.enter="productosFiltrados(filtrarProducto)"
            placeholder="Buscar producto"
            id="input-busqueda"
          />
          <button v-on:click="productosFiltrados(filtrarProducto)">
            Buscar
          </button>
        </div>
      </div>


<!-- limpiar: si el array principal no esta (visible:false), que aparezca el boton -->
      <div id="contenedor-boton-limpiar">
        <button
          class="boton-limpiar"
          v-if="!visible" 
          v-on:click="limpiarFiltro"
        >
          Limpiar
        </button>
      </div>

      <h2 id="h2-especial">Categorías:</h2>
      <div id="contenedor-categorias">
        <ul>
          <li class="nav-item">
            <a v-on:click="categorias(1)" class="boton-categoria nav-link"
              >FIGURA BANDAI</a
            >
          </li>
          <li class="nav-item">
            <a v-on:click="categorias(2)" class="boton-categoria nav-link"
              >FIGURA FUNKO POP</a
            >
          </li>
          <li class="nav-item">
            <a v-on:click="categorias(3)" class="boton-categoria nav-link"
              >FIGURA Q POSKET</a
            >
          </li>
        </ul>
      </div>

      <div id="contenedor-productos" class="justify-content-center">
        <div class="productoContenedor d-flex">
          <div
            v-for="(producto, index) of lista"
            :key="index"
            class="
              producto
              card
              align-items-center
              col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2
            "
          >
            <img
              class="card-img-top img-fluid"
              v-bind:src="producto.imagen"
              v-bind:alt="producto.nombre"
            />

            <div class="card-body d-flex flex-wrap">
              <h3>{{ producto.nombre }}</h3>

              <p class="descripcionProducto" v-text="producto.descripcion"></p>

              <p class="precioProducto col-12">$ {{ producto.precio }}</p>

              <p class="categoriaProducto col-12">
                Categoría: {{ producto.categoria }}
              </p>

              <label for="input-cantidad-producto" class="categoriaProducto"
                >Cantidad:
              </label>
              <input
                id="input-cantidad-producto"
                class="cantidadProducto"
                v-model="cantidad"
                type="number"
                min="1"
              />

              <button
                v-on:click="agregarCarritoPadre(producto.nombre, cantidad)"
                class="col-12 boton-agregar"
              >
                Agregar a Carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      <Productos
        ref="producto"
        v-show="visible"
        v-bind:productos="productos"
        v-bind:carrito="carrito"
      ></Productos>

      <p id="productosTotales">Productos Totales: {{ productos.length }}</p>

      <h2 id="h2-especial">¿Querés agregar un producto nuevo?</h2>
      <div class="contenedor-boton-producto-nuevo">
        <button
          v-if="!form"
          v-on:click="agregarProducto"
          class="boton-producto-nuevo"
        >
          Agregar producto nuevo
        </button>
      </div>

      <div class="form contenedor-form-agregar" v-if="form">
        <h4>Ingresa los datos del producto</h4>
        <p>La imagen será predeterminada</p>
        <form class="form-agregar" action="#">
          <div class="inputs-agregar-nuevo w-100 agregar-nombre">
            <label for="name">Nombre<span>*</span></label>
            <input v-model="nombreForm" id="name" type="text" required />
          </div>

          <div class="inputs-agregar-nuevo w-100">
            <label for="desc">Descripción<span>*</span></label>
            <textarea v-model="descripcionForm" id="desc" required></textarea>
          </div>

          <div class="inputs-agregar-nuevo w-100 agregar-precio">
            <label for="price">Precio<span>*</span></label>
            <input
              v-model.number="precioForm"
              id="price"
              type="number"
              required
            />
          </div>

          <div class="inputs-agregar-nuevo w-100">
            <label for="categ">Categoría<span>*</span></label>
            <select v-model="categoriaForm" name="select" id="categ" required>
              <option value="FIGURA BANDAI">FIGURA BANDAI</option>
              <option value="FIGURA FUNKO POP">FIGURA FUNKO POP</option>
              <option value="FIGURA Q POSKET">FIGURA Q POSKET</option>
            </select>
          </div>

          <button
            class="boton-producto-nuevo"
            type="submit"
            v-on:click="guardarProducto"
          >
            Guardar Producto
          </button>
        </form>
      </div>

      <footer>
        <div class="row w-100 m-auto">
          <div
            class="
              col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6
              mt-3
            "
          >
            <h2>Materia</h2>
            <ul>
              <li>Aplicaciones Web Progresivas</li>
              <li>Diseño y Desarrollo Web</li>
            </ul>
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6
              mt-3
            "
          >
            <h2>Alumnos</h2>
            <ul>
              <li>Pablo Donato</li>
              <li>Agostina Michelis</li>
            </ul>
          </div>
        </div>
        <p>DWM3AH &#169; 2022</p>
      </footer>
    </main>
  </div>
</template>





<script>
import Productos from "@/components/Productos.vue";

export default {
  name: "tienda",
  components: {
    Productos,
  },
  props: ["productos", "carrito"],
  data: () => ({
    lista: [],
    form: false,
    nombreForm: "",
    descripcionForm: "",
    precioForm: 0,
    categoriaForm: "",
    formEdit: false,
    limpiar: false,
    visible: true,
    cantidad: 1,
    filtrarProducto: "",
  }),
  methods: {
    agregarCarritoPadre(nombre, cantidad) {
      this.$refs.producto.agregarCarrito(nombre, cantidad);
    },
    agregarProducto() {
      this.form = true;
    },
    guardarProducto() {
      this.productos.push({
        id: this.productos.length + 1,
        nombre: this.nombreForm,
        descripcion: this.descripcionForm,
        cantidad: 1,
        precio: this.precioForm,
        imagen: require("@/assets/image-not-found.png"),
        categoria: this.categoriaForm,
      });
      this.nombreForm = "";
      this.descripcionForm = "";
      this.precioForm = "";
      this.categoriaForm = "";
      this.form = false;
    },
    categorias(n) {
      switch (n) {
        case 1:
          this.visible = false;
          this.lista = this.productos.filter((prod) =>
            prod.categoria.toLowerCase().includes("bandai")
          );
          break;
        case 2:
          this.visible = false;
          this.lista = this.productos.filter((prod) =>
            prod.categoria.toLowerCase().includes("funko")
          );
          break;
        case 3:
          this.visible = false;
          this.lista = this.productos.filter((prod) =>
            prod.categoria.toLowerCase().includes("posket")
          );
          break;
      }
    },
    limpiarFiltro() {
      this.visible = true;
      this.lista = [];
    },
    productosFiltrados(filtro) {
      console.log(filtro);
      let existe = this.productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(filtro.toLowerCase())
      );
      if (filtro !== "" && existe.length !== 0) { //si se filtró algo y el input no esta vacío
        this.lista = existe; 
        this.visible = false; //esto me oculta los productos de tienda
      } else {
        this.lista = [];
        this.visible = true;
      }
      this.filtrarProducto = "";
    },
  },
};
</script>




<style>
/* HEADER */
header {
  background: url("@/assets/logo/logo.png") no-repeat center center;
  background-color: white;
  height: 5vh;
}
h1 {
  font-size: 0;
}

/* ENCABEZADOS */
#slogan {
  text-align: center;
  color: white;
  background-color: #ff6d0d;
  height: 5vh;
  line-height: 5vh;
  margin-bottom: 0px;
  font-size: 1.5rem;
}
#slogan span {
  color: #202d77;
  font-weight: 700;
}
#h2-especial {
  background-color: rgb(240, 240, 240);
  width: 40%;
  border-radius: 5px;
  margin: auto;
  height: 5vh;
  line-height: 5vh;
  color: #ff6d0d;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
}

/* CATEGORIAS */
ul {
  padding-left: 0rem;
}
#contenedor-categorias ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}
#contenedor-categorias .navbar {
  margin-top: 5em;
  text-align: center;
  display: inline;
}
#contenedor-categorias .nav-item a {
  border-radius: 0.5em;
  border: none;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  height: 5em;
  user-select: none;
  color: transparent;
}
#contenedor-categorias .nav-item:first-of-type a {
  background: url("@/assets/categorias/bandai.png") no-repeat center center;
}
#contenedor-categorias .nav-item:first-of-type a:hover {
  transition: 300ms ease-in-out;
  background: url("@/assets/categorias/bandai-hover.png") no-repeat center
      center,
    rgb(226, 226, 226);
  user-select: none;
  color: transparent;
  cursor: pointer;
}
#contenedor-categorias .nav-item:nth-of-type(2) a {
  background: url("@/assets/categorias/funko.png") no-repeat center center;
}
#contenedor-categorias .nav-item:nth-of-type(2) a:hover {
  transition: 300ms ease-in-out;
  background: url("@/assets/categorias/funko-hover.png") no-repeat center center,
    rgb(226, 226, 226);
  user-select: none;
  color: transparent;
  cursor: pointer;
}
#contenedor-categorias .nav-item:nth-of-type(3) a {
  background: url("@/assets/categorias/qposket.png") no-repeat center center;
}
#contenedor-categorias .nav-item:nth-of-type(3) a:hover {
  transition: 300ms ease-in-out;
  background: url("@/assets/categorias/qposket-hover.png") no-repeat center
      center,
    rgb(226, 226, 226);
  user-select: none;
  color: transparent;
  cursor: pointer;
}

/* LIMPIAR */
.boton-limpiar {
  background-color: transparent;
  color: transparent;
  font-size: 1rem;
  font-weight: 600;
  height: 2em;
  width: 2em;
  padding-left: 0.5em;
  background: url("@/assets/iconografia/vaciar.png") no-repeat center left;
  border: none;
}
.boton-limpiar:hover {
  background-color: transparent;
  color: transparent;
  background: url("@/assets/iconografia/vaciar-h.png") no-repeat center left;
  box-shadow: 0px 0px 0px rgb(141, 141, 141);
  transition: 300ms ease-in-out;
}
#contenedor-boton-limpiar {
  text-align: center;
  margin: 1em;
}

/* BUSCAR */
#buscar {
  background: url("@/assets/iconografia/buscar.png") no-repeat center 0.3em;
  height: 1.4em;
  width: 1em;
  color: transparent;
  margin-left: 0.5em;
  margin-right: 0.5em;
  user-select: none;
}
#contenedor-busqueda {
  display: flex;
  margin: auto;
}
#input-busqueda {
  border: none;
  border-radius: 0.5em;
  padding-left: 0.5em;
  width: 20em;
  height: 2.5em;
}
#contenedor-busqueda button {
  border: none;
  background-color: #ff6d0d;
  color: white;
  border-radius: 0.5em;
  padding: 0.3em 0.5em;
  font-size: 600;
  box-shadow: 1px 2px 1px #d46215;
  height: 2.5em;
}
#contenedor-busqueda button:hover {
  background-color: #202d77;
  color: white;
  transition: 200ms ease-in-out;
  box-shadow: 1px 2px 1px #131833;
}

/* PRODUCTOS TOTALES */
#productosTotales {
  text-align: center;
  font-weight: 600;
  color: #797979;
  margin-bottom: 2em;
}

/* AGREGAR PRODUCTO NUEVO */
.contenedor-boton-producto-nuevo {
  text-align: center;
}
.boton-producto-nuevo {
  border: none;
  background-color: #202d77;
  color: white;
  border-radius: 0.5em;
  width: 15%;
  padding: 0.3em 0.5em;
  font-weight: 600;
  box-shadow: 1px 2px 1px #131833;
  margin-bottom: 1em;
}
.boton-producto-nuevo:hover {
  background-color: #797979;
  color: white;
  transition: 200ms ease-in-out;
  box-shadow: 1px 2px 1px #585858;
}

/* AGREGAR PRODUCTO NUEVO FORM */
.contenedor-form-agregar {
  text-align: center;
  background-color: #a7a7a7;
  border-radius: 1em 1em 0em 0em;
}
.contenedor-form-agregar p {
  color: #797979;
}
.inputs-agregar-nuevo label {
  display: block;
  font-weight: 600;
  color: white;
}
.inputs-agregar-nuevo {
  margin-bottom: 1em;
  width: 25%;
}
.inputs-agregar-nuevo input,
textarea,
select {
  border: none;
  width: 25%;
  border-radius: 0.3em;
  background-color: #585858;
  color: white;
}
.inputs-agregar-nuevo textarea {
  resize: none;
  height: 6em;
  padding-left: 1em;
}
.inputs-agregar-nuevo textarea:focus {
  background-color: white;
  border: none;
  color: #ff6d0d;
}
.inputs-agregar-nuevo select {
  width: 12%;
  padding-left: 1em;
  height: 2em;
}
.inputs-agregar-nuevo select:focus {
  background-color: white;
  border: none;
  color: #ff6d0d;
}
.agregar-nombre input {
  height: 2em;
  padding-left: 1em;
}
.agregar-nombre input:focus {
  background-color: white;
  border: none;
  color: #ff6d0d;
}
.agregar-precio input {
  width: 5%;
  height: 3em;
  padding-left: 1em;
  font-size: 1rem;
  font-weight: 600;
}
.agregar-precio input:focus {
  background-color: white;
  border: none;
  color: #ff6d0d;
}
.inputs-agregar-nuevo span {
  color: rgb(153, 17, 17);
}
.form-agregar .boton-producto-nuevo:hover {
  background-color: #ff6d0d;
  color: white;
  transition: 200ms ease-in-out;
  box-shadow: 1px 2px 1px #d46215;
}
.contenedor-form-agregar h4 {
  color: #202d77;
  font-weight: 600;
  font-size: 1.2rem;
  padding-top: 1em;
  text-align: center;
}

/* FOOTER */
footer {
  background-color: #6d6d6c;
  text-align: center;
  color: white;
  bottom: 0%;
  margin-bottom: -10em;
}
footer p {
  background-color: #ff6d0d;
}
footer h2 {
  color: white;
  background-color: #6d6d6c;
  margin-bottom: 0px;
  font-size: 1.2rem;
  color: #202d77;
}
footer ul li {
  list-style: none;
}
footer ul {
  padding-left: 0rem;
}

/* XS */
@media screen and (max-width: 575px) {
  #slogan {
    font-size: 1.2rem;
  }

  /* CATEGORIAS */
  #contenedor-categorias .nav-item:first-of-type a {
    background: url("@/assets/categorias/xs/bandai.png") no-repeat center center;
  }
  #contenedor-categorias .nav-item:first-of-type a:hover {
    transition: none;
    background: url("@/assets/categorias/xs/bandai-hover.png") no-repeat center
        center,
      rgb(226, 226, 226);
    user-select: none;
    color: transparent;
  }
  #contenedor-categorias .nav-item:nth-of-type(2) a {
    background: url("@/assets/categorias/xs/funko.png") no-repeat center center;
  }
  #contenedor-categorias .nav-item:nth-of-type(2) a:hover {
    transition: none;
    background: url("@/assets/categorias/xs/funko-hover.png") no-repeat center
        center,
      rgb(226, 226, 226);
    user-select: none;
    color: transparent;
  }
  #contenedor-categorias .nav-item:nth-of-type(3) a {
    background: url("@/assets/categorias/xs/qposket.png") no-repeat center
      center;
  }
  #contenedor-categorias .nav-item:nth-of-type(3) a:hover {
    transition: none;
    background: url("@/assets/categorias/xs/qposket-hover.png") no-repeat center
        center,
      rgb(226, 226, 226);
    user-select: none;
    color: transparent;
  }

  /* BUSCAR */
  #input-busqueda {
    width: 15em;
  }

  /* AGREGAR PRODUCTO NUEVO */
  #h2-especial:nth-of-type(2) {
    width: 90%;
    height: 5vh;
    font-size: 1.3rem;
  }
  .boton-producto-nuevo {
    width: 50%;
  }

  /* AGREGAR NUEVO FORM */
  .inputs-agregar-nuevo input,
  textarea,
  select {
    width: 70%;
  }
  .agregar-precio input {
    width: 25%;
    height: 3em;
    padding-left: 1em;
    font-size: 1rem;
    font-weight: 600;
  }
  .inputs-agregar-nuevo select {
    width: 40%;
    padding-left: 1em;
    height: 2.5em;
  }
}

/* SM */
@media screen and (min-width: 576px) {
  #slogan {
    font-size: 1.2rem;
  }

  /* AGREGAR PRODUCTO NUEVO */
  #h2-especial:nth-of-type(2) {
    width: 80%;
    height: 5vh;
    font-size: 1.3rem;
  }
  .boton-producto-nuevo {
    width: 40%;
  }

  /* AGREGAR NUEVO FORM */
  .inputs-agregar-nuevo input,
  textarea,
  select {
    width: 65%;
  }
  .agregar-precio input {
    width: 20%;
    height: 3em;
    padding-left: 1em;
    font-size: 1rem;
    font-weight: 600;
  }
  .inputs-agregar-nuevo select {
    width: 40%;
    padding-left: 1em;
    height: 2.5em;
  }
}

/*  MD */
@media screen and (min-width: 768px) {
  #slogan {
    font-size: 1.5rem;
  }
  /* BUSCAR */
  #input-busqueda {
    width: 25em;
  }

  /* AGREGAR PRODUCTO NUEVO */
  #h2-especial:nth-of-type(2) {
    width: 60%;
    height: 5vh;
    font-size: 1.3rem;
  }
  .boton-producto-nuevo {
    width: 30%;
  }

  /* AGREGAR NUEVO FORM */
  .inputs-agregar-nuevo input,
  textarea,
  select {
    width: 55%;
  }
  .agregar-precio input {
    width: 15%;
    height: 3em;
    padding-left: 1em;
    font-size: 1rem;
    font-weight: 600;
  }
  .inputs-agregar-nuevo select {
    width: 25%;
    padding-left: 1em;
    height: 2em;
  }
}

/* LG */
@media screen and (min-width: 992px) {
  /* BUSCAR */
  #input-busqueda {
    width: 25em;
  }

  /* AGREGAR PRODUCTO NUEVO */
  #h2-especial {
    width: 40%;
    height: 5vh;
    font-size: 1.3rem;
  }
  .boton-producto-nuevo {
    width: 25%;
  }

  /* AGREGAR NUEVO FORM */
  .inputs-agregar-nuevo input,
  textarea,
  select {
    width: 45%;
  }
  .agregar-precio input {
    width: 12%;
    height: 3em;
    padding-left: 1em;
    font-size: 1rem;
    font-weight: 600;
  }
  .inputs-agregar-nuevo select {
    width: 20%;
    padding-left: 1em;
    height: 2em;
  }
}

/* XL */
@media screen and (min-width: 1200px) {
  /* AGREGAR PRODUCTO NUEVO */
  #h2-especial:nth-of-type(2) {
    width: 40%;
    font-size: 1.5rem;
  }
  .boton-producto-nuevo {
    width: 20%;
  }

  /* AGREGAR NUEVO FORM */
  .inputs-agregar-nuevo input,
  textarea,
  select {
    width: 35%;
  }
  .agregar-precio input {
    width: 10%;
    height: 3em;
    padding-left: 1em;
    font-size: 1rem;
    font-weight: 600;
  }
  .inputs-agregar-nuevo select {
    width: 20%;
    padding-left: 1em;
    height: 2em;
  }
}

/* BANNER XXL */
@media screen and (min-width: 1400px) {
  /* AGREGAR PRODUCTO NUEVO */
  #h2-especial:nth-of-type(2) {
    width: 40%;
    font-size: 1.5rem;
  }
  .boton-producto-nuevo {
    width: 20%;
  }
}
</style>
