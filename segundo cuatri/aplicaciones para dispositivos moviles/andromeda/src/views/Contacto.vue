<template>
  <div class="contacto"> 
    <header>
      <h1>andromeda</h1>
    </header>

    <main> 
      <h2 id="h2-contacto">Contacto</h2>
      <p id="p-contacto">¡Seguínos en nuestras redes y enterate de todas las noticias!</p>
      <div id="redes">
        <button id="facebook"><a href="https://www.facebook.com/" target="_blank">Facebook</a></button>
        <button id="instagram"><a href="https://www.instagram.com/" target="_blank">Instagram</a></button>
        <button id="youtube"><a href="https://www.youtube.com/" target="_blank">Youtube</a></button>
      </div>


        <div class="form contenedor-form-contacto">
            <h4>Escribinos tu consulta</h4>
            <p>Será respondida a la brevedad</p>
            <form class="form-contacto" action="#">
            <div class="inputs-contacto w-100 contacto-nombre">
                <label for="name">Nombre<span>*</span></label>
                <input v-model="nombreForm" id="name" type="text" required />
            </div>
            
            <div class="inputs-contacto w-100">
                <label for="desc">Descripción<span>*</span></label>
                <textarea v-model="descripcionForm" id="desc" required></textarea>
            </div>
            
            <button @click="enviar" class="boton-contacto" type="submit">
                Enviar
            </button>
            </form>
        </div>
      </main>



    <footer>
        <div class="row w-100 m-auto">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <h2>Materia</h2>
                <ul>
                    <li>Aplicaciones Web Progresivas</li>
                    <li>Diseño y Desarrollo Web</li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3">
                <h2>Alumnos</h2>
                <ul>
                    <li>Pablo Donato</li>
                    <li>Agostina Michelis</li>
                </ul>
            </div>
        </div>
        <p>DWM3AH &#169; 2022</p>
    </footer>



      </div>
</template>

<script>
    export default{
        name:'contacto',
        data: () => ({
            nombreForm: '',
            descripcionForm: ''
        }),
        methods: {
            enviar(){
                this.nombreForm = '';
                this.descripcionForm = '';
                alert('Tu consulta ha sido enviada!');
            }
        }
    }
</script>

<style>
.contacto {
  background-color: white;
}

/* HEADER */
header {
    background: url('@/assets/logo/logo.png') no-repeat center center;
    background-color: white;
    height: 5vh;
}
h1 {
    font-size: 0;
}
#h2-contacto {
  background-color: rgb(240, 240, 240);
  width: 40%;
  border-radius: 5px;
  margin: auto;
  margin-top: 1em;
  height: 5vh;
  line-height: 5vh;
  color: #ff6d0d;
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
}
#p-contacto{
    color: #202D77;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    margin-top: 1em;
}

/* REDES */
#redes{
    text-align: center;
    height: 5em;
    line-height: 5em;
    user-select: none;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
}
#redes button{
    margin-right: 1.5em;
    margin-left: 1.5em;
    width: 4em;
    height: 4em;
    border: none;
}
#redes button a{
    color:transparent;
    user-select: none;
}
#facebook{
    background: url('@/assets/iconografia/facebook.png') no-repeat center center;   
}
#instagram{
    background: url('@/assets/iconografia/instagram.png') no-repeat center center;   
}
#youtube{
    background: url('@/assets/iconografia/youtube.png') no-repeat center center;   
}
#facebook:hover{
    transform: scale(1.1);
    transition: 200ms ease-in;  
}
#instagram:hover{
    transform: scale(1.1);
    transition: 200ms ease-in;   
}
#youtube:hover{
    transform: scale(1.1);
    transition: 200ms ease-in;  
}


/* FORM */
.contenedor-form-contacto{
  text-align: center;
  background-color: #a7a7a7;
  border-radius: 1em 1em 0em 0em;
  width: 50vw;
  margin: auto;
}
.contenedor-form-contacto p{
  color: #4e4e4e;
}
.inputs-contacto label{
 display: block;
font-weight: 600;
color: white;
}
.inputs-contacto{
  margin-bottom: 1em;
  width: 25%;
}
.inputs-contacto input, textarea{
  border: none;
  width: 70%;
  border-radius: 0.3em;
  background-color: #585858;
  color: white;
}
.inputs-contacto textarea{
  resize: none;
  height: 9em;
  padding-left: 1em;
  width: 70%;
}
.inputs-contacto textarea:focus{
  background-color: white;
  border:none;
  color:#FF6D0D;
}
.contacto-nombre input{
  height: 2em;
  padding-left: 1em;
}
.contacto-nombre input:focus{
  background-color: white;
  border:none;
  color:#FF6D0D
}
.inputs-contacto span{
  color:rgb(153, 17, 17);
}
.form-agregar .boton-producto-nuevo:hover{
    background-color:#FF6D0D;
    color: white;
    transition: 200ms ease-in-out;
   box-shadow: 1px 2px 1px #d46215;
}
.contenedor-form-contacto h4{
    color: #202D77;
    font-weight: 600;
    font-size: 1.3rem;
    padding-top: 1em;
    text-align: center;
}
.boton-contacto{
    border: none;
    background-color: #202D77;
    color: white;
    border-radius: 0.5em;
    width: 15%;
    padding: 0.3em 0.5em;
    font-weight: 600;
    box-shadow: 1px 2px 1px #131833;
    margin-bottom: 1em;
}
.boton-contacto:hover {
    background-color: #797979;
    color: white;
    transition: 200ms ease-in-out;
    box-shadow: 1px 2px 1px #585858;
}

/* FOOTER */
footer {
  background-color: #6d6d6c;
  text-align: center;
  color: white;
  bottom: 0%;
  margin-bottom: -80em;
  margin-top: 5em;
}
footer p {
  background-color: #ff6d0d;
}
footer h2 {
  color: white;
  background-color: #6d6d6c;
  margin-bottom: 0px;
  font-size: 1.2rem;
  color: #202d77;
}
footer ul li {
  list-style: none;
}
footer ul {
  padding-left: 0rem;
}




/* XS */
@media screen and (max-width: 575px) {
    #p-contacto{
    padding-left: 0.5em;
    padding-right: 0.5em;
    }
    #h2-contacto {
     width: 50%;
    }
    .contenedor-form-contacto{
    width: 90vw;
    }
    .boton-contacto{
    width: 25%;
    }
}

/* SM */
@media screen and (min-width: 576px) {
    #h2-contacto {
     width: 40%;
    }
    .contenedor-form-contacto{
    width: 90vw;
    }
    .boton-contacto{
    width: 20%;
    }
}

/*  MD */
@media screen and (min-width: 768px) {
        .contenedor-form-contacto{
    width: 80vw;
    }
}

/* LG */
@media screen and (min-width: 992px) {
    .contenedor-form-contacto{
    width: 70vw;
    }
}

/* XL */
@media screen and (min-width: 1200px) {
    .contenedor-form-contacto{
    width: 60vw;
    }
}

/* BANNER XXL */
@media screen and (min-width: 1400px) {
    .contenedor-form-contacto{
    width: 50vw;
    }
}


</style>