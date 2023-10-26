const app = new Vue({
    el: '#app',
    beforeCreate(){
        console.log('1. El hook antes de la creación de la instancia')
    },
    created(){ // Por lo general lo usamos cuando necesitamos hacer alguna solicitud a un servidor
        console.info('2. Hook en el momento de la cración de la instancia: configuran las computadas, methods y el data')
    },
    beforeMount(){
        console.info('3. Hook antes de insertarse los cambios en el DOM');
    },
    mounted(){
        console.info('4. Hook cuando la instancia ya se monto en el DOM');
    },
    beforeUpdate(){
        console.log('5. Antes de realizarese una actualizacion en el DOM');
    },
    updated(){
        console.log('6. El en momento de actualizar el DOM')
    },
    data:{
        nombre: 'Juan'
    },
    methods:{
        accion: function(){
            console.log('Accion desde el btn');
        }
    }
})