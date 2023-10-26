const app = new Vue({
  el: "#app",
  data: {
    palabraFiltro: "",
    producto: "",
    precio: "",
    lista: [{ nombre: "jugo", precio: 55 }],
  },
  created() {
    this.leerLista();
  },
  computed: {
    cantidadProducto() {
      return this.lista.length;
    },
    productosFiltrados() {
      let array = this.lista.filter((item) =>
        item.nombre.toLowerCase().includes(this.palabraFiltro.toLowerCase())
      );
      console.log(array);
      return array;
    },
    todoCarrito() {
      let total = 0;
      this.lista.forEach((element) => {
        total += element.precio;
      });

      return total;
    },
  },
  methods: {
    agregar: function () {
      if (this.producto.trim() != "") {
        this.lista.push({
          nombre: this.producto,
          precio: this.precio,
        });
        this.producto = "";
        this.precio = "";
      }
      this.guardarLista();
    },
    borrarTodo: function () {
      this.lista = [];
      this.guardarLista();
    },
    leerLista: function () {
      let datosStorage = JSON.parse(localStorage.getItem("lista"));
      if (datosStorage) {
        this.lista = datosStorage;
      }
    },

    guardarLista: function () {
      localStorage.setItem("lista", JSON.stringify(this.lista));
    },
  },
});
