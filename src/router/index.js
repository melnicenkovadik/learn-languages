import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/views/HomePage/HomePage.vue'
import LearnWordsPage from '@/views/LearnWordsPage/LearnWordsPage.vue'
import ReviewWordsPage from "@/views/ReviewWordsPage/ReviewWordsPage.vue";

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/learn-words',
        name: 'learn-words-page',
        component: LearnWordsPage
    },
    {
        path: '/review-words',
        name: 'review-words-page',
        component: ReviewWordsPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
