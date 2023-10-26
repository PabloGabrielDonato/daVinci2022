<template>
    <div>
        <div class="contenedor-editar-boton d-flex" >
            <button class="editarBoton col-12" v-on:click="editarProducto">Editar producto</button>
        </div>
        

        <div class="form contenedor-form-editar" v-if="formEdit">
            <h4>Cambiar datos</h4>
            <form class="form-editar">
                <div class="inputs-editar-producto w-100">
                    <label for="name">Nombre<span>*</span></label>
                    <input v-model="nombreEdit" id="name" type="text" required>
                </div>
                

                <div class="inputs-editar-producto w-100">
                    <label for="desc">Descripción<span>*</span></label>
                    <textarea v-model="descripcionEdit" id="desc" required></textarea>
                </div>
                            
                <div class="inputs-editar-producto w-100 editar-precio">
                    <label for="price">Precio<span>*</span></label>
                    <input v-model.number="precioEdit" id="price" type="number" required>
                </div>
                                

                <div class="inputs-editar-producto w-100">
                    <label for="categ">Categoría<span>*</span></label>
                    <select v-model="categoriaEdit" name="select" id="categ" required>
                        <option value="FIGURA BANDAI">FIGURA BANDAI</option>
                        <option value="FIGURA FUNKO POP">FIGURA FUNKO POP</option>
                        <option value="FIGURA Q POSKET">FIGURA Q POSKET</option>
                    </select>
                </div>
                

                <button class="finalizarEditar col-12" type="submit" v-on:click="guardarEdicion()">Finalizar Edicion</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'editar',
    props: ['productos','producto'],
    data: () => ({
        nombreEdit: '',
        descripcionEdit: '',
        precioEdit: '',
        categoriaEdit: '',
        formEdit: false
    }),
    methods: {
        guardarEdicion() {
            this.producto.nombre = this.nombreEdit;
            this.producto.descripcion = this.descripcionEdit;
            this.producto.precio = parseInt(this.precioEdit);
            this.producto.categoria = this.categoriaEdit;
            this.guardar();
            this.formEdit = false;
        },
        editarProducto() {
            this.formEdit = !this.formEdit
        },
        guardar() {
            localStorage.setItem('listaProductos', JSON.stringify(this.productos));
        }
    }
}
</script>




<style>
.editarBoton{
    padding: 0.1em 0.2em;
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.8rem;
    border: none;
    color: #202D77;
    background-color: #e6e6e6;
    font-weight: 600;
    border-radius: 0.5em;
    height: 2em;
}
.editarBoton:hover {
    background-color: #c7c7c7;
    transition: 300ms ease-in-out;
}



/* EDITAR PRODUCTO FORM */
.contenedor-form-editar h4{
    color: #636363;
    font-weight: 600;
    font-size: 0.9rem;
    padding-top: 0em;
    text-align: center;
}
.inputs-editar-producto label{
    display: block;
    font-weight: 600;
    font-size: 0.9rem;
    color: #FF6D0D;
}
.inputs-editar-producto input, textarea, select{
  height: 1.5em;
  font-size: 0.9rem;
  width: 100%;
  background-color: #c7c7c7;
  border: none;
  border-radius: 0.3em;
  color:#636363;
}
.inputs-editar-producto textarea{
    width: 100%;
    resize: none;
    height: 4em;
    background-color: #c7c7c7;
    color:#636363;
}
.inputs-editar-producto select{
    width: 100%;
    resize: none;
    height: 2em;
    background-color: #c7c7c7;
    color:#636363;
}
.inputs-editar-producto input:focus{
  background-color: #e7e7e7;
  color:#202D77;
}
.inputs-editar-producto textarea:focus{
  background-color: #e7e7e7;
  color:#202D77;
}
.inputs-editar-producto select:focus{
  background-color: #e7e7e7;
  color:#202D77;
}
.editar-precio input{
  font-size: 1rem;
  font-weight: 600;
}
.inputs-agregar-nuevo span{
  color:rgb(153, 17, 17);
}
.finalizarEditar{
    padding: 0.1em 0.2em;
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.8rem;
    border: none;
    color: white;
    background-color: #636363;
    font-weight: 600;
    border-radius: 0.5em;
    height: 2em;
}
.finalizarEditar:hover {
    background-color: #202D77;
    transition: 300ms ease-in-out;
}

</style>