<template>
    <nav>
        <div class="logos">
            <div class="iconMenu">
                <span class="material-symbols-outlined">menu</span>
            </div>
            <div class="imgCont">
                <img src="./assets/logo.png" alt="Logo de Osmaldy Maldonado">
            </div>
        </div>
        <ul>
            <li><div class="modo"><span class="material-symbols-outlined">dark_mode</span></div></li>
            <li><router-link to="/" replace>Inicio</router-link></li>
            <li><router-link to="#Sobre_mi" replace>Sobre mi</router-link></li>
            <li><router-link to="#Plataformas" replace>Plataformas</router-link></li>
            <li><router-link to="#Contactos" replace>Contactos</router-link></li>
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
                elems: []
            }
        },
        mounted () {
            this.setListener()
        },
        methods: {
            setListener(){
                this.elems = document.querySelector('.content').childNodes
                window.addEventListener('scroll', this.addAll)
            },
            addAll(e){
                e.preventDefault()
                e.stopPropagation()
                e.stopImmediatePropagation()

                this.elems.forEach(elem => {
                    let y = elem.getBoundingClientRect().y,
                    yH = elem.offsetHeight

                    if (y <= 0) y = (y*-1)
                    else y = y+yH

                    if (y <= yH){
                        if (elem.id != ''){
                            history.pushState(null, null, '#' + elem.id)
                        } else {
                            history.pushState(null, null, '/')
                        }
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
  @import url("./css/menu.css");
  @import url('./css/master.css');
</style>
