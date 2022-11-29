import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ListPage from '../views/ListPage.vue'
import FilteredPage from '../views/FilterPage.vue'
import InputPage from '../views/InputPage.vue'
import EditPage from '../views/EditPage.vue'
import EditCategory from '../views/EditCategory.vue'
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
    path: '/filterlist/:id',
    name: 'filteredlist',
    component: FilteredPage
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
    path: '/editcategory/:id',
    name: 'editcategory',
    component: EditCategory
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
