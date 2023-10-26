const application = new Vue({
  el: '#app',
  data: {
    lista: [],
  },
  created(){
    this.leer();
  },
    
  methods: {
    leer: function(){
      let datosGuardados = localStorage.getItem('peliculas');
      if(datosGuardados){
        this.lista = JSON.parse(datosGuardados);
      }else{
        this.lista = peliculas;
      }
      

    },
    guardar: function(){
      let arrayString = JSON.stringify(this.lista);
      localStorage.setItem('peliculas', arrayString);
    },
    
    darLike: function(pelicula){
      console.table(pelicula)
      pelicula.like = !pelicula.like;

      this.guardar();
    }
  }
});
