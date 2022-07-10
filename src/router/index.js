import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Manage',
    component: () => import('@/views/Manage.vue'),
    redirect:'/login',
    children:[
      {path:'admin',name:'Admin',component:() => import('@/views/Admin')},
      {path:'baogao',name:'Baogao',component:() => import('@/views/Baogao')},
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('@/views/Login.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
