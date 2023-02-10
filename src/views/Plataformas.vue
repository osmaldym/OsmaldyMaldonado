<template>
    <div class="plats">
      <div class="divs">
        <div class="info">
          <div class="titleSect">
            <h1 class="link"><a href="#Plataformas">#</a></h1><h1>¡Te puedo crear lo que te imagines!</h1>
          </div>
          <ul>
            <li>Aplicaciones moviles (Android - Java)</li>
            <li>Aplicaciones de escritorio</li>
            <li>Sitios web:</li>
          </ul>
          <p>¡E-Commerces, blogs, institucionales, portafolios, wikis y mas!</p>

          <div class="tecs">
            <h1>Tecnologías que manejo:</h1>
            <div class="logos">
              <ul>
                <li class="imgCont"><div class="icono html"></div></li>
                <li class="imgCont"><div class="icono css"></div></li>
                <li class="imgCont"><div class="icono js"></div></li>
                <li class="imgCont"><div class="icono ts"></div></li>
                <li class="imgCont"><div class="icono react"></div></li>
                <li class="imgCont"><div class="icono vue"></div></li>
                <li class="imgCont"><div class="icono php"></div></li>
                <li class="imgCont"><div class="icono java"></div></li>
                <li class="imgCont"><div class="icono py"></div></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="graphs">
          <div class="all">
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
    </div>
</template>

<script>
  export default {
    name: 'PartPlats',
    data () {
      return {
        logos: null,
        logosUl: null,
        restWidth: 0
      }
    },
    mounted () { // On load
      this.obtYDesplazar()
    },
    methods: {
      preventAll(e){
        // Todos los prevent
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
      },

      addTransition(elem, ...args){
        let transition = 'all '

        if (args[0] != null || args[0] != undefined) transition += args[0] + ' '
        else transition += '0.5s '

        if (args[1] != null || args[1] != undefined) transition += args[1]
        else transition += 'ease-out'

        elem.style.transition = transition
      },
      
      quitTransition(elem){ elem.style.transition = 'none 0 ease' },

      revLeft(elem){ // Revision de si ya la propiedad left tiene datos
        if (elem.style.left != '') return parseInt(elem.style.left.replace('px'))
        return 0
      },

      obtYDesplazar(){
        this.logos = document.querySelector('.tecs > .logos')
        this.logosUl = document.querySelector('.logos > ul')
        this.restWidth = (this.logosUl.offsetWidth * -1) - (this.logos.offsetWidth * -1)

        this.addTransition(this.logosUl)

        setInterval(() => {
          let left = this.revLeft(this.logosUl)

          if (left >= this.restWidth) left = left - 10
          else left = 110

          this.logosUl.style.left = left + 'px'
        }, 100);
      },
    }
  }
</script>

<style scoped>
  .plats {
    --cel-Cam-Tam: 15px;
    --LOfCel: 3%;

    --size_p: 16pt;

    --gen-padding: 5px;
  }

  .info, .divs, .graphs, .acciones,
  .inputs, .pant, .notif, .botones,
  .pcs, .logos > ul {
    position: relative;
    display: flex;
  }

  p {
    color: var(--PColor);
    font-size: var(--size_p);
  }

  h1 {
    text-align: center;
  }

  .info h1, ul {
    margin-bottom: 20px;
  }

  ul {
    color: var(--TXTColor);
  }

  span {
    color: var(--PColor);
  }

  .plats, .info, .inputs, .pcs {
    flex-direction: column;
  }

  .info, .pant, .inputs, .botones {
    justify-content: center;
    align-items: center;
  }

  /* Parte de Plataformas */
  .tecs {
    width: 100%;
  }

  .logos {
    overflow: hidden;
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

  .logos > ul > li > .icono {
    background-color: var(--PColor);
  }

  /* Todos los SVG */
  .logos > ul > li > .html { mask: url('@/assets/lenguajes/html.svg') no-repeat center; }
  .logos > ul > li > .css { mask: url('@/assets/lenguajes/css.svg') no-repeat center; }
  .logos > ul > li > .js { mask: url('@/assets/lenguajes/js.svg') no-repeat center; }
  .logos > ul > li > .ts { mask: url('@/assets/lenguajes/ts.svg') no-repeat center; }
  .logos > ul > li > .php { mask: url('@/assets/lenguajes/php.svg') no-repeat center; }
  .logos > ul > li > .react { mask: url('@/assets/lenguajes/react.svg') no-repeat center; }
  .logos > ul > li > .vue { mask: url('@/assets/lenguajes/vue.svg') no-repeat center; }
  .logos > ul > li > .java { mask: url('@/assets/lenguajes/java.svg') no-repeat center; }
  .logos > ul > li > .py { mask: url('@/assets/lenguajes/py.svg') no-repeat center; }

  .divs, .info {
    height: 100%;
  }

  .info {
    width: 60%;
    padding: 5%;
  }

  .graphs {
    width: 100%;
    align-items: center;
    overflow: hidden;
  }

  .all {
    position: relative;
    width: 100%;
  }

  .pcs {
    gap: 25px;
    display: flex;
    align-items: center;
  }

  /* Todos los dispositivos */
  .app, .cel, .web {
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
    padding: 15px 0;
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

  .app, .web {
    width: 80vh;
    height: 300px;
  }

  /* Pantalla computador APP */
  .app > .pant {
    height: calc(100% - 35px);
  }

  .acciones {
    flex-direction: row-reverse;
    padding: var(--gen-padding);
  }

  /* Pantalla computador WEB */
  .web > .pant {
    height: calc(100% - 35px * 2);
  }

  .barra {
    width: 100%;
    height: 35px;
    background-color: var(--PColor);
  }

  .rep {
    padding: 25px;
    background-color: #fff;
    border-radius: 15px;
  }

  /* CELULAR */
  .cel{
    position: absolute;
    top: 10%;
    left: var(--LOfCel);
    width: 260px;
    height: 500px;
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

  @media (max-width: 1200px){
    .app, .web {
      width: 80%;
    }
  }

  @media (max-width: 800px){
    .plats, .divs {
      height: 100%;
    }

    .divs {
      flex-direction: column;
    }

    .info {
      width: 100%;
    }

    .info > ul {
      margin-left: 5%;
    }

    .graphs {
      height: 85vh;
    }
  }
</style>