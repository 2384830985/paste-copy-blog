(function(e){function t(t){for(var o,r,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function i(e){return u.p+"assets/js/"+({}[e]||e)+"."+{"chunk-cd0c0ec4":"f83fb26a"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-cd0c0ec4":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="assets/css/"+({}[e]||e)+"."+{"chunk-cd0c0ec4":"4eca86dc"}[e]+".css",a=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1504:function(e,t,n){},2116:function(e,t,n){"use strict";var o=n("39fb"),r=n.n(o);r.a},"325f":function(e,t,n){},"39fb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Mains")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("section",{staticClass:"t-navigation-con"},[n("navigation",{attrs:{routeDate:e.routeDate}})],1),n("section",{staticClass:"t-body-con"},[n("router-view")],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"t-header-con"},[n("div",{staticClass:"t-i-t"},[e._v("\n            paste-copy-ui\n        ")])])}],u=n("8c4f");o["default"].use(u["a"]);var s=[{path:"/button",name:"button",meta:{name:"Button 按钮"},component:function(e){return n.e("chunk-cd0c0ec4").then(function(){var t=[n("1ec6")];e.apply(null,t)}.bind(this)).catch(n.oe)}}],l=new u["a"]({routes:s}),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.routeDates,(function(t,o){return n("div",{key:t.path,class:["t-navigation-item",t.name===e.routeName?"selected-navigation":""],on:{click:function(n){return e.routePush(t)}}},[e._v("\n        "+e._s(t.meta.name)+"\n    ")])})),0)},f=[],p=(n("7f7f"),{name:"navigation",props:{routeDate:{type:Array,default:[]}},methods:{routePush:function(e){this.$router.push(e.path)}},data:function(){return{routeDates:this.routeDate,routeName:""}},mounted:function(){var e=this;setTimeout((function(){e.$route.name&&(e.routeName=e.$route.name)}),100)}}),h=p,m=(n("7623"),n("2877")),v=Object(m["a"])(h,d,f,!1,null,"31be49d3",null),g=v.exports,b={name:"mains",data:function(){return{routeDate:s}},components:{navigation:g},mounted:function(){console.log(s)}},y=b,w=(n("2116"),Object(m["a"])(y,c,i,!1,null,"f08ea0f4",null)),_=w.exports,S={name:"app",components:{Mains:_}},C=S,k=Object(m["a"])(C,r,a,!1,null,null,null),O=k.exports,j=n("5b9b"),E=n.n(j),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"t-title"},[e._v("\n        "+e._s(e.title)+"\n    ")]),n("p",{staticClass:"t-small"},[e._v(e._s(e.small))])])},x=[],T={props:{title:{type:String,default:""},small:{type:String,default:""}},name:"componentTitle"},$=T,A=(n("7e1a"),Object(m["a"])($,P,x,!1,null,"5bd60630",null)),D=A.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"t-demo-con"},[n("div",{staticClass:"t-demo-pro"},[e._t("demo")],2),n("div",{class:["t-demo-icon",e.codeShow?"":"border-none"],on:{click:e.onCodeShow}},[n("i",{staticClass:"pc-icons pc-icon pc-icon-code"})]),n("div",{class:["t-trans",e.codeShow?"t-trans1":""],style:{height:e.codeShow?""+e.height:""}},[n("pre",{ref:"pre"},[n("code",{staticClass:"t-code",domProps:{innerHTML:e._s(e.codes)}})])])])},M=[],B=(n("a481"),function(e){return e.replace(/\<([a-z\-A-Z]+)|\<\/([a-z\-A-Z]+)\>/gi,(function(e,t,n){return"string"===typeof t?'<<span class="t-red">'.concat(t,"</span>"):"string"===typeof n?'<<span class="t-red">'.concat(n,"</span>>"):""}))}),L={name:"codeBlock",props:{code:{type:String,default:""}},data:function(){return{codes:B(this.code),codeShow:!1,height:""}},methods:{onCodeShow:function(){this.codeShow=!this.codeShow}},watch:{code:function(e,t){this.codes=B(e)}},mounted:function(){this.height=window.getComputedStyle(this.$refs.pre).height}},q=L,z=(n("61eb"),Object(m["a"])(q,N,M,!1,null,"cb6220ce",null)),H=z.exports,J=[D,H],V=function(e){J.map((function(t){e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&V(window.Vue);var Z={install:V,componentTitle:D,codeBlock:H};o["default"].config.productionTip=!1,o["default"].use(E.a),o["default"].use(Z),new o["default"]({render:function(e){return e(O)},router:l}).$mount("#app")},"61eb":function(e,t,n){"use strict";var o=n("a46b"),r=n.n(o);r.a},7623:function(e,t,n){"use strict";var o=n("325f"),r=n.n(o);r.a},"7e1a":function(e,t,n){"use strict";var o=n("1504"),r=n.n(o);r.a},a46b:function(e,t,n){}});