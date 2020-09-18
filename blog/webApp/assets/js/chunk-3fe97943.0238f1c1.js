(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fe97943"],{1940:function(t,e,a){"use strict";var p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.ApiData.length?a("component-title",{attrs:{title:t.ApiEventDataTitle,small:"具体属性"}}):t._e(),t.ApiData.length?a("pc-table",{attrs:{columns:t.ApiColumns,data:t.ApiData}}):t._e(),t.ApiEventData.length?a("component-title",{attrs:{title:t.ApiDataTitle}}):t._e(),t.ApiEventData.length?a("pc-table",{attrs:{columns:t.ApiEvent,data:t.ApiEventData}},[a("span",{attrs:{slot:"name"},slot:"name"}),a("div",{attrs:{slot:"111"},slot:"111"})]):t._e()],1)},n=[],l={name:"fileText",created:function(){this.ApiEvent=this.$utils.ApiEvent,this.ApiColumns=this.$utils.ApiColumns},data:function(){return{ApiEvent:[],ApiColumns:[]}},props:{ApiEventData:{type:Array,default:[]},ApiDataTitle:{type:String,default:"事件"},ApiEventDataTitle:{type:String,default:"API"},ApiData:{type:Array,default:[]}}},o=l,i=a("2877"),s=Object(i["a"])(o,p,n,!1,null,"710f0cb3",null);e["a"]=s.exports},"4f91":function(t,e,a){"use strict";a.r(e);var p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("component-title",{attrs:{title:"input",small:"input组整合及大小"}}),a("code-block",{attrs:{code:t.inputCode}},[a("template",{slot:"demo"},[a("pc-input",{attrs:{placeholder:"large",size:"large"}}),a("br"),a("br"),a("pc-input",{attrs:{placeholder:"default"}}),a("br"),a("br"),a("pc-input",{attrs:{placeholder:"small",size:"small"}})],1)],2),a("component-title",{attrs:{small:"input添加前后卡槽和搜索"}}),a("code-block",{attrs:{code:t.inputSlotCode}},[a("template",{slot:"demo"},[a("pc-input",{attrs:{placeholder:"prepend和append"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")]),a("span",{attrs:{slot:"append"},slot:"append"},[t._v(".com")])]),a("br"),a("br"),a("pc-input",{attrs:{placeholder:"search",search:""}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")]),a("span",{attrs:{slot:"append"},slot:"append"},[t._v(".com")])]),a("br"),a("br"),a("pc-input",{attrs:{placeholder:"search",search:""}}),a("br"),a("br"),a("pc-input",{attrs:{placeholder:"searchButton",search:"",searchButton:"searchButton"}}),a("br"),a("br"),a("pc-input",{attrs:{placeholder:"search和append一起",search:"",searchButton:"searchButton"}},[a("span",{attrs:{slot:"append"},slot:"append"},[t._v(".com")])]),a("br"),a("br"),a("pc-input",{attrs:{placeholder:"支持password",type:"password",clearable:"",disabled:"","show-password":"",search:"",searchButton:!0}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("http://")]),a("span",{attrs:{slot:"append"},slot:"append"},[t._v(".com")])])],1)],2),a("component-title",{attrs:{small:"input添加前后下拉框的支持"}}),a("code-block",{attrs:{code:t.selectInputCode}},[a("template",{slot:"demo"},[a("pc-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"下拉框的样式支持",disabled:""}},[a("pc-select",{attrs:{slot:"prepend"},slot:"prepend"},[a("pc-option-group",{attrs:{label:"水果"}},[a("pc-option",{attrs:{label:"西瓜",value:"0"}}),a("pc-option",{attrs:{label:"西瓜苹果",value:"1",disabled:""}}),a("pc-option",{attrs:{label:"西瓜香蕉",value:"2"}}),a("pc-option",{attrs:{label:"西草莓",value:"3"}})],1)],1)],1),a("pc-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"下拉框的样式支持"}},[a("pc-select",{attrs:{slot:"append"},slot:"append"},[a("pc-option-group",{attrs:{label:"水果"}},[a("pc-option",{attrs:{label:"西瓜",value:"0"}}),a("pc-option",{attrs:{label:"西瓜苹果",value:"1",disabled:""}}),a("pc-option",{attrs:{label:"西瓜香蕉",value:"2"}}),a("pc-option",{attrs:{label:"西草莓",value:"3"}})],1)],1)],1),a("pc-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"下拉框的样式支持"}},[a("pc-select",{attrs:{slot:"prepend"},slot:"prepend"},[a("pc-option-group",{attrs:{label:"水果"}},[a("pc-option",{attrs:{label:"西瓜",value:"0"}}),a("pc-option",{attrs:{label:"西瓜苹果",value:"1",disabled:""}}),a("pc-option",{attrs:{label:"西瓜香蕉",value:"2"}}),a("pc-option",{attrs:{label:"西草莓",value:"3"}})],1)],1),a("pc-select",{attrs:{slot:"append"},slot:"append"},[a("pc-option-group",{attrs:{label:"水果"}},[a("pc-option",{attrs:{label:"西瓜",value:"0"}}),a("pc-option",{attrs:{label:"西瓜苹果",value:"1",disabled:""}}),a("pc-option",{attrs:{label:"西瓜香蕉",value:"2"}}),a("pc-option",{attrs:{label:"西草莓",value:"3"}})],1)],1)],1)],1)],2),a("component-title",{attrs:{small:"textarea的支持"}}),a("code-block",{attrs:{code:t.textareaInputCode}},[a("template",{slot:"demo"},[a("pc-input",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"textarea",type:"textarea",disabled:"",rows:"5"}}),a("pc-input",{attrs:{placeholder:"showWordLimit",type:"textarea",rows:"5",blankSpace:"",showWordLimit:"",maxlength:100}})],1)],2),a("file-text",{attrs:{ApiEventData:t.ApiEventData,ApiData:t.ApiData}})],1)},n=[],l=a("1940"),o={name:"input",components:{FileText:l["a"]},data:function(){return{ApiEventData:[{name:"onAppend",explain:"Append被点的时候触发，返回当前input的值",parameter:"(currentValue) => void",edition:"-"},{name:"onPrepend",explain:"Prepend被点的时候触发，返回当前input的值",parameter:"(currentValue) => void",edition:"-"},{name:"onIconClickLeft",explain:"icon左边点击被触发",parameter:"(currentValue) => void",edition:"-"},{name:"onIconClickRight",explain:"icon右边点击被触发",parameter:"(currentValue) => void",edition:"-"},{name:"clear",explain:"被清除时候触发",parameter:"() => void",edition:"-"},{name:"on-change",explain:"值被修改时触发",parameter:"(event) => void",edition:"-"},{name:"on-keypress",explain:"keypress事件",parameter:"(currentValue) => void",edition:"-"},{name:"on-keydown",explain:"keydown事件",parameter:"(currentValue) => void",edition:"-"},{name:"on-enter",explain:"enter事件",parameter:"(currentValue) => void",edition:"-"},{name:"on-keyup",explain:"keyup事件",parameter:"(currentValue) => void",edition:"-"},{name:"focus",explain:"focus事件",parameter:"(currentValue) => void",edition:"-"}],ApiData:[this.$utils.setApiData("wrap","规定当在表单中提交时，文本区域中的文本如何换行。。 textarea 'hard', 'soft'","string","soft","-"),this.$utils.setApiData("elementId","当前的domID","string","","-"),this.$utils.setApiData("autofocus","规定在页面加载后文本区域自动获得焦点。 textarea","Boolean","false","-"),this.$utils.setApiData("blankSpace","是否去除头尾的空格","Boolean","false","-"),this.$utils.setApiData("rows","textarea 的高度","Number","","-"),this.$utils.setApiData("iconLeft","左边当icon","string","","-"),this.$utils.setApiData("icon","右边当icon","string","","-"),this.$utils.setApiData("value","当前值","Number,String","","-"),this.$utils.setApiData("placeholder","placeholder","String","","-"),this.$utils.setApiData("type","类型 'text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel'","String","text","-"),this.$utils.setApiData("showWordLimit","是否展示数量（textarea）的时候才可以使用","Boolean","false","-"),this.$utils.setApiData("search","是否搜索","Boolean","false","-"),this.$utils.setApiData("readonly","是否只读","Boolean","false","-"),this.$utils.setApiData("disabled","是否禁用","Boolean","false","-"),this.$utils.setApiData("maxlength","最大长度","Boolean","false","-"),this.$utils.setApiData("clearable","是否显示清空按钮","Boolean","false","-"),this.$utils.setApiData("name","input的Name","String","","-"),this.$utils.setApiData("classIcon","添加icon的class","String","","-"),this.$utils.setApiData("searchButton","search是否需要Button化","Boolean|String","","-"),this.$utils.setApiData("size","大小","'small', 'large', 'default'","default","-")],inputCode:'\n                <pc-input placeholder="large" size="large"></pc-input>\n                <pc-input placeholder="default"></pc-input>\n                <pc-input placeholder="small" size="small"></pc-input>\n            ',inputSlotCode:'\n            <pc-input placeholder="prepend和append">\n                <span slot="prepend">http://</span>\n                <span slot="append">.com</span>\n            </pc-input>\n            <pc-input placeholder="search" search>\n                <span slot="prepend">http://</span>\n                <span slot="append">.com</span>\n            </pc-input>\n            <pc-input placeholder="search" search></pc-input>\n            <pc-input placeholder="searchButton" search searchButton="searchButton"></pc-input>\n            <pc-input placeholder="search和append一起" search searchButton="searchButton">\n                <span slot="append">.com</span>\n            </pc-input>\n            <pc-input placeholder="支持password"\n                      type="password"\n                      clearable\n                      show-password\n                      search\n                      :searchButton="true"\n            >\n                <span slot="prepend">http://</span>\n                <span slot="append">.com</span>\n            </pc-input>\n            ',selectInputCode:'\n            <pc-input placeholder="下拉框的样式支持">\n                <pc-select slot="prepend">\n                    <pc-option-group label="水果">\n                        <pc-option label="西瓜" value="0"></pc-option>\n                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>\n                        <pc-option label="西瓜香蕉" value="2"></pc-option>\n                        <pc-option label="西草莓" value="3"></pc-option>\n                    </pc-option-group>\n                </pc-select>\n            </pc-input>\n            <pc-input placeholder="下拉框的样式支持">\n                <pc-select slot="append">\n                    <pc-option-group label="水果">\n                        <pc-option label="西瓜" value="0"></pc-option>\n                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>\n                        <pc-option label="西瓜香蕉" value="2"></pc-option>\n                        <pc-option label="西草莓" value="3"></pc-option>\n                    </pc-option-group>\n                </pc-select>\n            </pc-input>\n            <pc-input placeholder="下拉框的样式支持">\n                <pc-select slot="prepend">\n                    <pc-option-group label="水果">\n                        <pc-option label="西瓜" value="0"></pc-option>\n                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>\n                        <pc-option label="西瓜香蕉" value="2"></pc-option>\n                        <pc-option label="西草莓" value="3"></pc-option>\n                    </pc-option-group>\n                </pc-select>\n                <pc-select slot="append">\n                    <pc-option-group label="水果">\n                        <pc-option label="西瓜" value="0"></pc-option>\n                        <pc-option label="西瓜苹果" value="1" disabled></pc-option>\n                        <pc-option label="西瓜香蕉" value="2"></pc-option>\n                        <pc-option label="西草莓" value="3"></pc-option>\n                    </pc-option-group>\n                </pc-select>\n            </pc-input>\n            ',textareaInputCode:'\n            <pc-input placeholder="textarea"\n                      type="textarea"\n                      rows="5"\n            >\n            </pc-input>\n            <pc-input placeholder="123"\n                     type="textarea"\n                     v-model="maxlength"\n                     rows="5"\n                     blankSpace\n                     showWordLimit\n                     :maxlength="100"\n                     >\n            </pc-input>\n            '}}},i=o,s=a("2877"),r=Object(s["a"])(i,p,n,!1,null,"7922b152",null);e["default"]=r.exports}}]);