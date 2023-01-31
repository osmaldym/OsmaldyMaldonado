<template>
    <div class="plats">
      <div class="divs">
        <div class="info">
          <h1>¡Te puedo crear lo que te imagines!</h1>
          <ul>
            <li>Aplicaciones moviles (Android - Java)</li>
            <li>Aplicaciones de escritorio</li>
            <li>Sitios web:</li>
          </ul>
          <p>¡E-Commerces, blogs, institucionales, portafolios, wikis y mas!</p>

          <div class="tecs">
            <h1>Tecnologías que manejo</h1>
            <div class="logos">
              <ul>
                <li class="imgCont"><div class="html"></div></li>
                <li class="imgCont"><div class="css"></div></li>
                <li class="imgCont"><div class="js"></div></li>
                <li class="imgCont"><div class="ts"></div></li>
                <li class="imgCont"><div class="react"></div></li>
                <li class="imgCont"><div class="vue"></div></li>
                <li class="imgCont"><img src="../assets/lenguajes/php.svg" alt="Img1"></li>
                <li class="imgCont"><div class="java"></div></li>
                <li class="imgCont"><img src="../assets/lenguajes/py.svg" alt="Img1"></li>
              </ul>
            </div>
          </div>

        </div>
        <div class="graphs">
          <div class="pcs">
            <div class="app">
              <div class="acciones">
                <span class="material-symbols-outlined">close</span>
                <span class="material-symbols-sharp">check_box_outline_blank</span>
                <span class="material-symbols-outlined">minimize</span>
              </div>
              <div class="pant">
                <div class="inputs">
                  <div class="input"></div>
                  <div class="input"></div>
                  <div class="input"></div>
                </div>
                <div class="table">
                  <div class="title"></div>
                </div>
              </div>
            </div>

            <div class="web">
              <div class="acciones">
                <span class="material-symbols-outlined">close</span>
                <span class="material-symbols-sharp">check_box_outline_blank</span>
                <span class="material-symbols-outlined">minimize</span>
              </div>
              <div class="barra"></div>
              <div class="pant">
                <div class="rep">
                  <h1>WWW</h1>
                </div>
              </div>
            </div>
          </div>

          <div class="cel">
            <div class="notif">
              <div class="l"><p>12:00</p></div>
              <div class="cam"></div>
              <div class="r"></div>
            </div>
            <div class="pant">
              <div class="inputs">
                <div class="input"></div>
                <div class="input"></div>
                <div class="input"></div>
              </div>
                <div class="table">
                  <div class="title"></div>
                </div>
            </div>
            <div class="botones">
              <span class="material-symbols-sharp">crop_square</span>
              <span class="material-symbols-sharp">circle</span>
              <span class="material-symbols-sharp btnAtras">change_history</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'PartPlats'
  }
</script>

<style scoped>
  .plats{
    --w-Of-PC-Pant: 500px;
    --h-Of-PC-Pant: 300px;
    --r-Of-PC-Pant: 2%;

    --w-Of-Cel: 260px;
    --h-Of-Cel: 500px;
    --cel-Cam-Tam: 15px;

    --size_p: 16pt;

    --gen-padding: 5px;
  }

  .info, .divs, .graphs, .acciones,
  .inputs, .pant, .notif, .botones,
  .pcs, .logos > ul{
    position: relative;
    display: flex;
  }

  p{
    color: var(--PColor);
    font-size: var(--size_p);
  }

  h1 {
    text-align: center;
  }

  .info h1, ul{
    margin-bottom: 20px;
  }

  ul{
    color: #fff;
  }

  span{
    color: var(--PColor);
  }

  .plats, .info, .inputs, .pcs{
    flex-direction: column;
  }

  .info, .pant, .inputs, .botones{
    justify-content: center;
    align-items: center;
  }

  /* Parte de Plataformas */
  .tecs {
    width: 100%;
    /* overflow: hidden; */
  }

  .logos {
    /* overflow: hidden; */
    position: relative;
    height: 20vh;
  }

  .logos > ul {
    list-style: none;
    position: absolute;
    gap: 15px;
    left: 0;
  }

  .logos > ul > li {
    width: 20vh;
    height: 20vh;
  }

  .logos > ul > li > div{
    background-color: var(--PColor);
  }


  .logos > ul > li > .html { mask: url('@/assets/lenguajes/html.svg') no-repeat center; }
  .logos > ul > li > .css { mask: url('@/assets/lenguajes/css.svg') no-repeat center; }
  .logos > ul > li > .js { mask: url('@/assets/lenguajes/js.svg') no-repeat center; }
  .logos > ul > li > .ts { mask: url('@/assets/lenguajes/ts.svg') no-repeat center; }
  .logos > ul > li > .react { mask: url('@/assets/lenguajes/react.svg') no-repeat center; }
  .logos > ul > li > .vue { mask: url('@/assets/lenguajes/vue.svg') no-repeat center; }
  .logos > ul > li > .java { mask: url('@/assets/lenguajes/java.svg') no-repeat center; }

  .divs, .info{
    height: 100%;
  }

  .info{
    width: 45%;
    padding: 5%;
  }

  .graphs{
    align-items: center;
    width: 100%;
    /* QUITAR CUANDO SE TERMINE LO DE LOGOS */
    opacity: 0;
  }

  .pcs{
    position: absolute;
    right: var(--r-Of-PC-Pant);
  }

  /* Todos los dispositivos */
  .app, .cel, .web{
    overflow: hidden;
    box-shadow: 0 0 15px #000;
    background-color: rgb(170, 170, 170);
  }

  .app, .cel {
    border-radius: 15px;
  }

  .app > .pant > .table {
    height: 100%;
    width: 55%;
  }

  .cel > .pant > .table {
    height: 55%;
    width: 90%;
  }

  .pant{
    flex-wrap: wrap;
    gap: 10px;
  }

  .inputs{
    flex-direction: column;
    gap: 5px;
  }

  .table{
    overflow: hidden;
  }

  .input{
    width: 180px;
    height: 30px;
  }

  .input, .table{
    border-radius: 10px;
    background-color: #fff;
  }

  .table > .title {
    height: 25px;
    background-color: var(--PColor);
  }

  /* Pantalla computador APP */
  .app {
    margin-bottom: 25px;
    width: var(--w-Of-PC-Pant);
    height: var(--h-Of-PC-Pant);
  }

  .acciones{
    flex-direction: row-reverse;
    padding: var(--gen-padding);
  }

  /* Pantalla computador WEB */
  .web {
    width: var(--w-Of-PC-Pant);
    height: var(--h-Of-PC-Pant);
  }

  .web > .pant{
    height: calc(100% - 35px * 2);
  }

  .barra {
    width: 100%;
    height: 35px;
    background-color: var(--PColor);
  }

  .rep{
    padding: 25px;
    background-color: #fff;
    border-radius: 15px;
  }

  /* CELULAR */
  .cel{
    position: absolute;
    right: calc((var(--w-Of-PC-Pant) + var(--r-Of-PC-Pant)) - 130px);
    width: var(--w-Of-Cel);
    height: var(--h-Of-Cel);
  }

  .notif, .botones{
    height: 35px;
    align-items: center;
  }

  .notif > .l,
  .notif > .r{
    width: 50%;
  }

  .notif > .l{
    padding-left: 5px;
  }

  .notif > .cam{
    width: var(--cel-Cam-Tam);
    height: var(--cel-Cam-Tam);
    background-color: var(--PColor);
    border-radius: var(--cel-Cam-Tam);
  }

  .cel > .pant{
    height: calc(100% - (35px * 2));
  }

  .botones > .btnAtras{
    transform: rotate(-90deg);
  }

  .botones > span{
    padding: 0 15px;
  }

</style>