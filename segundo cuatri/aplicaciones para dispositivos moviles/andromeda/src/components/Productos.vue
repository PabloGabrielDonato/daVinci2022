<template>
  <div class="hello">
    <div class="menor-mayor">
      <button v-on:click="menorMayor">Menor a Mayor</button>
    </div>

    <div id="contenedor-productos" class="justify-content-center">
      <div class="productoContenedor d-flex">
        <div v-for="(producto, index) of productos" :key="index" class="producto card align-items-center col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2" >

          <img class="card-img-top img-fluid" v-bind:src="producto.imagen" v-bind:alt="producto.nombre"/>

          <div class="card-body d-flex flex-wrap">
            <h3>{{ producto.nombre }}</h3>

            <p class="descripcionProducto" v-text="producto.descripcion"></p>

            <p class="precioProducto col-12">$ {{ producto.precio }}</p>

            <p class="categoriaProducto col-12">{{ producto.categoria }}</p>

          <label for="input-cantidad-producto" class="categoriaProducto">Cantidad:   </label>
            <input id="input-cantidad-producto" class="cantidadProducto" v-model="cantidad" type="number" min="1" />
       

            <div class="w-100">
              <Editar v-bind:productos="productos" v-bind:producto="producto"></Editar>
            </div>

            <button v-on:click="agregarCarrito(producto.nombre, cantidad)" class="col-12 boton-agregar">
              Agregar a Carrito
            </button>
            
          
            
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editar from "@/components/Editar.vue";

export default {
  name: "productos",
  props: ["productos", "carrito"],
  components: {
    Editar,
  },
  data: () => ({
    cantidad: 1,
  }),
  methods: {
    agregarCarrito(nombre, cantidad) {
      const existe = this.carrito.some((prod) => prod.nombre === nombre);
      const item = this.productos.find((prod) => prod.nombre === nombre);

      if (!existe) {
        item.cantidad = parseInt(cantidad);
        this.carrito.push(item);
      } else {
        item.cantidad += parseInt(cantidad);
      }
      this.cantidad = 1;
    },
    menorMayor() {
      this.productos.sort((a, b) => {
        return a.precio - b.precio;
      });
    },
  },
};
</script>





<style>
/* MENOR A MAYOR */
.menor-mayor button {
  font-family: "Poppins", sans-serif;
  color: transparent;
  border: none;
  background: url("@/assets/iconografia/menor-mayor.png") no-repeat center
    center;
  width: 3em;
  height: 3em;
  background-color: rgb(192, 192, 192);
  padding: 2em;
  border-radius: 1em;
  user-select: none;
}
.menor-mayor button:hover {
  background-color: rgb(231, 231, 231);
  transition: 300ms ease-in-out;
}
.menor-mayor {
  margin-top: -2em;
  margin-bottom: 2em;
  text-align: center;
}

/* CARDS */
.card {
    box-shadow: 2px 2px 1px #b9b9b9;
    border-radius: 1em;
}
.card:hover {
    box-shadow: 2px 2px 3px #999999;
    transform: scale(1.01);
    transition: 300ms ease-in;
}
#contenedor-productos {
    margin: auto;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
}
.producto {
  margin: 0.1em;
  padding: 0.1em;
  width: 17em;
}
.card-body{
  width: 17em;
}
.productoContenedor {
    margin-bottom: 2em;
    flex-wrap: wrap;
    justify-content: center;
}
.card-body h3 {
    font-size: 1rem;
    color: white;
    background-color: #202D77;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
    height: fit-content;
}
.precioProducto {
    font-size: 1.6rem;
    font-weight: 600;
    color: #FF6D0D;
    margin-top: -0.5em;
    text-shadow: 1px 1px 1px #d46215;
    height: 0.8em;
}
.categoriaProducto {
    height: fit-content;
    color: #a3a3a3;
    font-weight: 600;
    height: 0.8em;
    font-size: 0.8rem;
}
.producto .img-fluid {
    display: block;
    border-radius: 1em;
}
.boton-agregar {
    border: none;
    background-color: #FF6D0D;
    color: white;
    border-radius: 0.5em;
    width: 100%;
    height: 2em;
    padding: 0.3em 0.5em;
    font-weight: 600;
    box-shadow: 1px 2px 1px #d46215;
}
.boton-agregar:hover {
    background-color: #202D77;
    color: white;
    transition: 200ms ease-in-out;
    box-shadow: 1px 2px 1px #131833;
}
.descripcionProducto{
  font-size: 0.9rem;
}
.cantidadProducto{
  border: none;
  background-color: #c2c2c2;
  width: 3em;
  height: fit-content;
  text-align: center;
  color: #202D77;
  margin-left: 0.5em;
  font-weight: 600;
}














/* XS */
@media screen and (max-width: 575px) {
  .producto .img-fluid {
      width: 70%;
  }
}

/* SM */
@media screen and (min-width: 576px) {
    .producto {
    margin: 0.1em;
    padding: 0.1em;
    width: 13em;
  } 
  .card-body{
    width: 13em;
  }
  .producto .img-fluid {
      width: 70%;
  }
}

/*  MD */
@media screen and (min-width: 768px) {
 .producto {
    margin: 0.1em;
    padding: 0.1em;
    width: 13em;
  } 
  .card-body{
    width: 13em;
  }
  .producto .img-fluid {
      width: 80%;
  }
}

/* LG */
@media screen and (min-width: 992px) {
    .producto {
    margin: 0.1em;
    padding: 0.1em;
    width: 13em;
  } 
  .card-body{
    width: 13em;
  }
  .producto .img-fluid {
      width: 80%;
  }

}

/* XL */
@media screen and (min-width: 1200px) {
  .producto {
    margin: 0.1em;
    padding: 0.1em;
    width: 14em;
  } 
  .card-body{
    width: 14em;
  }
  .producto .img-fluid {
      width: 80%;
  }
}

/* BANNER XXL */
@media screen and (min-width: 1400px) {}
</style>