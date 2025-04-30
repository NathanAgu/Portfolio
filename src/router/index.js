import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Education from '../pages/Education.vue'
import Experience from '../pages/Experience.vue'
import Goals from '../pages/Goals.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/education', name: 'Education', component: Education },
  { path: '/experience', name: 'Experience', component: Experience },
  { path: '/goals', name: 'Goals', component: Goals },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
