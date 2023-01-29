import { createRouter, createWebHistory } from 'vue-router'
import Presentacion from '../views/Presentacion.vue'
import SobreMi from '../views/SobreMi.vue'
import PartPlats from '../views/Plataformas.vue'
import Contactos from '../views/Contactos.vue'

const routes = [
  { 
    path: '/',
    components: {
      default: Presentacion,
      SobreMi,
      PartPlats,
      Contactos
    }
  }
  // Cuando haga la pagina 404
  // {
    // {
      // path: '/:catchAll(.*)*',
      // name: "PageNotFound",
      // component: PageNotFound,
    // },
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition){
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    
    return { top: 0 }
  }
})

export default router