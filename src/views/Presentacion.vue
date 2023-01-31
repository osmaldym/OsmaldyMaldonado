<template>
  <div class="presentacion">
      <div class="nombre">
        <h1>FullStack Developer</h1>
        <h1>Osmaldy Maldonado</h1>
      </div>

      <div class="frags">
        <img class="m cabeza" src="../assets/fragments/cabeza.svg">
        <img class="anim der ojo" src="../assets/fragments/ojo.svg">
        <img class="anim izq eja" src="../assets/fragments/eja.svg">
        <img class="anim m izq nariz" src="../assets/fragments/nariz.svg">
        <img class="anim m der boca" src="../assets/fragments/boca.svg">
        <img class="lineaCabeza" src="../assets/fragments/lineaCabeza.svg">
        <img class="cuelloC" src="../assets/fragments/cuelloC.svg">
        <img class="m cuelloCam" src="../assets/fragments/cuelloCam.svg">
      </div>
      <div class="contImg">
        <img src="../assets/o1_m.png" alt="">
      </div>
  </div>
</template>

<script>
  export default {
    name: 'PartPresentacion'
  }
</script>

<style>
  /* Todo */
  .presentacion, .sMi, .plats, .contactos{
      position: relative;
      display: flex;
  }

  .presentacion > .frags,
  .presentacion > .contImg{
      height: 100vh;
      width: 50%;
  }

  /* Parte de presentación */
  .presentacion > .contImg > img{
      height: 100%;
  }

   /*Nombre*/ 
  .presentacion > .nombre {
      position: absolute;

      border: solid 3px var(--PColor);
      border-style: dashed;
      border-radius: 15px;
      padding: 15px;

      background: -webkit-linear-gradient(-60deg, var(--PColor), #fff);
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;

      top: 15%;
      left: 5%;
  }

   /*Fragmentos*/
  .presentacion > .frags {
      position: relative;
  }

  .presentacion > .frags > img {
      position: absolute;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
  }

  .presentacion > .frags > .m {
      right: 5px;
  }

  .presentacion > .frags > .cabeza{
      z-index: 0;
      top: 7%;
      height: 65%;
  }

  .presentacion > .frags > .lineaCabeza{
      z-index: 1;
      top: 25%;
      right: 6%;
      height: 15%;
  }

  .presentacion > .frags > .eja {
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

  .presentacion > .frags > .nariz {
      z-index: 4;
      top: 38%;
      height: 16%;
  }

  .presentacion > .frags > .boca{
      z-index: 5;
      top: 57%;
      height: 6%;
  }

  .presentacion > .frags > .cuelloC{
      z-index: 6;
      bottom: 0;
      height: 37%;
      right: 16.5%;
  }

  .presentacion > .frags > .cuelloCam{
      bottom: 14.5%;
      height: 10%;
  }

  .presentacion > .frags > .anim {
      cursor: pointer;
  }

  .presentacion > .frags > .izq:hover {
      transform: scale(1.1) rotate(-5deg);
  }

  .presentacion > .frags > .der:hover {
      transform: scale(1.1) rotate(5deg);
  }

  .presentacion > .frags > .anim {
      transition: all 0.3s ease-out;
  }
</style>