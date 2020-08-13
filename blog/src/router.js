import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);

export const routes = [
    {
        path: '/button',
        name: 'button',
        meta: {
            name: 'Button 按钮'
        },
        component: resolve => require(['@/components/button/button'],resolve),
    },
]

export default new Router({
    routes
})
