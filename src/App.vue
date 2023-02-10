<template>
    <div class="iconMenu imo" @click="presentarMenu()"><span class="material-symbols-outlined">menu</span></div>
    <nav>
        <div class="logos">
            <div class="iconMenu" @click="ocultarMenu()"><span class="material-symbols-outlined">menu</span></div>
            <router-link to="/"><div class="imgCont"><img src="@/assets/logo.png" alt="Logo de Osmaldy Maldonado"></div></router-link>
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
        <router-view />
        <router-view name="SobreMi" id="Sobre_mi"/>
        <router-view name="PartPlats" id="Plataformas"/>
        <router-view name="Contactos" id="Contactos"/>
    </div>
</template>

<script>
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
                wScreen: 0,
                darkMode: true,
                
            }
        },
        mounted () {
            this.createNecesary()
        },
        methods: {
            // Creando y espcificando lo necesario
            createNecesary(){
                this.rootElem = document.documentElement

                this.computedLight = document.querySelector('nav > .logos > .modo > .light')
                this.computedDark = document.querySelector('nav > .logos > .modo > .dark')

                this.elems = document.querySelector('.content').childNodes
                this.menu = document.querySelector('nav')
                this.iconMenu = document.querySelector('.imo')
                this.wScreen = window.innerWidth

                if (this.wScreen > 800) this.presentarMenu()
                else this.ocultarMenu()
                
                window.addEventListener('scroll', this.addAll)
            },

            // Añadiendo y espcificando lo necesario
            addAll(e){
                e.preventDefault()
                e.stopPropagation()
                e.stopImmediatePropagation()

                /* Añadiendo efecto de Menú por Scroll */
                this.addMenuEffect()

                if (this.wScreen > 800) {
                    /* Añadiendo cambio de URL por Scroll */
                    this.addChangeURL()
                }
            },

            // Metodo para presentar el menú y presentar su botón
            presentarMenu(){
                this.presentar(this.menu)
                this.ocultar(this.iconMenu)
            },
            
            // Metodo para ocultar el menú y presentar su boton
            ocultarMenu(){
                this.ocultar(this.menu)
                this.presentar(this.iconMenu)
            },

            // Metodo para presentar un elemento (Menú)
            presentar(elem){
                elem.style.top = '0'
                elem.style.left = '0'
            },

            // Metodo para ocultar un elemento (Menú)
            ocultar(elem){
                elem.style.transition = 'all 0.3s ease-in-out'

                if (this.wScreen > 800) elem.style.top = '-60px'
                else elem.style.left = '-100%'
            },

            // Añadiendo efectos de ocultar/presentar menú
            addMenuEffect(){
                let y = window.scrollY

                if (this.wScreen > 800) {
                    if (y > this.actualScroll) this.ocultarMenu()
                    else this.presentarMenu()
                }

                this.actualScroll = y
            },

            // Cambio de URL dependiendo de si el scroll está en el div
            addChangeURL(){
                this.elems.forEach(elem => {
                    let y = elem.getBoundingClientRect().y,
                    yH = elem.offsetHeight

                    if (y <= 0) y = (y*-1)
                    else y = y + yH

                    if (y <= yH){
                        if (elem.id != '') history.pushState(null, null, '#' + elem.id)
                        else history.pushState(null, null, '/') 
                        return
                    }
                });
            },

            // Cambio de modo
            changeModeDL(){
                this.rootElem.style.transition = 'all 0.8s ease-out'

                if (this.darkMode){
                    this.darkMode = false

                    this.showAndStack(this.computedDark, this.computedLight)

                    this.rootElem.style.setProperty('--SColor', '#ffffff')
                    this.rootElem.style.setProperty('--TXTColor', '#000000')

                } else {
                    this.darkMode = true

                    this.showAndStack(this.computedLight, this.computedDark)

                    this.rootElem.style.setProperty('--SColor', '#101010')
                    this.rootElem.style.setProperty('--TXTColor', '#ffffff')
                }
            },

            showAndStack(elem1, elem2){
                elem1.style.opacity = '1'
                elem1.style.zIndex = '1'

                elem2.style.opacity = '0'
                elem2.style.zIndex = '0'
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
