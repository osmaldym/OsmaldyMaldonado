<template>
    <!-- Parte de contactos -->
    <div class="contactos" id="Contactos">
      <!-- Titulo -->
      <div class="titleSect">
        <h1 class="link"><a href="#Contactos">#</a></h1><h1 class="title">Contactos</h1>
      </div>
      <!-- Presentacion de informacion adsequible (número telefónico, y gmail) -->
      <div class="basicos">
        <div class="b mail">
          <div onclick="location.href = 'mailto:osmaldy11checo@gmail.com'">
            <span class="material-symbols-sharp">mail</span><p><span>osmaldy11checo</span><span>@gmail.com</span></p>
          </div>
        </div>
      </div>
      <!-- "Formulario" para enviar un correo electronico desde la misma web -->
      <div class="cDirecto">
        <h1>Contacto <span>directo</span></h1>
        <form v-on:submit="enviarEmail">
          <fieldset>
            <legend> <!--Vacío porque xd--> </legend>
            <input name="name" type="text" pattern="[^0-9_ ]{1,}|[^0-9_ ]{1,}[ ][^0-9_ ]{1,}" placeholder="Nombre" minlength="4" maxlength="50" required/>
            <input name="email" type="email" pattern="[^0-9_ ]{1,}|+@gmail.com" placeholder="Email" minlength="12" required/>
            <button type="submit">Enviar</button>
            </fieldset>
          <fieldset>
            <textarea name="message" placeholder="Mensaje" minlength="4" maxlength="3000" required></textarea>
          </fieldset>
        </form>
      </div>

      <!-- Footer con demas redes y etc... -->
      <footer>
          <div class="redes">
            <h1>Redes <span>sociales</span></h1>
            <ul>
              <li class="imgCont"><div @click="openPage('linkedin.com/in/osmaldy-maldonado-6b4950247/')" class="icono link"></div></li>
              <li class="imgCont"><div @click="openPage('youtube.com/@Osma17')" class="icono yt"></div></li>
              <li class="imgCont"><div @click="openPage('facebook.com/osmaldy.maldonado')" class="icono fb"></div></li>
              <li class="imgCont"><div @click="openPage('twitter.com/Osmaldy_m')" class="icono tw"></div></li>
              <li class="imgCont"><div @click="openPage('instagram.com/osmaldym')" class="icono ig"></div></li>
            </ul>
          </div>
          <div class="copy">
            <p> ¿Bro?, ¿como llegaste a ver esto? 🤨</p>
          </div>
      </footer>
    </div>
</template>

<script>
  // Importaciones
  import emailjs from 'emailjs-com'

  export default {
    name: 'PageContactos',
    data () { // Variables
      return {
        inputs: [],
        copyText: null,
        name: '',
        email: '',
        message: ''
      }
    },
    mounted () { // Onload
      this.loadAll(),
      this.setCopyAndYear()
    },
    methods: {
      // Metodo de onload
      loadAll(){
        this.inputs = document.querySelectorAll('form > fieldset > input')
        this.copyText = document.querySelector('footer > .copy > p')
        this.addAllValuesForm()
      },

      // Metodo para automatizar la apertura de un link
      openPage(url){
        window.open('https://' + url)
      },

      // Añadiendo las cookies del sitio a inputs del form
      addAllValuesForm(){
        let nombreC = this.$cookies.get('nombre'),
        emailC = this.$cookies.get('email')

        if (nombreC != null && emailC != null){
          this.inputs[0].value = nombreC
          this.inputs[1].value = emailC
        }
      },

      // Añadiendo cookies al sitio
      setAllValuesCookies(){
        this.$cookies.set('nombre', this.inputs[0].value, '1w')
        this.$cookies.set('email', this.inputs[1].value, '1w')
      },

      // Metodo para envío de emails
      enviarEmail(){
        try {
          this.setAllValuesCookies()
          
          emailjs.sendForm(
            "gmail",
            "cd_om",
            "form",
            "cuFIa5BMYmlTuJ2o-",
            {
              name: this.name,
              email: this.email,
              message: this.message
            }
          )
          alert('Se ha enviado el email correctamente, gracias por contactarme 😀')
        } catch (error) {
          alert(error)
        }

        this.addAllValuesForm()

        this.name = ''
        this.email = ''
        this.message = ''
      },

      // Añadiendo dinámicamente el copyright y el año
      setCopyAndYear(){
        this.copyText.innerText = 'Copyright © Todos los derechos reservados - ' + new Date().getFullYear()
      }
    },
  }
</script>

<style scoped>
  /* All */
  .contactos {
    --borderGen: 10px;
    --marginIT: 5px;
    --marginFormB: 10px;
    --paddingRightGen: 10px;
  }

  /* Generales */
  fieldset, input, textarea, button {
    border: 0;
    outline: none;
  }

  button {
    background-color: initial;
    color: var(--TXTColor);
    padding: 10px;
    cursor: pointer;
  }

  .basicos, .cDirecto, footer{
    padding: 0 3%;
  }

  h1:not(.title) {
    color: var(--TXTColor);
  }

  p {
    font-size: 18pt;
  }

  input, textarea,
  form > fieldset > button {
    font-size: 16px;
  }

  /* Parte de contactos */
  .contactos {
    flex-direction: column;
  }

  .titleSect {
    margin-top: 10px;
    text-align: center;
    justify-content: center;
  }

  /* Parte de contactos basicos */
  .b {
    width: 100%;
    padding-right: var(--paddingRightGen);
    color: var(--TXTColor);
  }

  .b > div > p {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .b > div > span {
    font-size: 28pt;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    color: var(--PColor);
    padding-right: 5px;
  }

  .basicos, .b > div {
    display: flex;
    align-items: center;
    height: 100%;
  }

  /* Parte de contacto directo */
  .cDirecto {
    height: 100%;
    flex-direction: column;
  }

  .cDirecto, form > fieldset{
    display: flex;
    justify-content: center;
  }

  .cDirecto > h1 {
    margin-bottom: var(--marginFormB);
  }

  .cDirecto > h1 > span{
    color: var(--PColor);
  }

  form {
    display: flex;
  }

  form > fieldset {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  
  form > fieldset > input,
  form > fieldset > button {
    margin-right: var(--marginIT);
  }

  form > fieldset > textarea {
    resize: none;
    margin-left: var(--marginIT);
  }

  form > fieldset > input,
  form > fieldset > textarea {
    width: 100%;
    color: var(--TXTColor);
    background-color: var(--PColor);
    padding: 10px;
  }

  form > fieldset > input {
    margin-bottom: 10px;
    border-top-left-radius: var(--borderGen);
    border-bottom-left-radius: var(--borderGen);
  }

  form > fieldset > button {
    font-weight: bold;
  }

  form > fieldset > textarea {
    height: 100%;
    border-bottom-right-radius: var(--borderGen);
    border-top-right-radius: var(--borderGen);
  }

  /* Footer */
  footer, footer > .redes {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--paddingRightGen);
  }

  footer {
    background-color: var(--PColor);
    overflow: hidden;
  }

  footer > .redes {
    padding-top: var(--paddingRightGen);
  }

  footer > .redes > ul {
    list-style: none;
    width: 100%;
    display: flex;
    gap: 15px;
  }

  footer > .redes > ul > li {
    height: 30px;
    width: 30px;
  }

  footer > .redes > ul > li > .icono {
    cursor: pointer;
    background-color: var(--SColor);
  }

  footer > .redes > ul > li > .link { mask: url('@/assets/redes/link.svg'); }
  footer > .redes > ul > li > .yt { mask: url('@/assets/redes/yt.svg'); }
  footer > .redes > ul > li > .tw { mask: url('@/assets/redes/tw.svg'); }
  footer > .redes > ul > li > .fb { mask: url('@/assets/redes/fb.svg'); }
  footer > .redes > ul > li > .ig { mask: url('@/assets/redes/ig.svg'); }

  footer > .redes > h1 > span {
    color: var(--SColor);
  }

  footer > .copy > p {
    text-align: center;
    color: var(--TXTColor);
    font-size: 12pt;
    padding: 5px;
  }

  /* Animaciones */
  button:hover {
    color: var(--PColor);
  }
  
  footer > .redes > ul > li > .icono:hover {
    background-color: var(--TXTColor);
  }

  button, .icono {
    transition: all 0.3s ease-out;
  }

  /* Responsive */
  @media (max-width: 800px){
    button, .icono {
      transition: all 0s ease-out;
    }
  }
</style>