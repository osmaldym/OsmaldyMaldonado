<template>
    <div class="plats">
      <div class="tecs">
        <h1>tecnologías que manejo</h1>
        <div class="logos">
          <ul>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
            <li><img src="../assets/logo.png" alt="Img1"></li>
          </ul>
        </div>
      </div>
      <div class="divs">
        <div class="info">
          <h1>¡Te puedo crear lo que te imagines!</h1>
          <ul>
            <li>Aplicaciones moviles (Android - Java)</li>
            <li>Aplicaciones de escritorio</li>
            <li>Sitios web:</li>
          </ul>
          <p>¡E-Commerces, blogs, institucionales, portafolios, wikis y mas!</p>
        </div>
        <div class="graphs">
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

          <div class="cel">
            <div class="notif">
              <p>12:00</p>
              <div class="cam"></div>
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
              <span class="material-symbols-sharp">change_history</span>
            </div>
          </div>

          <div class="navegador">

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
    --w-Of-App-Pant: 500px;
    --h-Of-App-Pant: 300px;
    --r-Of-App-Pant: 2%;

    --w-Of-Cel: 260px;
    --h-Of-Cel: 500px;
    --cel-Cam-Tam: 15px;
  }

  .plats > .divs > .info,
  .plats > .divs,
  .plats > .divs > .graphs,
  .app > .acciones,
  .app > .pant,
  .app > .pant > .inputs{
    position: relative;
    display: flex;
  }

  .plats > .tecs > h1{
    text-align: center;
  }

  .plats,
  .plats > .divs > .info,
  .app > .pant > .inputs{
    flex-direction: column;
  }

  .plats > .divs > .info,
  .app > .pant,
  .app > .pant > .inputs{
    justify-content: center;
    align-items: center;
  }

  /* Parte de Plataformas */
  .plats > .tecs {
      width: 100%;
      height: 50vh;
      overflow: hidden;
  }

  .plats > .divs,
  .plats > .divs > .info{
    height: 100%;
  }

  .plats > .divs > .info{
    width: 45%;
  }

  .plats > .divs > .info{
    padding: 5%;
  }

  .plats > .divs > .info > h1{
      text-align: center;
  }

  .plats > .divs > .info > h1,
  .plats > .divs > .info > ul{
      margin-bottom: 20px;
  }

  .plats > .divs > .info > ul{
      width: 100%;
      color: #fff;
  }

  .plats > .divs > .info > p{
      color: var(--PColor);
      font-size: 16pt;
  }

  .plats > .divs > .graphs{
      width: 100%;
  }

  /* Todos los dispositivos */
  .app, .cel{
    position: absolute;
    overflow: hidden;
    box-shadow: 0 0 15px #000;
    background-color: rgb(170, 170, 170);
    border-radius: 15px;
  }

  /* Pantalla computador APP */
  .app {
    top: 0;
    right: var(--r-Of-App-Pant);
    width: var(--w-Of-App-Pant);
    height: var(--h-Of-App-Pant);
  }

  .app > .acciones{
    flex-direction: row-reverse;
    padding: 5px;
    color: var(--PColor);
  }

  .app > .acciones > span{
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .app > .pant{
    width: 100%;
    height: calc(100% - (24px + (5px * 2)));
    padding: 10px 0;
  }

  .app > .pant > .inputs{
    margin-right: 10px;
    width: 180px;
  }

  .app > .pant > .inputs,
  .app > .pant > .table{    
    height: 100%;
  }

  .app > .pant > .inputs > .input{
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
  }

  .app > .pant > .inputs > .input,
  .app > .pant > .table{
    border-radius: 10px;
    background-color: #fff;
  }

  .app > .pant > .table{
    overflow: hidden;
    width: 45%;
  }

  .app > .pant > .table > .title{
    height: 10%;
    background-color: var(--PColor);
  }

  /* Pantalla celular */
  .cel{
    top: 3%;
    right: calc((var(--w-Of-App-Pant) + var(--r-Of-App-Pant)) - 130px);
    width: var(--w-Of-Cel);
    height: var(--h-Of-Cel);
  }

  .cel > .notif{
    padding: 5px;
    position: relative;
  }

  .cel > .notif > .cam{
    width: var(--cel-Cam-Tam);
    height: var(--cel-Cam-Tam);
    background-color: var(--PColor);

  }

</style>