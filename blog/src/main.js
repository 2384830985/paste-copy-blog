import Vue from 'vue'
import App from './App.vue'
import Pc from 'paste-copys'
import router from './router'

Vue.config.productionTip = false
Vue.use(Pc)

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
