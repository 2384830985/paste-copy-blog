import Vue from 'vue'
import App from './App.vue'
import Pc from 'paste-copys'
import router from './router'
import U from "./componentsUilst/index";
import utils from "./componentsUilst/utils";

Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.use(Pc)
Vue.use(U)
new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
