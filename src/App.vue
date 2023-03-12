<template>
    <div class="iconMenu imo anim" @click="presentarMenu()"><span class="material-symbols-outlined">menu</span></div>
    <nav class="anim">
        <div class="logos">
            <div class="iconMenu" @click="ocultarMenu()"><span class="material-symbols-outlined">menu</span></div>
            <div class="imgCont" onclick="location.href = '/'"><img src="@/assets/logo.png" alt="Logo de Osmaldy Maldonado"></div>
            <div class="modo">
                <span class="material-symbols-sharp light" @click="changeModeDL">light_mode</span>
                <span class="material-symbols-sharp dark" @click="changeModeDL">dark_mode</span>
            </div>
        </div>
        <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="#Sobre_mi">Sobre mi</router-link></li>
            <li><router-link to="#Plataformas">Plataformas</router-link></li>
            <li><router-link to="#Contactos">Contactos</router-link></li>
        </ul>
    </nav>

    <div class="content">
        <router-view :preventAll="preventAll"/>
        <router-view name="SobreMi"/>
        <router-view name="PartPlats" :preventAll="preventAll"/>
        <router-view name="Contactos"/>
    </div>
</template>

<script>
    /**
     * TODO: Cursores personalizados (No es posible aún, bug de window.history.replaceState() que 
     * imposibilita su renderización normal, por lo tanto, el cursor parpadea cada que se hace scroll 
     * en la página)
     */

    export default {
        name: 'App',
        created () {
            document.title = this.title
        },
        data () {
            return {
                title: 'Osmaldy Maldonado',
                computedDark: null,
                computedLight: null,
                rootElem: null,
                iconMenu: null,
                menu: null,
                elems: [],
                actualScroll: 0,
                wScreen: window.innerWidth,
                isPC: false
            }
        },
        mounted () {
            this.createNecesary()
        },
        methods: {
            /**
             * Creando y especificando lo necesario
             */
            createNecesary(){
                this.rootElem = document.documentElement

                this.computedLight = document.querySelector('nav > .logos > .modo > .light')
                this.computedDark = document.querySelector('nav > .logos > .modo > .dark')

                this.elems = document.querySelector('.content').childNodes

                this.menu = document.querySelector('nav')
                this.iconMenu = document.querySelector('.imo')
                
                this.isPC = this.wScreen > 800
                
                this.ocultarMenu()

                window.addEventListener('resize', () => {
                    this.wScreen = window.innerWidth
                    this.isPC = this.wScreen > 800

                    this.ocultarMenu()
                })

                this.setModeDL()

                window.addEventListener('scroll', this.addAll)
            },

            /**
             * Previniendo propagaciones del evento
             * @param {Event} e 
             */
            preventAll(e){
                e.preventDefault()
                e.stopPropagation()
                e.stopImmediatePropagation()
            },

            /**
             * Añadiendo y espcificando lo necesario
             * @param {Event} e
             */
            addAll(e){
                this.preventAll(e)
                this.addMenuEffect()
                if (this.isPC) this.addChangeURL()
            },

            /**
             * Metodo para presentar el menú y presentar su botón
             */
            presentarMenu(){
                this.remAll()

                if (this.isPC) {
                    this.menu.classList.add('show')
                    this.iconMenu.classList.add('hide')
                } else {
                    this.menu.classList.add('showSmartphone')
                    this.iconMenu.classList.add('hideSmartphone')
                }  
            },
            
            /**
             * Metodo para ocultar el menú y presentar su boton
             */
            ocultarMenu(){
                this.remAll()

                if (this.isPC) {
                    this.menu.classList.add('hide')
                    this.iconMenu.classList.add('show')
                } else {
                    this.menu.classList.add('hideSmartphone')
                    this.iconMenu.classList.add('showSmartphone')
                }
            },

            /**
             * Metodo para resetear todas las clases del menú y el icono del menú
             */
            remAll(){
                let allClasses = ['show', 'hide', 'showSmartphone', 'hideSmartphone']

                try {
                    allClasses.forEach(el => {
                        this.menu.classList.remove(el)
                        this.iconMenu.classList.remove(el)
                    });
                } catch (error){/* XD */}
            },


            /**
             * Añadiendo efectos de ocultar/presentar menú
             */
            addMenuEffect(){
                let y = window.scrollY

                if (this.isPC) {
                    if (y > this.actualScroll) this.ocultarMenu()
                    else this.presentarMenu()
                }

                this.actualScroll = y
            },

            // Cambio de URL dependiendo de si el scroll está en el div
            addChangeURL(){
                this.elems.forEach(elem => {
                    if (elem.localName == 'div'){
                        let y = elem.getBoundingClientRect().y,
                        yH = elem.offsetHeight

                        if (y <= 0) y = (y*-1)
                        else y = y + yH

                        if (y <= yH){
                            if (elem.id != '') history.replaceState(null, null, '#' + elem.id)
                            else history.replaceState(null, null, '/') 
                            return
                        }
                    }
                });
            },

            // Cambio de modo
            changeModeDL(){
                if (this.getCookieDarkMode()){
                    this.$cookies.set('darkMode', 'false', '2w')
                    this.setModeDL()
                } else {
                    this.$cookies.set('darkMode', 'true', '2w')
                    this.setModeDL()
                }
            },

            /**
             * Poniendo el modo oscuro o claro dependiendo del que esté
             */
            setModeDL(){
                if (this.getCookieDarkMode()){
                    this.showAndStack(this.computedDark, this.computedLight)

                    this.rootElem.style.setProperty('--SColor', '#ffffff')
                    this.rootElem.style.setProperty('--TXTColor', '#000000')
                } else {
                    this.showAndStack(this.computedLight, this.computedDark)

                    this.rootElem.style.setProperty('--SColor', '#101010')
                    this.rootElem.style.setProperty('--TXTColor', '#ffffff')
                }
            },

            /**
             * Obteniendo cookie del modo actual
             */
            getCookieDarkMode(){
                if (this.$cookies.get('darkMode') != null &&
                    this.$cookies.get('darkMode') == 'true') return true;
                else return false;
            },

            /**
             * Cambiando opacidad y pila a elementos - Usado especialmente en setModeDL()
             * @param {HTMLElement} show 
             * @param {HTMLElement} hide 
             */
            showAndStack(show, hide){
                show.style.opacity = '1'
                show.style.zIndex = '1'

                hide.style.opacity = '0'
                hide.style.zIndex = '0'
            }
        }
    }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,0,0');
  @import url('@/css/menu.css');
  @import url('@/css/master.css');
</style>
