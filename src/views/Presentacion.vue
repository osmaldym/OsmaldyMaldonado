<template>
    <!-- Parte de presentación -->
    <div class="presentacion">
        <!-- Presentación de mi nombre -->
        <div class="nombreCont dashedBorder">
            <div class="nombre">
                <h1>FullStack Developer</h1>
                <h1>Osmaldy Maldonado</h1>
            </div>
        </div>

        <!-- Fragmentos de cara -->
        <div class="frags">
            <img class="m cabeza" src="../assets/fragments/cabeza.svg">
            <img class="anim der ojo" @click="setValor('Responsabilidad')" src="../assets/fragments/ojo.svg">
            <img class="anim izq eja" @click="setValor('Dedicación')" src="../assets/fragments/eja.svg">
            <img class="anim m izq nariz" @click="setValor('Cercanía')" src="../assets/fragments/nariz.svg">
            <img class="anim m der boca" @click="setValor('Adaptibilidad')" src="../assets/fragments/boca.svg">
            <img class="lineaCabeza" src="../assets/fragments/lineaCabeza.svg">
            <img class="cuelloC" src="../assets/fragments/cuelloC.svg">
            <img class="m cuelloCam" src="../assets/fragments/cuelloCam.svg">
        </div>
        <!-- Contenedor de imagen (Mitad) -->
        <div class="contImg">
            <img src="../assets/o1_m.png" alt="">
        </div>

        <!-- Valores a presentar al tocar fragmentos -->
        <div class="valores">
            <h1>{{ this.valor }}</h1>
            <div class="check">
                <span class="material-symbols-sharp">done</span>
            </div> 
        </div>
  </div>
</template>

<script>
  export default {
    name: 'PartPresentacion',
    data () { // Variables
        return {
            allFrags: [],
            anims: [],
            timeOutAnim: null,
            valoresCont: null,
            hideValor: null,
            valor: 'Contratame por favor. Necesito dinero 🙏🏻'
        }
    },
    mounted () { // Onload
        this.getElemsAndAnim()
    },
    methods: {
        // Metodo de onload para obtener elementos y animarlos
        getElemsAndAnim(){
            // Set time out para añadir los transition desde css y no desde js
            setTimeout(() => {
                this.allFrags = document.querySelector('.presentacion > .frags').childNodes
                this.valoresCont = document.querySelector('.presentacion > .valores')

                this.valoresCont.className += ' tall'

                this.allFrags.forEach((elem) => this.animFrag(elem));
                this.alertarUsuarioFrags();
            }, 50);
        },

        // Metodo para alertar que se puede tocar un elemento
        alertarUsuarioFrags(){
            let touch = this.$cookies.get('touchAnimFrags')

            this.allFrags.forEach(elem => {
                if (!elem.className.includes('tall')) elem.className += ' tall';

                if (elem.className.includes('anim')){
                    if (touch == 'true') elem.className = elem.className.replace(' pulsar', '')
                    else elem.className += ' pulsar'
                }
            })
        },

        // Poniendole valor etico, presentandolo y ocultandolo
        setValor(valor){
            this.valor = valor
            this.valoresCont.style.opacity = '1'
            
            clearTimeout(this.hideValor)

            this.hideValor = setTimeout(() => {
                this.valoresCont.style.opacity = '0'
            }, 3000)

            this.$cookies.set('touchAnimFrags', true, '4m')
            this.alertarUsuarioFrags()
        },

        // Obtiendo numeros random
        random(min, max){
            return Math.floor(Math.random() * (max - min) + min);
        },

        // Animando fragmentos
        animFrag(elem){
            setInterval(() => {
                let neg = -10, pos = 2

                let numX = this.random(neg, pos), 
                numY = this.random(neg, pos)

                elem.style.transform = 'translate(' + numX + 'px, ' + numY + 'px)'
            }, 1300);
        }
    }
  }
</script>

<style scoped>
    /* All */
    .presentacion {
        --top-nombre: 15%;
        --left-nombre: 5%;

        --tam-icon: 40px;
    }

    .frags, .contImg{
        height: 100vh;
        width: 50%;
        overflow: hidden;
    }

    .valores, .nombreCont, .valores > .check {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Parte de presentación */
    .contImg > img{
        height: 100%;
    }

    /*Nombre*/ 
    .nombre {
        background: -webkit-linear-gradient(-60deg, var(--PColor), #808080);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }

    .nombreCont {
        z-index: 999;
        position: absolute;

        flex-direction: column;

        padding: 15px;
        box-shadow: 0 0 15px #000;

        animation: nombreMove 1s ease-out;

        top: var(--top-nombre);
        left: var(--left-nombre);
    }

    @keyframes nombreMove {
        0% { left: -30% }
        100% { left: var(--left-nombre); }
    }

    /*Fragmentos*/
    .frags {
        position: relative;
    }

    .frags > img {
        position: absolute;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

    .frags > .m {
        right: 5px;
    }

    .frags > .cabeza{
        z-index: 0;
        top: 7%;
        height: 65%;
    }

    .frags > .lineaCabeza{
        z-index: 1;
        top: 25%;
        right: 50px;
        height: 15%;
    }

    .frags > .eja {
        z-index: 2;
        right: 20px;
        top: 34%;
        height: 5.3%;
    }

    .presentacion > .frags > .ojo {
        z-index: 3;
        right: 30px;
        top: 39%;
        height: 2.6%;
    }

    .frags > .nariz {
        z-index: 4;
        top: 38%;
        height: 16%;
    }

    .frags > .boca{
        z-index: 5;
        top: 57%;
        height: 6%;
    }

    .frags > .cuelloC{
        z-index: 6;
        bottom: 0;
        height: 37%;
        right: 120px;
    }

    .frags > .cuelloCam{
        bottom: 14.5%;
        height: 10%;
    }

    .frags > .anim {
        cursor: pointer;
    }


    /* Parte de los valores */
    .valores {
        opacity: 0;
        position: absolute;
        bottom: var(--top-nombre);
        right: var(--left-nombre);
    } 

    .valores > h1 {
        text-shadow: 0 0 0px #222;
        text-decoration: underline;
    }

    .valores > .check {
        height: var(--tam-icon);
        width: var(--tam-icon);
        border-radius: var(--tam-icon);
        margin-left: 5px;
        border: solid 2px var(--PColor);
    }

    .valores > .check > span {
        font-size: 28pt;
        color: var(--PColor);
    }

    .frags > .izq:hover {
        transform: scale(1.1) rotate(-5deg);
    }

    .frags > .der:hover {
        transform: scale(1.1) rotate(5deg);
    }

    /* Animaciones y transiciones */
    .nombreCont {
        transition: all 0.3s ease-out;
    }

    .tall {
        transition: all 1.3s ease-out;
    }

    .pulsar {
        animation: pulsar 1.5s ease-out 4s 5;
    }

    @keyframes pulsar {
        0% { filter: contrast(0); }
        100% { filter: contrast(1); }
    }

    /* Responsive */
    @media (max-width: 800px){
        .nombreCont {
            top: 15px;
            left: 10%;
            right: 10%;
        }

        @keyframes nombreMove {
            0% { 
                left: -30%;
                right: 50%;
            }
            100% { 
                left: 10%;
                right: 10%;
            }
        }

        .valores {
            bottom: 50px;
        }
    }
</style>