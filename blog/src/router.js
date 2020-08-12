import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/button',
            name: 'button',
            component: resolve => require(['@/components/button/button'],resolve),
        }
    ]
})
