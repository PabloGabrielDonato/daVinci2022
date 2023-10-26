let app = new Vue({
    el: '#app',// El punto de montaje
    data: { // Datos
        texto: '',
        titulo: 'Iron man',
        estreno: 2005,
        director: '',
        detalles: ''
    },
    methods: { // Metodos
        verDescripcion(){
            console.log('Ejecución de un metodo');

            if ( this.detalles == '' ){
                this.detalles = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio magnam dolorem aspernatur eum, deleniti nemo quisquam maiores minima molestiae, rem tempora dolores ipsam delectus! Dolore, doloremque. Aliquam deleniti eaque quam?';
            } else {
                this.detalles = '';
            }
        },
        guardar(){
            this.titulo = this.texto;
        }

    }    
})