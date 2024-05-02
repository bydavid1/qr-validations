import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
const isAuth = true
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})

router.beforeEach(async(to,from)=>{
  if(!isAuth && to.name !== "login"){
    return { name:"login"}
  }
})
export default router
