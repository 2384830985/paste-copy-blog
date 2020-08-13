import componentTitle from "./componentTitle";
import codeBlock from "./codeBlock";

const components = [
    componentTitle,
    codeBlock,
]
const install = function(Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });

    // Vue.use(TNewContent.directive);
    // Vue.prototype.$loading = Loading.service;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    componentTitle,
    codeBlock,
};

