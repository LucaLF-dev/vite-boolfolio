import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import PortfolioIndex from './components/pages/projects/Index.vue'
import PortfolioShow from './components/pages/projects/Show.vue'
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
            path: '/portfolio',
            name:'portfolio.index',
            component: PortfolioIndex,
        },
        {
            path: '/contatti',
			name: 'contacts',
			component: Contact,
        },
        {
			path: '/portfolio/:slug',
			name: 'portfolio.show',
			props: true,
			component: PortfolioShow,
		},
    ]
})

export { router }