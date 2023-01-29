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

<style>
  /* TODO */
  .sMi > .parts,
  .sMi > .parts > .info,
  .sMi > .parts > .info > .sm > .otros > ul > li{
      position: relative;
      display: flex;
  }
  
  .sMi > .parts > .info{
      justify-content: center;
      align-items: center;
  }
  
  .sMi > .parts > .info > .sm > h1,
  .sMi > .parts > .info > .sm > p{
      text-align: center;
  }
  
  .sMi > .parts > div{
      height: 100vh;
      width: 50%;
  }
  
  
  /* Sobre mi parte */
  .sMi > .parts > .me{
      overflow: hidden;
      border-bottom: solid 3px var(--PColor);
  }
  
  .sMi > .parts > .info,
  .sMi > .parts > .me{
      width: 100%;
      height: 100%;
  }
  
  .sMi > .parts > .me > img{
      height: 100%;
  }
  
  .sMi > .parts > .me > .codeRep{
      position: absolute;
      font-size: 238pt;
      right: 15%;
  }
  
  .sMi > .parts > .info > .sm{
      padding: 15%;
      color: #fff;
  }
  
  .sMi > .parts > .info > .sm > h1{
      border-top: solid 2px var(--PColor);
      margin: auto;
      margin-bottom: 10px;
      width: fit-content;
  }
  
  .sMi > .parts > .info > .sm > .otros > ul > li{
      padding: 10px 0;
      list-style: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
  }
  
  .sMi > .parts > .info > .sm > .otros > ul > li > p{
      color: var(--PColor);
      margin-left: 5px;
  }
</style>