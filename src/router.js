import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import ProjectIndex from './components/pages/projects/Index.vue'

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
        }
    ]
})

export { router }