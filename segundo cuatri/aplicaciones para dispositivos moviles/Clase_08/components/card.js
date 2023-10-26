Vue.component("card", {
  data: function () {
    return {
      dato1: ''
    };
  },
  props: ["nombre", "coste", "foto"],
  /*html*/
  template: `<div class="card col-md-4 p-4 m-3">
                    <h2 v-text="nombre"> </h2>
                    <img v-bind:src="foto" alt="titulo">
                    <p>$ {{coste}}</p>
                    <button  v-on:click="addCard" class="btn btn-info" type="button">Agregar al carrito.</button>
                </div>`,
  methods: {
    addCard: function () {
      alert("Agregarndo al carrito");
    },
  },
});
