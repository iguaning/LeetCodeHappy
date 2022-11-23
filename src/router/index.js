import { createRouter, createWebHashHistory } from 'vue-router'
import ScoreRank from '@/views/RankView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'ranking',
            component: ScoreRank
        },
        {
            path: '/target',
            name: 'target',
            component: () => import('@/views/TargetView.vue')
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: () => import('@/views/FeedView.vue')
        },
        {
            path: '/user',
            name: 'userinfo',
            component: () => import('@/views/UserView.vue')
        },
        {
            path: '/interview',
            name: 'interview',
            component: () => import('@/views/InterviewView.vue')
        }
    ]
})

export default router