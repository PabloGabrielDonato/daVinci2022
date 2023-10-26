const app = new Vue({
    el: '#app',
    data: {
        taskName: '',
        tasks: []
    },
    computed: {
        tasksCount(){
            return this.tasks.length;
        }
    },
    methods: {
        saveTasks(){
            let tareasStrig = JSON.stringify(this.tasks);
            localStorage.setItem('tareas', tareasStrig);
        },
        addTask(){
            if( this.taskName.trim() != '' ){
                this.tasks.push({
                    name: this.taskName,
                    complet: false
                })
                this.taskName = '';
                this.saveTasks();
            }
        },
        loadTask(){
            console.log('Cargando tareas');
            let listaString = localStorage.getItem('tareas');
            console.log(listaString);
            this.tasks = JSON.parse(listaString);
        },
        taskComplet(index){
            console.log(index);
            this.tasks[index].complet = true;
            this.saveTasks();
        },
        taskDelete(index){
            console.log(index)
            this.tasks.splice(index,1);
            this.saveTasks();
        }
        
    }
})