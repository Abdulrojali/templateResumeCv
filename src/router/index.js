import { createRouter, createWebHistory } from 'vue-router'

import home from '../views/home.vue'
import formCv from '../views/formCv.vue'
import resultCv from '../views/resultCv.vue'
import formResume from '../views/formResume.vue'
import resultResume from '../views/resultResume.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path:'/formCv',
      name:'formCv',
      component:formCv
    },
    {
      path:'/formResume',
      name:'formResume',
      component:formResume
    },
    {
      path:'/resultResume',
      name:'resultResume',
      component:resultResume
    },
    {
      path:'/resultcv',
      name:'resultcv',
      component:resultCv
    }
  ],
})

export default router
