import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import ScenicSpot from '../components/ScenicSpot.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        redirect: "/Home",
      },
      {
        path: '/Home',
        name: 'home',
        component: Home,
        root: true
      },
      {
        path: '/ScenicSpot',
        name: 'scenicSpot',
        component: ScenicSpot
      }
    ]
  })
  
  export default router