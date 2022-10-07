import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ListPage from '../views/ListPage.vue'
import StudyPage from '../views/StudyPage.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/list',
    name: 'listpage',
    component: ListPage
    // component: () => import('../views/ListPage.vue')
  },
  {
    path: '/study',
    name: 'studypage',
    component: StudyPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
