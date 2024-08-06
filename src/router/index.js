import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import LearnWordsPage from '@/views/LearnWordsPage.vue'

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about-page',
        component: AboutPage
    },
    {
        path: '/learn-words',
        name: 'learn-words-page',
        component: LearnWordsPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
