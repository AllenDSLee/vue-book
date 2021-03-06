import Vue from 'vue';
import VueRouter from  'vue-router';
import App from './app.vue';

Vue.use(VueRouter);

const Routers = [
    {
        path: '/user/:id',
        meta:{
            title:'個人主頁'
        },
        component: (resolve) => require (['./views/user.vue'],resolve)
    },    
    {
        path: '/index',
        meta:{
            title:'首頁'
        },
        component: (resolve) => require (['./views/index.vue'],resolve)
    },
    {
        path: '/about',
        meta:{
            title:'介紹頁'
        },
        component: (resolve) => require (['./views/about.vue'],resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
]

const RouterConfig = {
    mode:'history',
    routes: Routers
}

const router = new VueRouter(RouterConfig);

router.beforeEach((to,from,next)=>{
    window.document.title = to.meta.title;
    next();
})

router.afterEach((to,from,next)=>{
    window.scrollTo(0,0);
})

new Vue({
    el:'#app',
    router: router,
    render:h=>{
        return h(App);
    }
})