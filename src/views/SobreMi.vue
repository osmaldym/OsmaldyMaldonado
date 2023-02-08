<template>
    <div class="sMi">
      <div class="parts">
        <div class="info">
          <div class="sm">
            <h1>SOBRE MI</h1>
            <p>Desde los 12 años me ha interesado la programacíon y desde esa edad, he estado creando y puliendo mis habilidades entorno a la programación, me gusta crear y estoy en constante aprendizaje sobre nuevas tecnologías.</p>
            <div class="otros">
              <ul>
                <li title="Experiencia general"><span class="material-symbols-outlined">grade</span><p>4 años</p></li>
                <li title="Nacimiento"><span class="material-symbols-outlined">cake</span><p>21-08-2005</p></li>
              </ul>
            </div>
          </div>
        </div>
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
  /* TODO */
  .parts, .info, .otros > ul > li{
    position: relative;
    display: flex;
  }
  
  .info{
    justify-content: center;
    align-items: center;
  }
  
  .sm > h1, .sm > p{
    text-align: center;
  }
  
  /* Sobre mi, parte */

  .me {
    position: relative;
    border-bottom: solid 3px var(--PColor);
  }

  .me > img {
    height: 100%;
  }
  
  .sm {
    padding: 15%;
    color: #fff;
  }
  
  .sm > h1 {
    border-top: solid 2px var(--PColor);
    margin: auto;
    margin-bottom: 10px;
    width: fit-content;
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
  }

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

    .parts, .parts > div, .info > .sm {
      width: 100%;
    }

    .me > img{
      height: 50vh;
    }
  }

  .parts, .parts > div {
    transition: all 0.5s ease-out;
  }
</style>