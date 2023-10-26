Vue.component("card", {
  props: ["nombre", "precio", "foto"],
  /*html*/
  template: `<div class="text-center">
                  <h3 v-text="nombre"> </h3>
                  <img width="100" v-bind:src="foto" v-bind:alt="titulo">
                  <p>Precio: $ {{precio}}</p>
                </div>`,
});
