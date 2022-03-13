import { createRouter, createWebHashHistory } from 'vue-router'
import Workle from "../components/Workle.vue"
import Profile  from "../components/Profile.vue"

const routes = [
    {
        path: '/',
        name: 'Главная',
        component: Workle
    },
    {
        path: '/profile/:id',
        name: 'Профиль',
        component: Profile
    },
    
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router