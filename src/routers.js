import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name: 'index',
            component: (resolve) => require(['./views/index.vue'], resolve)
        },
        {
            path:'/list',
            name: 'list',
            component: (resolve) => require(['./views/list.vue'], resolve)
        },
        {
            path:'/home',
            name: 'home',
            component: (resolve) => require(['./views/home.vue'], resolve)
        },
        {
            path:'/about',
            name: 'about',
            component: (resolve) => require(['./views/about.vue'], resolve)
        }
    ]
})
