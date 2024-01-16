import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import ProjectIndex from './components/pages/projects/Index.vue'
import ProjectShow from './components/pages/projects/Show.vue'
import Contact from './components/pages/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/projects',
            name:'projects.index',
            component: ProjectIndex,
        },
        {
            path: '/contatti',
			name: 'contacts',
			component: Contact,
        }
    ]
})

export { router }