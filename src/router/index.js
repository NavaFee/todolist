import { createRouter, createWebHistory } from 'vue-router'
import Start from '../views/Start.vue'

//路由的配置数组
//path: 路由路径必须以 / 开头
//name： 路由的名字 （可选项）
//component：对应的路由组件
const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/about',
    name: 'about',
    //按需引入
    //如果没有访问/about，就不会加载此组件，节约性能
    component:()=>import('../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'Home',
    //按需引入
    //如果没有访问/home，就不会加载此组件，节约性能
    component:()=>import('../views/HomeView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    //按需引入
    //如果没有访问/detail，就不会加载此组件，节约性能
    component:()=>import('../views/DetailView.vue')
  }
]
//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes //routes : routes 的简写
})

export default router
