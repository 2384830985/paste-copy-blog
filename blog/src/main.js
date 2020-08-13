import Vue from 'vue'
import App from './App.vue'
import Pc from 'paste-copys'
import router from './router'
import U from "./componentsUilst/index";

Vue.config.productionTip = false
Vue.use(Pc)
Vue.use(U)
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
