<template>
    <div class="iconMenu imo" @click="presentarMenu()"><span class="material-symbols-outlined">menu</span></div>
    <nav>
        <div class="logos">
            <div class="iconMenu" @click="ocultarMenu()"><span class="material-symbols-outlined">menu</span></div>
            <router-link to="/"><div class="imgCont"><img src="@/assets/logo.png" alt="Logo de Osmaldy Maldonado"></div></router-link>
        </div>
        <ul>
            <li><div class="modo"><span class="material-symbols-outlined">dark_mode</span></div></li>
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
        data () {
            return {
                elems: [],
                actualScroll: 0,
                menu: null,
                iconMenu: null
            }
        },
        mounted () {
            this.createNecesary()
        },
        methods: {
            createNecesary(){
                this.menu = document.querySelector('nav')
                this.iconMenu = document.querySelector('.imo')

                this.presentarMenu()
                
                window.addEventListener('scroll', this.addAll)
            },

            addAll(e){
                e.preventDefault()
                e.stopPropagation()
                e.stopImmediatePropagation()

                /* Añadiendo efecto de Menú por Scroll */
                this.addMenuEffect()

                /* Añadiendo cambio de URL por Scroll */
                this.addChangeURL()
            },

            // Presentar y ocultar el menu, todos los metodos
            presentarMenu(){
                this.presentar(this.menu)
                this.ocultar(this.iconMenu)
            },

            ocultarMenu(){
                this.ocultar(this.menu)
                this.presentar(this.iconMenu)
            },

            presentar(elem){
                elem.style.top = '0'
            },

            ocultar(elem){
                elem.style.transition = 'all 0.3s ease-in-out'
                elem.style.top = '-60px'
            },

            addMenuEffect(){
                let y = window.scrollY

                if (y > this.actualScroll) this.ocultarMenu()
                else this.presentarMenu()

                this.actualScroll = y
            },

            addChangeURL(){
                this.elems.forEach(elem => {
                    let y = elem.getBoundingClientRect().y,
                    yH = elem.offsetHeight

                    if (y <= 0) y = (y*-1)
                    else y = y+yH

                    if (y <= yH){
                        if (elem.id != '') history.pushState(null, null, '#' + elem.id)
                        else history.pushState(null, null, '/') 
                        return
                    }
                
                });
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
