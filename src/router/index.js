import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ListPage from '../views/ListPage.vue'
import InputPage from '../views/InputPage.vue'
import EditPage from '../views/EditPage.vue'
import InputCategoryPage from '../views/InputCategory.vue'

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
    path: '/list/:id',
    name: 'filteredlist',
    component: ListPage
    // component: () => import('../views/ListPage.vue')
  },
  {
    path: '/add',
    name: 'inputpage',
    component: InputPage
  },
  {
    path: '/edit/:id',
    name: 'editpage',
    component: EditPage
  },
  {
    path: '/category',
    name: 'inputcategorypage',
    component: InputCategoryPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
