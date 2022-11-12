import { createRouter, createWebHistory } from 'vue-router'
import ScoreRank from '@/views/ScoreRank.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'ranking',
            component: ScoreRank
        },
        {
            path: '/target',
            name: 'target',
            component: () => import('@/views/SetTarget.vue')
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: () => import('@/views/FeedBack.vue')
        },
        {
            path: '/user',
            name: 'userinfo',
            component: () => import('@/views/UserInfo.vue')
        }
    ]
})

export default router