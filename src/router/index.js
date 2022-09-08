import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


  const routes=[
    {path:'/',component:()=> import(/*webpackChunkName:"inicio"*/ '../views/inicio')},
    {path:'/cliente',component:()=> import(/*webpackChunkName:"Cliente"*/ '../views/clientes')},
    {path:'/empleado',component:()=> import(/*webpackChunkName:"Empleado"*/ '../views/empleados')},
  
  ]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
