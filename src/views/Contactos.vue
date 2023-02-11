<template>
    <div class="contactos">
      <div class="titleSect">
        <h1 class="link"><a href="#Contactos">#</a></h1><h1 class="title">Contactos</h1>
      </div>
      <div class="basicos">
        <div class="b num"><span class="material-symbols-sharp">call</span><p>+1 809-370-1462</p></div>
        <div class="b mail"><span class="material-symbols-sharp">mail</span><p>osmaldy11checo@gmail.com</p></div>
      </div>
      <div class="cDirecto">
        <h1>Contacto <span>directo</span></h1>
        <form v-on:submit="enviarEmail">
          <fieldset>
            <legend><!--Vacío porque xd--></legend>
            <input name="name" type="text" placeholder="Nombre"/>
            <input name="email" type="email" pattern="+@gmail.com" placeholder="Email"/>
            <button type="submit">Enviar</button>
            </fieldset>
          <fieldset>
            <textarea name="message" placeholder="Mensaje"></textarea>
          </fieldset>
        </form>
      </div>

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
            <p>Copyright © Todos los derechos reservados - 2022</p>
        </div>
    </footer>
    </div>
</template>

<script>
  import emailjs from 'emailjs-com'

  export default {
    name: 'PageContactos',
    data () {
      return {
        inputs: [],
        name: '',
        email: '',
        message: ''
      }
    },
    mounted () {
      this.loadAll()
    },
    methods: {
      loadAll(){
        this.inputs = document.querySelectorAll('form > fieldset > input')

        this.addAllValuesForm()
      },

      openPage(url){
        window.open('https://' + url)
      },

      addAllValuesForm(){
        let nombreC = this.$cookies.get('nombre'),
        emailC = this.$cookies.get('email')

        if (nombreC != null && emailC != null){
          this.inputs[0].value = nombreC
          this.inputs[1].value = emailC
        }
      },

      setAllValuesCookies(){
        this.$cookies.set('nombre', this.inputs[0].value, '1w')
        this.$cookies.set('email', this.inputs[1].value, '1w')
      },

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
      }
    },
  }
</script>

<style scoped>
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
  .basicos > .b > span {
    font-size: 28pt;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    color: var(--PColor);
    padding-right: var(--paddingRightGen);
  }

  .basicos > .b {
    color: var(--TXTColor);
    align-items: center;
    display: flex;
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

  @media (max-width: 800px){
    button, .icono {
      transition: all 0s ease-out;
    }
  }
</style>