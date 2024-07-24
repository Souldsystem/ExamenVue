import { createRouter, createWebHistory } from 'vue-router'
import CalculoCalificaciones from '../components/CalculoCalificaciones.vue'
import FormularioRegistro from '../components/FormularioRegistro.vue'

const routes = [
  {
    path: '/',
    name: 'CalculoCalificaciones',
    component: CalculoCalificaciones
  },
  {
    path: '/registro',
    name: 'FormularioRegistro',
    component: FormularioRegistro
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
