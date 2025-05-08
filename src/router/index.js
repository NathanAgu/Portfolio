import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Education from '../pages/Education.vue'
import Experience from '../pages/Experience.vue'
import Goals from '../pages/Goals.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/about', name: 'About', component: About},
  { path: '/education', name: 'Education', component: Education, meta: { title: 'NathanAGU - Education' } },
  { path: '/experience', name: 'Experience', component: Experience, meta: { title: 'NathanAGU - Experience' } },
  { path: '/goals', name: 'Goals', component: Goals },
  { path: '/projects', name: 'Projects', component: Projects, meta: { title: 'NathanAGU - Projects' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'NathanAGU - Contact' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to) => {
  const defaultTitle = 'NathanAGU'
  document.title = to.meta.title || defaultTitle
})

export default router
