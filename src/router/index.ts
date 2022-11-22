import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import DogsBreedList from '../views/DogsBreedList.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history', // default is hash mode
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
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
