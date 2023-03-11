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
            <span class="arrow">➜</span>
            <li class="app">Aplicaciones de escritorio</li>
            <li class="appM">Aplicaciones moviles (Android / Java)</li>
            <li class="web">Sitios web</li>
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
                <li class="imgCont"><div class="bgYears"><h2>Python <br/>1- Year</h2></div><div class="icono py"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>Flask <br/>1- Year</h2></div><div class="icono flask"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>ORMLite <br/>1- Year</h2></div><div class="icono ormlite"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>Firebase <br/>1- Year</h2></div><div class="icono firebase"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>MySQL <br/>3+ Years</h2></div><div class="icono mysql"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>SQLite <br/>2+ Years</h2></div><div class="icono sqlite"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>SQL Server <br/>3+ Years</h2></div><div class="icono msqlserver"></div></li>
                <li class="imgCont"><div class="bgYears"><h2>PostreSQL <br/>1- Years</h2></div><div class="icono psql"></div></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Parte de presentacion de dispositivos -->
        <div class="graph">
          <div class="device">
            <div class="cam"></div>
            <div class="btnsPc">
              <span class="material-symbols-outlined">minimize</span>
              <span class="material-symbols-outlined">crop_square</span>
              <span class="material-symbols-outlined">close</span>
            </div>
            <div class="tabWeb">
              <div class="outerBorder">
                <div class="border left"></div>
              </div>
              <div class="content">
                <span class="material-symbols-outlined">square</span>
                <p>Hello world!</p>
                <span class="material-symbols-outlined">close</span>
              </div>
              <div class="outerBorder">
                <div class="border right"></div>
              </div>
              <div class="addBtn">
                <span class="material-symbols-outlined">add</span>
              </div>
            </div>
            <div class="webBar">
                <span class="material-symbols-outlined">navigate_before</span>
                <span class="material-symbols-outlined">navigate_next</span>
                <span class="material-symbols-outlined">refresh</span>
                <div class="search">
                  <span class="material-symbols-outlined">square</span>
                  <p>www.helloword.com/</p>
                </div>
                <span class="material-symbols-outlined">extension</span>
                <span class="material-symbols-outlined">account_circle</span>
                <span class="material-symbols-outlined">more_vert</span>
              </div>
            <div class="pant">
              <h1>Hello world! <span>😃</span> </h1>
            </div>
            <div class="btnsAnd">
              <span class="material-symbols-outlined">arrow_left</span>
              <span class="material-symbols-outlined">circle</span>
              <span class="material-symbols-outlined">crop_square</span>
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
          }
        }

        this.logosUl.addEventListener('mousedown', downList)
      }
    }
  }
</script>

<style scoped>
  /* All */
  .plats {
    --size_p: 16pt;
  }

  .info, .divs, .graph, .device,
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

  .titleSect > h1,
  ul {
    margin-bottom: 20px;
  }

  ul {
    color: var(--TXTColor);
  }

  span {
    color: var(--PColor);
  }

  .plats, .info, .pcs {
    flex-direction: column;
  }

  .info, .pant,
  .logos > ul > li, .bgYears {
    justify-content: center;
    align-items: center;
  }

  .titleSect > h1,
  .info > p{
    color: var(--TXTColor);
  }

  /* Parte de Plataformas */
  .tecs {
    width: 100%;
  }

  .tecs > h1 {
    margin: 10px 0;
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
  .logos > ul > li > .flask { mask: url('@/assets/lenguajes/flask.svg') no-repeat center; }

  .logos > ul > li > .ormlite { mask: url('@/assets/lenguajes/ormlite.svg') no-repeat center; }
  .logos > ul > li > .firebase { mask: url('@/assets/lenguajes/firebase.svg') no-repeat center; }
  .logos > ul > li > .mysql { mask: url('@/assets/lenguajes/mysql.svg') no-repeat center; }
  .logos > ul > li > .sqlite { mask: url('@/assets/lenguajes/sqlite.svg') no-repeat center; }
  .logos > ul > li > .msqlserver { mask: url('@/assets/lenguajes/msqlserver.svg') no-repeat center; }
  .logos > ul > li > .psql { mask: url('@/assets/lenguajes/psql.svg') no-repeat center; }

  .divs, .info {
    height: 100%;
  }

  /* Info part */
  .info {
    width: 100%;
    padding: 15px;
  }

  .info > p {
    font-weight: bold;
  }

  .info > ul {
    list-style: none;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .info > ul > li {
    font-weight: bold;
  }

  .info > ul > .arrow {
    position: absolute;
    margin-left: -25px;
    
    height: 70%;
    
    font-size: 16pt;
    color: var(--PColor);

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    animation-name: moveArrow;
  }

  .info > ul > .app {
    animation-name: changeColorApp;
  }

  .info > ul > .appM {
    animation-name: changeColorAppM;
  }

  .info > ul > .web {
    animation-name: changeColorWeb;
  }

  .graph {
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  /* Device part */
  .device,
  .device > *, 
  .btnsPc > *,
  .webBar > *, 
  .tabWeb > *,
  .btnsAnd > *,
  .info > ul > * {
    animation-duration: 4s;
    animation-direction: ease-out;
    animation-iteration-count: infinite;
  }
  .device {
    flex-direction: column;
    border: solid 3px var(--PColor);
    overflow: hidden;

    animation-name: animDevice;
  }

  .cam {
    border-radius: 15px;
    background-color: var(--PColor);
    margin: 5px auto;

    animation-name: animCam;
  }

  .btnsPc {
    position: absolute;

    animation-name: animBtnsPC;
  }

  .btnsPc > span {
    animation-name: animBtnsPCSpan;
  }

  .btnsAnd > span {
    animation-name: animBtnsAndSpan;
  }

  .btnsPc > span,
  .btnsAnd > span{
    color: var(--PColor);
  }

  .webBar > span {
    color: var(--TXTColor);
  }

  .pant {
    width: 70%;
    margin: auto;
  }

  .tabWeb {
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    position: absolute;

    animation-name: animTabWeb;
  }

  .tabWeb > .outerBorder,
  .tabWeb > .outerBorder > .border {
    width: 5px;
    height: 5px;
  }

  .tabWeb > .outerBorder {
    background-color: var(--PColor);
  }

  .tabWeb > .outerBorder > .border {
    background-color: var(--SColor);
  }

  .tabWeb > .outerBorder > .left {
    border-bottom-right-radius: 5px;
  }

  .tabWeb > .outerBorder > .right {
    border-bottom-left-radius: 5px;
  }

  .tabWeb > .addBtn {
    display: flex;
    align-items: center;

    animation-name: animAddBtn;
  }

  .tabWeb > .content {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    animation-name: animTabWebContent;
  }

  .tabWeb > p, .tabWeb > span, 
  .tabWeb > .addBtn > span,
  .tabWeb > .content > p,
  .tabWeb > .content > span,
  .search > p, 
  .search > span {
    color: var(--TXTColor);
    font-size: 8pt;
  }

  .webBar, .webBar > .search {
    display: flex;
    align-items: center;
  }

  .webBar {
    width: 100%;
    position: absolute;

    animation-name: animWebBar;
  }

  .webBar > .search {
    display: flex;
    overflow: hidden;
    animation-name: animWebBarSearch;
  }

  .webBar > .search > p,
  .webBar > .search > span{
    color: #000;
  }

  .btnsAnd {
    display: flex;
    margin: 5px auto;
    animation-name: animBtnsAnd;
  }

  /* Animations */
  
  @keyframes moveArrow {
    0%, 10%, 100% {
      transform: translateY(-3px);
    }

    50% {
      transform: translateY(50%);
    }

    90% {
      transform: translateY(100%);
    }
  }

  @keyframes changeColorApp {
    50%, 90% {
      color: var(--TXTColor);
    }

    0%, 10%, 100% {
      color: var(--PColor);
    }
  }

  @keyframes changeColorAppM {
    0%, 10%, 90%, 100% {
      color: var(--TXTColor);
    }

    50% {
      color: var(--PColor);
    }
  }

  @keyframes changeColorWeb {
    0%, 10%, 50%, 100%  {
      color: var(--TXTColor);
    }

    90% {
      color: var(--PColor);
    }
  }

  @keyframes animDevice {
    0%, 10%, 90%, 10%, 90%, 100% {
      width: 95%;
      height: 300px;
    }

    50% {
      border-radius: 25px;
      width: 300px;
      height: 550px;
    }
  }

  @keyframes animCam {
    0%, 10%, 90%, 10%, 90%, 100% {
      opacity: 0;
      width: 0;
      height: 0;
    }

    50% {
      opacity: 1;
      width: 15px;
      height: 15px;
    }
  }

  @keyframes animBtnsPC {
    0%, 10%, 90%, 100% {
      opacity: 1;
      top: 5px;
      right: 5px;
    }

    50% {
      opacity: 0;
      top: 0;
      right: 0;
    }
  }

  @keyframes animBtnsAndSpan {
    0%, 10%, 90%, 100% {
      font-size: 0pt;
    }

    50% {
      font-size: 18pt;
    }
  }

  @keyframes animBtnsPCSpan {
    0%, 10%, 90%, 100% {
      font-size: 18pt;
    }

    50% {
      font-size: 0pt;
    }
  }

  @keyframes animTabWeb {
    0%, 10%, 50%, 100% {
      opacity: 0;
      height: 0;
      top: 0;
      left: 0;
    }

    90% {
      opacity: 1;
      height: 25px;
      top: 9px;
    }
  }

  @keyframes animTabWebContent {
    0%, 10%, 50%, 100% {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      background-color: inherit;
      height: 0;
      width: 0;
      gap: 0;
    }

    90% {
      background-color: var(--PColor);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      width: 110px;
      height: 25px;
      gap: 5px;
    }
  }

  @keyframes animAddBtn {
    0%, 10%, 50%, 100% {
      opacity: 0;
      height: 0;
    }

    90% {
      opacity: 1;
      height: 25px;
    }
  }

  @keyframes animWebBar {
    0%, 10%, 50%, 100% {
      opacity: 0;
      padding: 0;
      background-color: inherit;
      top: 0;
      left: 0;
      gap: 0;
    }

    90% {
      opacity: 1;
      padding: 2px;
      background-color: var(--PColor);
      top: 33px;
      left: 0;
      gap: 10px;
    }
  }

  @keyframes animWebBarSearch {
    0%, 10%, 50%, 100%{
      opacity: 0;
      padding: 0;
      border-radius: 0;
      background-color: inherit;
      width: 0;
      top: 0;
      left: 0;
      gap: 0;
    }

    90% {
      opacity: 1;
      padding: 5px;
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.7);
      width: 100%;
      top: 25px;
      left: 0;
      gap: 10px;
    }
  }

  @keyframes animBtnsAnd {
    0%, 10%, 90%, 100% {
      opacity: 0;
      gap: 0;
    }

    50% {
      opacity: 1;
      gap: 10px;
    }
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
      list-style: disc;
      margin-left: 5%;
    }

    .info > ul > li {
      animation: none;
      color: var(--PColor);
    }

    .info > ul > .arrow {
      opacity: 0;
    }

    .graph {
      height: 85vh;
    }
  }
</style>