import Vue from 'vue';
import VueRouter from  'vue-router';
import Vuex from 'vuex';
import App from './app.vue';
// 
import VueBus from './vue-bus';

Vue.use(VueRouter);
Vue.use(Vuex);
// 
Vue.use(VueBus);

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

const store = new Vuex.Store({
    state:{
        count:0,
        list:[1,5,8,10,30,50]
    },
    mutations:{
        increment(state,n=1){
            state.count+=n;
        },
        // increment(state,params){
        //     state.count+=params.count;
        // },
        decrease(state,params){
            state.count-=params.count;
        }
    },
    getters:{
        filteredList:state=>{
            return state.list.filter(item => item < 10);
        },
        listCount:(state, getters)=>{
            return getters.filteredList.length;
        }
    },
    actions:{
        increment(context){
            context.commit('increment');
        },
        asyncIncrement(context){
            return new Promise(resolve=>{
                setTimeout(() => {
                    context.commit('increment');
                    resolve();
                }, 1000);

            });
        }
    }
})

new Vue({
    el:'#app',
    router: router,
    store: store,
    render:h=>{
        return h(App);
    }
})