import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        redirect: "/hello",
      },
      {
        path: '/hello',
        name: 'hello',
        component: HelloWorld,
        root: true
      },
      {
        path: '/bind',
        name: 'bind',
        component: Bind
      },
      {
        path: '/homework',
        name: 'homework',
        component: Homework
      }
    ]
  })
  
  export default router