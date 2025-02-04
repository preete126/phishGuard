import {createRouter, createWebHistory} from 'vue-router'

const Home = ()=>import('@/pages/home.vue') 

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: Home },
        {path:'/preview', component: ()=> import('@/pages/preview.vue')}
    ]
})


export default router