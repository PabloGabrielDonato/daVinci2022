/* data */
const products = [
  {
    id: 1,
    name: "Auricular Razer",
    price: 2600,
    moneda: "$",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_756516-MLA41158138136_032020-O.webp",
    categoria: "Auriculares",
    stock: 6,
  },
  {
    id: 2,
    name: "Gabinete MSI",
    price: 2000,
    moneda: "$",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_705820-MLA51633560141_092022-O.webp",
    categoria: "Auriculares",
    stock: 5,
  },
  {
    id: 3,
    name: "Tablet Lenovo",
    price: 35000,
    moneda: "$",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_972580-MLA48600236953_122021-O.webp",
    categoria: "Tablets",
    stock: 5,
  },
  {
    id: 4,
    name: "Ipad",
    price: 100000,
    moneda: "$",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_880768-MLA49693016579_042022-O.webp",
    categoria: "Tablets",
    stock: 5,
  },
  {
    id: 5,
    name: "Tablet Samsung",
    price: 50000,
    moneda: "$",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_684275-MLA49153411562_022022-O.webp",
    categoria: "Tablets",
    stock: 5,
  },
  {
    id: 6,
    name: "Nvidia 3060TI",
    price: 170000,
    moneda: "$",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_862662-MLA45806911924_052021-O.webp",
    categoria: "Tablets",
    stock: 5,
  },
  {
    id: 7,
    name: "Teclado gamer HyperX Alloy Origins 60 QWERTY",
    price: 15000,
    moneda: "$",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_944449-MLA50305077491_062022-O.webp",
    categoria: "Tablets",
    stock: 5,
  },
  {
    id: 8,
    name: "TV Samsung Series 7",
    price: 500,
    moneda: "$",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_787221-MLA48007684849_102021-O.webp",
    categoria: "Tablets",
    stock: 5,
  },
];

const app = new Vue({
  el: "#app",
  data: {
    palabraFiltro: "",
    products: [],
    cart: [],
    arrayFiltrado: [],
  },
  created() {
    this.fetchApi();
    this.arrayFiltrado = this.products;
  },
  methods: {
    addCard: function () {
      alert("Agregando al carrito");
    },

    // Lectura de productos
    fetchApi() {
      this.products = products;

      let datosStorage = JSON.parse(localStorage.getItem("products"));
      if (datosStorage) {
        this.cart = datosStorage;
      }
    },

    // Agregar productio al carrito
    addCart(product) {
      // verifica si el producto seleccionado ya existe en el carrito
      const itemCart = this.cart.filter((item) => item.id == product.id)[0];
      if (itemCart != undefined) {
        // si exite aumenta la cantidad del producto
        itemCart.cant++;
      } else {
        // agrega el producto si no existe en el carrito
        const itemCart = {
          id: product.id,
          name: product.name,
          price: product.price,
          moneda: product.moneda,
          cant: 1,
        };
        this.cart.push(itemCart);
      }
      this.guardarLista();
    },

    cleanCart() {
      this.cart = [];
      this.guardarLista();
    },

    guardarLista: function () {
      localStorage.setItem("products", JSON.stringify(this.cart));
    },
  },

  computed: {
    // Muesta el total de cantidad en el carrito
    cantProductsInCart() {
      return this.cart.reduce((acc, item) => acc + item.cant, 0);
    },
    // Muestra el precio total en el carrito
    totalPriceCart() {
      return this.cart.reduce((acc, item) => acc + item.cant * item.price, 0);
    },
    //filtro
    filtro: {
      get() {
        return this.palabraFiltro;
      },
      set(value) {
        value = value.toLowerCase();
        this.arrayFiltrado = this.products.filter(
          (item) => item.name.toLowerCase().indexOf(value) !== -1
        );
        this.palabraFiltro = value;
      },
    },
  },
});
