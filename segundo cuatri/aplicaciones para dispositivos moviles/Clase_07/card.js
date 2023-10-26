Vue.component("card", {
  data: function () {
    return {
      cantidad: 0,
      stock: 100,
    };
  },
  props: ["producto", "precio", "nombre", "foto"],
  /*html*/
  template: `<div class="card col-md-4 p-4 m-3">
                      <h2 v-text="nombre"> </h2>
                      <img v-bind:src="foto" alt="titulo">
                      <p>$ {{precio}}</p>
                      <input v-model="cantidad" class="form-control" type="number">
                      <button  v-on:click="addCard" class="btn btn-info" type="button">add cart</button>
                  </div>`,
  methods: {
    addCard: function () {
      alert("Agregarndo al carrito");
    },
  },
});
