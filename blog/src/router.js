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
    {
        path: '/radio',
        name: 'radio',
        meta: {
            name: 'Radio 单选项'
        },
        component: resolve => require(['@/components/radio/radio'],resolve),
    },
    {
        path: '/checkbox',
        name: 'checkbox',
        meta: {
            name: 'Checkbox 单选项'
        },
        component: resolve => require(['@/components/checkbox/checkbox'],resolve),
    },
    {
        path: '/input',
        name: 'input',
        meta: {
            name: 'Input 输入框'
        },
        component: resolve => require(['@/components/input/input'],resolve),
    },
    {
        path: '/select',
        name: 'select',
        meta: {
            name: 'Select 下拉框'
        },
        component: resolve => require(['@/components/select/select'],resolve),
    },
    {
        path: '/table',
        name: 'table',
        meta: {
            name: 'Table 表格'
        },
        component: resolve => require(['@/components/table/table'],resolve),
    },
    {
        path: '*',
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
