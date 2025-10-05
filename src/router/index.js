import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not_found',
        component: NotFoundView,
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
