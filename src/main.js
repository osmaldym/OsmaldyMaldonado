import { createApp } from 'vue'
import cookies from 'vue-cookies'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.use(cookies)
.mount('#app')