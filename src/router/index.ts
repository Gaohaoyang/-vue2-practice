import Vue from 'vue'
import VueRouter from 'vue-router'
import DogsBreedList from '../views/DogsBreedList.vue'
import AppHome from '../views/AppHome.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history', // default is hash mode
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: '/dogsBreedList',
      name: 'dogsBreedList',
      component: DogsBreedList,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: '/dogPics/:breed',
      name: 'dogPics',
      component: () => import('../views/DogPics.vue'),
      meta: {
        keepAlive: false,
      },
    },
    {
      path: '/CircleLoadingDemo',
      name: 'CircleLoadingDemo',
      component: () => import('../views/CircleLoadingDemo.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/PDFViewDemo',
      name: 'PDFViewDemo',
      component: () => import('../views/PDFViewDemo.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/learn',
      name: 'learn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LearnView.vue'),
    },
  ],
})

export default router
