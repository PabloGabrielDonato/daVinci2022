const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Clase 03 - Directivas',
        visible: true
    },
    methods: {
        mostrarOcultar(){
            console.log('Mostar / ocultar');
            this.visible = !this.visible;
        }
    }
})