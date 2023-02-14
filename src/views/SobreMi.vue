<template>
    <!-- Parte de sobre mi -->
    <div class="sMi" id="Sobre_mi">
      <!-- Divisiones -->
      <div class="parts">
        <!-- Información sobre mí -->
        <div class="info">
          <div class="sm">
            <div class="titleSect">
              <h1 class="link"><a href="#Sobre_mi">#</a></h1><h1 class="title">SOBRE MI:</h1>
            </div>
            <p>Desde los 12 años me ha interesado la programacíon y desde esa edad, he estado creando y puliendo mis habilidades entorno a la programación, me gusta crear y estoy en constante aprendizaje sobre nuevas tecnologías.</p>
            <div class="otros">
              <ul>
                <li title="Experiencia general"><span class="material-symbols-outlined">grade</span><p>4+ años</p></li>
                <li title="Nacimiento"><span class="material-symbols-outlined">cake</span><p>21-08-2005</p></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Imagen completa de mí -->
        <div class="me">
          <img src="../assets/o2.png" alt="Imagen de Osmaldy Maldonado">
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'SobreMi'
  }
</script>

<style scoped>
  /* All */
  .parts, .info, .otros > ul > li, .me{
    position: relative;
    display: flex;
  }
  
  .info, .me{
    width: 50%;
    justify-content: center;
    align-items: center;
  }
  
  .sm > h1, .sm > p{
    text-align: center;
    text-shadow: 0 0 5px var(--SColor);
  }
  
  /* Sobre mi, parte */
  .me {
    z-index: -1;
    position: absolute;
    right: 0;
    height: 100%;
  }

  .me > img {
    position: absolute;
    right: 0;
    height: 100%;
    border-bottom: solid 3px var(--PColor);
  }
  
  .sm {
    padding: 15%;
    color: var(--TXTColor);
  }
  
  .titleSect {
    margin: auto;
    margin-bottom: 10px;
    width: fit-content;
  }

  .title {
    border-top: solid 2px var(--PColor);
  }
  
  .otros > ul > li {
    padding: 10px 0;
    list-style: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }
  
  .otros > ul > li > p{
    color: var(--PColor);
    margin-left: 5px;
    font-weight: bold;
  }

  /* Responsive */
  @media (max-width: 800px){
    .sMi {
      height: 100%;
    }

    .parts {
      height: 100%;
      flex-direction: column;
    }

    .parts > .info {
      height: 20%;
    }

    .me, .me > img {
      position: relative;
    }

    .parts, .parts > div, .info > .sm, .me > img {
      width: 100%;
    }
  }

  .parts, .parts > div {
    transition: all 0.5s ease-out;
  }
</style>