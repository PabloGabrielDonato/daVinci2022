const app = new Vue({
    el: '#app',
    data: {
        email: '',
        pass: '',
        error: false,
        lenguajes: ['HTML', 'CSS', 'JavaScript', 'PHP']
    },
    methods: {
        login: function(){
            console.info('Login...');
            if( this.email == 'admin@gmail.com' && this.pass == '123'){
                alert('Bienvenido');
                this.error = false;
            } else {
                this.error = true;
            }
        },
        ocultarError: function(){
            this.error = false;
        }
    }
})