import { createRouter, createWebHistory } from 'vue-router'
import PartPresentacion from '../views/Presentacion.vue'
import SobreMi from '../views/SobreMi.vue'

const routes = [
  { path: '/', component: PartPresentacion },
  { path: '/#Sobre_Mi', component: SobreMi }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router