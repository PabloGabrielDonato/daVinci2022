<template>
  <div class="nosotros">
    <header>
      <h1>andromeda</h1>
    </header>

    <main>
      <h2 id="h2-nosotros">¿Quiénes somos?</h2>

      <div id="contenedor-quienes-somos">
        <div id="contenido-nosotros">
          <h3>Nosotros</h3>
          <p>
            Somos <span>andromeda</span>, un e-commerce nacido en medio de la
            pandemia del 2020. Surgió ante el <strong>deseo</strong> de
            encontrar una alternativa a seguir saciando el
            <strong>fanatismo</strong> y <strong>coleccionismo</strong> del arte
            japonés en un contexto donde no podíamos ir físicamente a nuestros
            locales preferidos, otorgando un espacio donde con tan solo un par
            de clicks, pudieran tener lo que deseaban en la puerta de su
            <strong>casa</strong> o en sus <strong>manos</strong>.
          </p>
        </div>

        <div id="contenido-proposito">
          <h3>Nuestro Propósito</h3>
          <p>
            Su nombre hace referencia a una <strong>constelación</strong>. Este
            término está ligado a lo que queremos representar: aquello que se
            <strong>ramifica</strong>, que no depende de un sólo núcleo, un
            <strong>conjunto</strong> de elementos que conforman un todo. Para
            nosotros, esto describe perfectamente la <span>imaginación</span>,
            algo que nunca debe morir. <br />
            Nuestro objetivo es no permitir que ese
            <strong>niño interior</strong> que todos tenemos dentro se apague, y
            seguir avivando esa luz que nos hace tan únicos y especiales. No
            queremos que ninguna <strong>excusa</strong> nos arrebate esto que
            tanto nos apasiona, por eso nos importó mucho que nuestro proyecto
            estuviera al alcance de tu <strong>mano</strong>
            para que puedas seguir gozando de tu fanatismo.
          </p>
        </div>

        <div id="contenedor-actualidad-oferta">
          <div id="contenido-actualidad">
            <h3>Nuestra Actualidad</h3>
            <p>
              Hoy en día, <span>andromeda</span> es mucho más que una tienda de
              figuras. Es un punto de encuentro para todos aquellos fanáticos
              como nosotros. Todo lo que necesite tu
              <strong>imaginación</strong> para alimentarse, lo tenemos.
            </p>
          </div>

          <div id="contenido-oferta">
            <h3>Nuestra oferta</h3>
            <p>
              En <span>andromeda</span> ofrecemos
              <strong>figuras de acción</strong> importadas. Se pueden realizar
              <strong>pedidos personalizados</strong> a Japón. Visitá la pestaña de contacto para obtener más información.
            </p>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <div class="row w-100 m-auto">
        <div
          class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3"
        >
          <h2>Materia</h2>
          <ul>
            <li>Aplicaciones Web Progresivas</li>
            <li>Diseño y Desarrollo Web</li>
          </ul>
        </div>
        <div
          class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3"
        >
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


<style>
.nosotros {
  background-color: white;
}

/* HEADER */
header {
  background: url("@/assets/logo/logo.png") no-repeat center center;
  background-color: white;
  height: 5vh;
}
h1 {
  font-size: 0;
}
#h2-nosotros {
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

/* CONTENIDO */
#contenedor-quienes-somos {
  background: url("@/assets/fondo.png") no-repeat center center;
}
#contenedor-quienes-somos div {
  width: 60vw;
  margin: auto;
}
#contenedor-quienes-somos span {
  font-weight: 600;
  color: #ff6d0d;
}
#contenido-nosotros,
#contenido-proposito,
#contenido-actualidad,
#contenido-oferta {
  margin: auto;
}
#contenedor-quienes-somos h3 {
  background-color: #202d77;
  width: 40%;
  border-radius: 5px;
  margin: auto;
  margin-top: 2em;
  height: 5vh;
  line-height: 5vh;
  color: #ff6d0d;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
}
#contenido-nosotros p,
#contenido-proposito p {
  margin-top: 1em;
  column-count: 2;
  font-size: 1.1rem;
}
#contenedor-actualidad-oferta{
  display: flex;
  align-items: flex-start;
}
#contenedor-actualidad-oferta p{
  margin-top: 1em;
  margin-bottom: 3em;
  font-size: 1.1rem;
}

/* FOOTER */
footer {
  background-color: #6d6d6c;
  text-align: center;
  color: white;
  bottom: 0%;
  margin-bottom: -10em;
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
    #h2-nosotros {
  width: 80%;
}

/* CONTENIDO */
  #contenedor-quienes-somos {
  background: url("@/assets/fondo.png") no-repeat center center;
  }
  #contenedor-quienes-somos div {
    width: 90vw;
    margin: auto;
  }
  #contenedor-quienes-somos span {
    font-weight: 600;
    color: #ff6d0d;
  }
  #contenedor-quienes-somos h3 {
    width: 70%;
  }
  #contenido-nosotros p,
  #contenido-proposito p {
    column-count: 1;
    font-size: 1.1rem;
    text-align: center;
  }
  #contenedor-actualidad-oferta{
    display: block;
    align-items: flex-start;
    gap: 1em;
  }
  #contenedor-actualidad-oferta p{
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.1rem;
    text-align: center;
  }
}

/* SM */
@media screen and (min-width: 576px) {
  #h2-nosotros {
  width: 60%;
}

/* CONTENIDO */
  #contenedor-quienes-somos {
  background: url("@/assets/fondo.png") no-repeat center center;
  }
  #contenedor-quienes-somos div {
    width: 90vw;
    margin: auto;
  }
  #contenedor-quienes-somos span {
    font-weight: 600;
    color: #ff6d0d;
  }
  #contenedor-quienes-somos h3 {
    width: 50%;
  }
  #contenido-nosotros p,
  #contenido-proposito p {
    column-count: 1;
    font-size: 1.1rem;
    text-align: center;
  }
  #contenedor-actualidad-oferta{
    display: block;
    align-items: flex-start;
    gap: 1em;
  }
  #contenedor-actualidad-oferta p{
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.1rem;
    text-align: center;
  }
}

/*  MD */
@media screen and (min-width: 768px) {
  #h2-nosotros {
  width: 60%;
}

  /* CONTENIDO */
  #contenedor-quienes-somos {
  background: url("@/assets/fondo.png") no-repeat center center;
  }
  #contenedor-quienes-somos div {
    width: 80vw;
    margin: auto;
  }
  #contenedor-quienes-somos span {
    font-weight: 600;
    color: #ff6d0d;
  }
  #contenedor-quienes-somos h3 {
    background-color: #202d77;
    width: 40%;
    border-radius: 5px;
    margin: auto;
    margin-top: 2em;
    height: 5vh;
    line-height: 5vh;
    color: #ff6d0d;
    font-weight: 600;
    font-size: 1.3rem;
    text-align: center;
  }
  #contenido-nosotros p,
  #contenido-proposito p {
    margin-top: 1em;
    column-count: 2;
    font-size: 1.1rem;
    text-align: left;
  }
  #contenedor-actualidad-oferta{
    display: flex;
    align-items: flex-start;
    gap: 1em;
  }
  #contenedor-actualidad-oferta h3{
    font-size: 1.2rem;
    width: 70%;
  }
  #contenedor-actualidad-oferta p{
    margin-top: 1em;
    margin-bottom: 3em;
    font-size: 1.1rem;
    text-align: left;
  }
}

/* LG */
@media screen and (min-width: 992px) {
  #h2-nosotros {
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

/* CONTENIDO */
  #contenedor-quienes-somos {
  background: url("@/assets/fondo.png") no-repeat center center;
  }
  #contenedor-quienes-somos div {
    width: 70vw;
    margin: auto;
  }
  #contenedor-quienes-somos span {
    font-weight: 600;
    color: #ff6d0d;
  }
  #contenedor-quienes-somos h3 {
    background-color: #202d77;
    width: 40%;
    border-radius: 5px;
    margin: auto;
    margin-top: 2em;
    height: 5vh;
    line-height: 5vh;
    color: #ff6d0d;
    font-weight: 600;
    font-size: 1.3rem;
    text-align: center;
  }
  #contenido-nosotros p,
  #contenido-proposito p {
    margin-top: 1em;
    column-count: 2;
    font-size: 1.1rem;
  }
  #contenedor-actualidad-oferta{
    display: flex;
    align-items: flex-start;
    gap: 1em;
  }
  #contenedor-actualidad-oferta h3{
    font-size: 1.2rem;
    width: 60%;
  }
  #contenedor-actualidad-oferta p{
    margin-top: 1em;
    margin-bottom: 3em;
    font-size: 1.1rem;
  }
}

/* XL */
@media screen and (min-width: 1200px) {
#h2-nosotros {
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

/* CONTENIDO */
#contenedor-quienes-somos {
  background: url("@/assets/fondo.png") no-repeat center center;
}
#contenedor-quienes-somos div {
  width: 70vw;
  margin: auto;
}
#contenedor-quienes-somos span {
  font-weight: 600;
  color: #ff6d0d;
}
#contenedor-quienes-somos h3 {
  background-color: #202d77;
  width: 40%;
  border-radius: 5px;
  margin: auto;
  margin-top: 2em;
  height: 5vh;
  line-height: 5vh;
  color: #ff6d0d;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
}
#contenido-nosotros p,
#contenido-proposito p {
  margin-top: 1em;
  column-count: 2;
  font-size: 1.1rem;
}
#contenedor-actualidad-oferta{
  display: flex;
  align-items: flex-start;
  gap: 1em;
}
#contenedor-actualidad-oferta h3{
  font-size: 1.2rem;
  width: 60%;
}
#contenedor-actualidad-oferta p{
  margin-top: 1em;
  margin-bottom: 3em;
  font-size: 1.1rem;
}}

/* BANNER XXL */
@media screen and (min-width: 1400px) {
  #h2-nosotros {
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

/* CONTENIDO */
#contenedor-quienes-somos {
  background: url("@/assets/fondo.png") no-repeat center center;
}
#contenedor-quienes-somos div {
  width: 60vw;
  margin: auto;
}
#contenedor-quienes-somos span {
  font-weight: 600;
  color: #ff6d0d;
}
#contenido-nosotros,
#contenido-proposito,
#contenido-actualidad,
#contenido-oferta {
  margin: auto;
}
#contenedor-quienes-somos h3 {
 font-size: 1.2rem;
  width: 60%;
}
#contenido-nosotros p,
#contenido-proposito p {
  margin-top: 1em;
  column-count: 2;
  font-size: 1.1rem;
}
#contenedor-actualidad-oferta{
  display: flex;
  align-items: flex-start;
}
#contenedor-actualidad-oferta p{
  margin-top: 1em;
  margin-bottom: 3em;
  font-size: 1.1rem;
}}
</style>




