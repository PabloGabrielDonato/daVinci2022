<template>
  <div id="body-carrito">

        <header>
        <h1>andromeda</h1>
      </header>

    <main>

    <h2 id="h2-carrito">Carrito</h2>


<div class="contenedor-producto-carrito">
    <div class="datos-producto productoEnCarrito" v-for="(prodCarrito, index) of carrito" :key="index">
        <div class="nombre-precio-carrito">
            <h4 id="nombreCarrito" v-text="prodCarrito.nombre"></h4>
            <p class="precioProducto">$ {{ prodCarrito.precio }}</p>
            <button class="boton-eliminar" v-on:click="eliminarDelCarrito(prodCarrito.nombre)">Eliminar del Carrito</button>
        </div>
      
        <div class="sumar-restar-carrito">
            <button v-on:click="restarCantidad(prodCarrito.nombre)">-</button>
            <p id="cantidad-p">Cantidad: <span id="cantidad-numero">{{ prodCarrito.cantidad }}</span></p>
            <button v-on:click="sumarCantidad(prodCarrito.nombre)">+</button>
        </div>
    </div>
</div>
    

<div id="contenedor-precio-total">
    <p class="precioTotalCarrito-p">Precio Total: <span id="signo-pesos">$<span id="precioTotalCarrito">{{total}}</span></span></p>
</div>
    
<div v-show="(carrito.length != 0)"  id="contenedor-continuar-compra">
    <button id="continuar-compra">Continuar Compra</button>
</div> 
<div v-show="(carrito.length != 0)" id="contenedor-vaciar">
    <button id="vaciar-carrito"  v-on:click="vaciarCarrito">Vaciar Carrito</button>
</div> 
   


    </main>



  </div>
</template>

<script>
export default {
  name: "carrito",
  props: ["carrito"],
  data: () => ({
    precioTotal: 0,
  }),
  methods: {
    eliminarDelCarrito(nombre) {
      let itemCarrito = this.carrito.find((prod) => prod.nombre === nombre);
      this.carrito.splice(itemCarrito, 1);
    },
    sumarCantidad(nombre) {
      let itemCarrito = this.carrito.find((prod) => prod.nombre === nombre);
      itemCarrito.cantidad++;
    },
    restarCantidad(nombre) {
      let itemCarrito = this.carrito.find((prod) => prod.nombre === nombre);
      if (itemCarrito.cantidad === 1) {
        itemCarrito.cantidad = 1;
      } else {
        itemCarrito.cantidad -= 1;
      }
    },
    vaciarCarrito() {
      this.carrito = [];
    },
  },
  computed: {
    total() {
      this.precioTotal = 0;
      this.carrito.forEach((prod) => {
        this.precioTotal += prod.precio * prod.cantidad;
      });
      return this.precioTotal;
    },
  },
};
</script>


<style>
#body-carrito{
    background-color: white;
}
/* HEADER */
header {
    background: url('@/assets/logo/logo.png') no-repeat center center;
    background-color: white;
    height: 5vh;
}
h1 {
    font-size: 0;
}
#h2-carrito {
    background-color: rgb(240, 240, 240);
    width: 40%;
    border-radius: 5px;
    margin: auto;
    margin-top: 1em;
    height: 5vh;
    line-height: 5vh;
    color: #FF6D0D;
    font-weight: 600;
    font-size: 1.6rem;
    text-align: center;
}

/* CARRITO */
#contenedor-vaciar{
    text-align: center;
}
#vaciar-carrito {
    font-size: 1.1rem;
    padding: 0.3em 0.5em;
    border: none;
    background-color: #818181;
    color: white;
    border-radius: 0.5em;
    width: 10%;
    height: 2em;
    font-weight: 600;
    box-shadow: 1px 2px 1px #646464;
    margin-top: 2em;
    margin-bottom: 2em;
}
#vaciar-carrito:hover {
    background-color: #FF6D0D;
    color: white;
    transition: 200ms ease-in-out;
    box-shadow: 1px 2px 1px #c7560a;
}

/* CONTINUAR COMPRA */
#contenedor-continuar-compra{
    text-align: center;
}
#continuar-compra {
    font-size: 1.1rem;
    padding: 0.3em 0.5em;
    border: none;
    background-color: #FF6D0D;
    color: white;
    border-radius: 0.5em;
    width: 10%;
    height: 2em;
    font-weight: 600;
    box-shadow: 1px 2px 1px #c7560a;
    margin-top: 2em;
    margin-bottom: 2em;
}
#continuar-compra:hover {
    background-color: #202D77;
    color: white;
    transition: 200ms ease-in-out;
    box-shadow: 1px 2px 1px #111841;
}

/* PRODUCTO EN CARRITO */
.sumar-restar-carrito button:first-of-type {
    font-size: 1.2rem;
    line-height: 1rem;
    height: 1.2em;
    width: 1.2em;
    border: none;
    background-color: #818181;
    color: white;
    border-radius: 0.2em;
}
.sumar-restar-carrito button:nth-of-type(2) {
    font-size: 1.2rem;
    line-height: 1rem;
    height: 1.2em;
    width: 1.2em;
    border: none;
    background-color: #818181;
    color: white;
    border-radius: 0.2em;
}
.sumar-restar-carrito button:first-of-type:hover {
    background-color: #202D77;
    color: #b4b4b4;
    transition: 300ms ease-in-out;
}
.sumar-restar-carrito button:nth-of-type(2):hover {
    background-color: #202D77;
    color: #b4b4b4;
    transition: 300ms ease-in-out;
}
.sumar-restar-carrito {
    display: flex;
    justify-content: start;
    column-gap: 0.5em;
    align-items: baseline;
}
.productoEnCarrito {
    background-color: #b4b4b4;
    border-radius: 0.5em;
    padding: 1em;
    width: 90%;
    margin: auto;
    margin-bottom: 1em;
    margin-top: 1em;
}
.contenedor-producto-carrito{
    background-color: white;
    width: 45vw;
    margin: auto;    
    margin-bottom: 1em;
    margin-top: 1em;
    padding-bottom: 1em;
    padding-top: 1em;
    border-radius: 5px;
}
#cantidad-p {
    font-size: 0.9rem;
    color: #646464;
    font-weight: 600;
    margin-bottom: 0rem;
}
#cantidad-numero {
    font-weight: 600;
    color: #202D77;
}
.nombre-precio-carrito .precioProducto {
    color: white;
    text-shadow: 1px 1px 1px #646464;
    font-size: 1.2rem;
}
.nombre-precio-carrito {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
#nombreCarrito {
    font-weight: 600;
    font-size: 1.2rem;
}
.boton-eliminar {
    background: url('@/assets/iconografia/vaciar-h.png') no-repeat center center;
    color: transparent;
    border: none;
    font-size: 1rem;
    height: 2em;
    width: 2em;
}
.boton-eliminar:hover {
    cursor: pointer;
    background: url('@/assets/iconografia/vaciar.png') no-repeat center center;
    transition: 300ms ease-in-out;
}
.precioTotalCarrito-p {
    font-size: 1rem;
    line-height: 1rem;
    color: #b4b4b4;
    text-align: center;
    font-weight: 600;
    width: 20%;
    margin: auto;
    background-color: #202D77;
    border-radius: 5px;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}
.precioTotalCarrito-p span {
    font-size: 1.3rem;
    font-weight: 600;
    color: #FF6D0D;
}
#signo-pesos {
    color: white;
}

/* FOOTER */
footer {
    margin-bottom: -50em;
}







/* XS */
@media screen and (max-width: 575px) {
    #nombreCarrito {
    font-weight: 600;
    font-size: 0.9rem;
}
    .contenedor-producto-carrito{
        width: 95vw;
    }
    #vaciar-carrito {
        width: 35%;
    }
    #continuar-compra {
        width: 40%;
    }
    .precioTotalCarrito-p {
        width: 45%;
    }
    .nombre-precio-carrito .precioProducto {
    font-size: 1.1rem;
    width: 5em;
    }
}

/* SM */
@media screen and (min-width: 576px) {
        #nombreCarrito {
    font-weight: 600;
    font-size: 1rem;
}
    .contenedor-producto-carrito{
        width: 80vw;
    }
    #vaciar-carrito {
        width: 30%;
    }
    #continuar-compra {
        width: 30%;
    }
    .precioTotalCarrito-p {
        width: 40%;
    }
    .precioTotalCarrito-p span {
        font-size: 1.3rem;
        font-weight: 600;
        color: #FF6D0D;
    }
    #signo-pesos {
        color: white;
    }
    .nombre-precio-carrito .precioProducto {
    font-size: 1.1rem;
    width: 5em;
    }
}

/*  MD */
@media screen and (min-width: 768px) {
        #nombreCarrito {
    font-weight: 600;
    font-size: 1rem;
}
    .contenedor-producto-carrito{
        width: 75vw;
    }
    #vaciar-carrito {
        width: 30%;
    }
    #continuar-compra {
        width: 30%;
    }
    .precioTotalCarrito-p {
        width: 40%;
    }
    .precioTotalCarrito-p span {
        font-size: 1.3rem;
        font-weight: 600;
        color: #FF6D0D;
    }
    #signo-pesos {
        color: white;
    }
    .nombre-precio-carrito .precioProducto {
    font-size: 1.2rem;
}
}

/* LG */
@media screen and (min-width: 992px) {
    #nombreCarrito {
    font-weight: 600;
    font-size: 1.2rem;
}
    .contenedor-producto-carrito{
        background-color: white;
        width: 70vw;
        margin: auto;    
        margin-bottom: 1em;
        margin-top: 1em;
        padding-bottom: 1em;
        padding-top: 1em;
        border-radius: 5px;
    }
    #vaciar-carrito {
        width: 20%;
    }
    #continuar-compra {
        width: 20%;
    }
    .precioTotalCarrito-p {
        width: 30%;
    }
    .precioTotalCarrito-p span {
        font-size: 1.3rem;
        font-weight: 600;
        color: #FF6D0D;
    }
    #signo-pesos {
        color: white;
    }
    .nombre-precio-carrito .precioProducto {
    font-size: 1.4rem;
    }
}

/* XL */
@media screen and (min-width: 1200px) {
/* PRODUCTO EN CARRITO */
    .contenedor-producto-carrito{
        width: 60vw;
    }
    #vaciar-carrito {
        width: 20%;
    }
    #continuar-compra {
        width: 20%;
    }
    .precioTotalCarrito-p {
        width: 30%;
    }
}

/* BANNER XXL */
@media screen and (min-width: 1400px) {
    #vaciar-carrito {
        width: 20%;
    }
    #continuar-compra {
        width: 20%;
    }
    .precioTotalCarrito-p {
        width: 25%;
    }
        .nombre-precio-carrito .precioProducto {
    font-size: 1.5rem;
    }
        .contenedor-producto-carrito{
        width: 45vw;
    }
}
</style>