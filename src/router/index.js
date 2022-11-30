import { createRouter, createWebHashHistory } from 'vue-router'
import ScoreRank from '@/views/RankView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: ScoreRank
        },
        {
            path: '/target',
            component: () => import('@/views/TargetView.vue')
        },
        {
            path: '/feedback',
            component: () => import('@/views/FeedView.vue')
        },
        {
            path: '/user',
            component: () => import('@/views/UserView.vue')
        },
        {
            path: '/interview',
            component: () => import('@/views/InterviewView.vue')
        }
    ]
})

export default router