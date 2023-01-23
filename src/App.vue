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
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/#Sobre_mi">Sobre mi</router-link></li>
            <li><router-link to="/#Que_puedo_hacer">¿Que puedo hacer?</router-link></li>
            <li><router-link to="/#Contactos">Contactos</router-link></li>
        </ul>
    </nav>
    <router-view/>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
  @import url("./css/menu.css");
  @import url('./css/master.css');
</style>
