import {createRouter, createWebHistory} from 'vue-router'

const Home = ()=>import('@/pages/home.vue') 

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: Home },
        {path:'/domain/:url', component: ()=> import('@/pages/domain.vue')}
    ]
})


export default router