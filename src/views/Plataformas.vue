<template>
    <!-- Parte de plataformas -->
    <div class="plats" id="Plataformas">
      <!-- Divisiones de información y tecnologías -->
      <div class="divs">
        <!-- Información -->
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

          <!-- Tecnologías -->
          <div class="tecs">
            <h1>Tecnologías que manejo:</h1>
            <div class="logos">
              <ul>
                <li class="imgCont"><div class="bgYears"><h2>HTML5 <br/>4+ Years</h2></div><div class="icono html"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>CSS3 <br/>4+ Years</h2></div><div class="icono css"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>JavaScript <br/>3+ Years</h2></div><div class="icono js"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>TypeScript <br/>1- Year</h2></div><div class="icono ts"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>React <br/>1- Year</h2></div><div class="icono react"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>Vue <br/>1- Year</h2></div><div class="icono vue"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>PHP <br/>1- Year</h2></div><div class="icono php"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>Java <br/>3+ Years</h2></div><div class="icono java"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>Python <br/>1- Years</h2></div><div class="icono py"></div></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Parte de presentacion de dispositivos -->
        <div class="graphs">
          <!-- Contenedor de todo -->
          <div class="all">
            <!-- Compuutadoras (Web y App) -->
            <div class="pcs">
              <!-- Aplicación -->
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

              <!-- WEB -->
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

            <!-- Celular -->
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
    data () { // Variables
      return {
        logos: null,
        logosUl: null,
        restWidth: 0
      }
    },
    mounted () { // Onload
      this.obtYDesplazar()
    },
    methods: {
      // Todos los prevent
      preventAll(e){
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
      },

      // Metodo para añadir transición automáticamente
      addTransition(elem){ elem.style.transition = 'all 0.5s ease-out' },
      
      // Quitar transición automáticamente
      quitTransition(elem){ elem.style.transition = 'none 0 ease' },

      // Revision de si ya la propiedad left tiene datos
      revLeft(elem){ 
        if (elem.style.left != '') return parseInt(elem.style.left.replace('px'))
        return 0
      },

      /*
       Obteniendo elementos de las tecnologías que sé, y moviendolas como un
       slider
      */
      obtYDesplazar(){
        this.logos = document.querySelector('.tecs > .logos')
        this.logosUl = document.querySelector('.logos > ul')
        this.restWidth = (this.logosUl.offsetWidth * -1) - (this.logos.offsetWidth * -1)

        this.addTransition(this.logosUl)

        let isPressed = false;

        const downList = () => {
          isPressed = true;

          this.logos.addEventListener('mousemove', moveList)
          window.addEventListener('mouseup', upList)
          window.addEventListener('mousemove', moveList)
        }

        const upList = () => {
          isPressed = false
        }

        const moveList = (e) => {
          if (isPressed){
            this.preventAll(e)
            this.logos.scrollLeft += e.movementX * -1
            console.log(e.movementX)
          }
        }

        this.logosUl.addEventListener('mousedown', downList)
      },
    }
  }
</script>

<style scoped>
  /* All */
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

  .info, .pant, .inputs, .botones,
  .logos > ul > li, .bgYears {
    justify-content: center;
    align-items: center;
  }

  /* Parte de Plataformas */
  .tecs {
    width: 100%;
  }

  .logos {
    overflow: hidden;
    overflow-x: scroll;
    position: relative;
    height: 20vh;
  }

  .logos::-webkit-scrollbar{
    display: none;
  }

  .logos > ul {
    list-style: none;
    position: absolute;
    gap: 15px;
    left: 0;
  }

  .logos > ul > li,
  .logos > ul > li > .bgYears{
    display: flex;
  }

  .logos > ul > li {
    width: 20vh;
    height: 20vh;
    overflow: hidden;
    border-radius: 15px;
  }

  .logos > ul > li > .icono {
    border-radius: 15px;
    width: 18vh;
    height: 18vh;
    background-color: var(--PColor);

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .logos > ul > li > .bgYears {
    opacity: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    font-size: 14pt;

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
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

  .info > p {
    font-weight: bold;
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
    align-items:ª center;
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

  /* Hovers */
  .logos > ul > li > .bgYears:hover {
    opacity: 1;
  }

  /* Transition */
  .logos > ul > li > .bgYears {
    transition: all 0.5s ease-out;
  }

  /* Responsive */
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