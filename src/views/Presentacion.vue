<template>
    <!-- Parte de presentación -->
    <div class="presentacion">
        <!-- Presentación de mi nombre -->
        <div class="nombre">
            <h1>FullStack Developer</h1>
            <h1>Osmaldy Maldonado</h1>
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
            this.allFrags = document.querySelector('.presentacion > .frags').childNodes
            this.valoresCont = document.querySelector('.presentacion > .valores')

            this.valoresCont.style.opacity = '0'

            this.allFrags.forEach((elem) => this.animFrag(elem));
        },

        // Poniendole valor etico, presentandolo y ocultandolo
        setValor(valor){
            this.valoresCont.style.transition = 'all 0.8s ease-out'
            this.valor = valor
            this.valoresCont.style.opacity = '1'
            
            clearTimeout(this.hideValor)

            this.hideValor = setTimeout(() => {this.valoresCont.style.opacity = '0'}, 3000)
        },

        // Obtiendo numeros random
        random(min, max){
            return Math.floor(Math.random() * (max - min) + min);
        },

        // Animando fragmentos
        animFrag(elem){
            elem.style.transition = 'all 1.5s ease'

            setInterval(() => {
                let neg = -10, pos = 2

                let numX = this.random(neg, pos), 
                numY = this.random(neg, pos)

                elem.style.transform = 'translate(' + numX + 'px, ' + numY + 'px)'
            }, 1500);
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

    .valores, .nombre, .valores > .check {
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
        z-index: 999;
        position: absolute;

        flex-direction: column;

        border: solid 3px var(--PColor);
        border-style: dashed;
        border-radius: 15px;
        padding: 15px;

        background: -webkit-linear-gradient(-60deg, var(--PColor), #fff);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;

        top: var(--top-nombre);
        left: var(--left-nombre);
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

    .frags > .anim,
    .nombre {
        transition: all 0.3s ease-out;
    }

    /* Responsive */
    @media (max-width: 800px){
        .nombre {
            top: 15px;
            left: 25%;
            right: 25%;
        }

        .valores {
            bottom: 50px;
        }
    }
</style>