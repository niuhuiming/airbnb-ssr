import home from '../views/home/index.vue'
import mine from '../views/mine/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: '',
      keepAlive: false,
    },
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      title: '',
      keepAlive: false,
    },
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
