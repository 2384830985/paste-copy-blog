(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a267b194"],{1940:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.ApiData.length?a("component-title",{attrs:{title:t.ApiEventDataTitle,small:"具体属性"}}):t._e(),t.ApiData.length?a("pc-table",{attrs:{columns:t.ApiColumns,data:t.ApiData}}):t._e(),t.ApiEventData.length?a("component-title",{attrs:{title:t.ApiDataTitle}}):t._e(),t.ApiEventData.length?a("pc-table",{attrs:{columns:t.ApiEvent,data:t.ApiEventData}},[a("span",{attrs:{slot:"name"},slot:"name"}),a("div",{attrs:{slot:"111"},slot:"111"})]):t._e()],1)},s=[],i={name:"fileText",created:function(){this.ApiEvent=this.$utils.ApiEvent,this.ApiColumns=this.$utils.ApiColumns},data:function(){return{ApiEvent:[],ApiColumns:[]}},props:{ApiEventData:{type:Array,default:[]},ApiDataTitle:{type:String,default:"事件"},ApiEventDataTitle:{type:String,default:"API"},ApiData:{type:Array,default:[]}}},l=i,d=a("2877"),o=Object(d["a"])(l,n,s,!1,null,"710f0cb3",null);e["a"]=o.exports},"3ea9":function(t,e,a){},"81c8":function(t,e,a){"use strict";var n=a("3ea9"),s=a.n(n);s.a},b84f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("component-title",{attrs:{title:"table",small:"功能展示"}}),a("code-block",{attrs:{code:t.tableCode}},[a("template",{slot:"demo"},[a("pc-table",{attrs:{columns:t.columns,data:t.tableData,spanMethod:t.spanMethod,border:"",stripe:"",height:"400",rowClassName:t.rowClassName}})],1)],2),a("component-title",{attrs:{small:"添加边框table"}}),a("code-block",{attrs:{code:t.tableBorderCode}},[a("template",{slot:"demo"},[a("pc-table",{attrs:{columns:t.columns2,data:t.tableData,border:""}})],1)],2),a("component-title",{attrs:{small:"loading"}}),a("pc-table",{attrs:{columns:t.columns2,data:t.tableData,loading:"",stripe:"",border:""}}),a("file-text",{attrs:{ApiEventData:t.ApiEventData,ApiData:t.ApiData}}),a("file-text",{attrs:{ApiData:t.columnsData,ApiEventDataTitle:"columns"}})],1)},s=[],i=a("1940"),l={name:"tables",components:{FileText:i["a"]},data:function(){return{ApiEventData:[this.$utils.setApiEventData("on-sort","上下排序进行触发",""),this.$utils.setApiEventData("checkboxChange","单个checkbox触发","tableData,checkbox 所有数据和是否选中"),this.$utils.setApiEventData("checkboxChangeHead","header上选中所有checkbox触发","tableData,item,index 选中数据和当前行和当前行下标")],columnsData:[this.$utils.setApiData("title","当前名称","String",""),this.$utils.setApiData("type","类型：expand|index|selection","String",""),this.$utils.setApiData("width","宽度","Number",""),this.$utils.setApiData("key","当前的data的key","Number",""),this.$utils.setApiData("align","位置：center|left|right","Number",""),this.$utils.setApiData("children","可以进行一个嵌套","Object",""),this.$utils.setApiData("sort","是否需要排序","Boolean",""),this.$utils.setApiData("fixed","是否要靠左或者靠右left|right","Boolean","")],ApiData:[this.$utils.setApiData("stripe","添加 # 后面会自动排序","Boolean","false"),this.$utils.setApiData("border","是否添加边框","Boolean","false"),this.$utils.setApiData("loading","是否添加loading","Boolean","false"),this.$utils.setApiData("height","高度","Number",""),this.$utils.setApiData("rowClassName","单行Class","Function",""),this.$utils.setApiData("spanMethod","处理合并单元行","Function","{row,column,rowIndex,columnIndex} row 当前行数据 column 当前行的  column rowIndex 当前行的 index columnIndex 当前列的 index"),this.$utils.setApiData("columns","当前table的内容","Object",""),this.$utils.setApiData("data","当前table的数据","Object","")],tableCode:'\n            <pc-table :columns="columns"\n                      :data="tableData"\n                      stripe\n                      height="400"\n            ></pc-table>\n            ',tableBorderCode:'\n            <pc-table :columns="columns2"\n                      :data="tableData"\n                      stripe\n                      border\n            ></pc-table>\n            ',columns:[{type:"index",width:40,align:"center"},{title:"支持render 注入写法，支持多层级操作",key:"name2"},{title:"支持上下筛选（只抛出事件）",key:"name2",sort:!0,order:"top",slotSort:"name"},{title:"支持横坐标合并",key:"name3"},{title:"支持纵坐标合并",key:"name3"},{title:"1111",key:"name3"},{title:"支持多层级嵌套table",key:"name",align:"center",children:[{title:"多级表头可以加滚动",children:[{title:"可以取消边框",key:"Address1",children:[{title:"Address1",key:"Address1"}]},{title:"Address2",key:"Address2"}]},{title:"可以对单个框进行class 的赋值",key:"Address123456789"}]},{type:"selection",width:48,align:"center"},{title:"添加选中",key:"name3"}],columns2:[{type:"index",width:40,align:"center"},{type:"expand",width:45,align:"center",render:function(t,e){e.row,e.index;return t("div","支持render 注入写法")}},{title:"123",key:"name",width:100,fixed:!0},{title:"456",key:"name",width:100,fixed:"right"},{title:"789",key:"name2"},{title:"1111",key:"name3"},{title:"1111",key:"name3"}],tableData:[{name:"456gfdkjgfd;lgjfdkl;gjkdfkl",name1:"123gfdgfdgdf",name2:"789dfg",name3:"1111",_checkbox:!0,Address1:"Address1",Address2:"Address2",Address3:"Address3",Address4:"Address4",cellClassName:{name:"b",name3:"b"}},{name:"456gfdkjgfd;lgjfdkl;gjkdfkl",name1:"123gfdgfdgdf",name2:"789dfg",name3:"1111",_checkbox:!0,Address1:"Address1",Address2:"Address2",Address3:"Address3",Address4:"Address4",cellClassName:{name:"b",name3:"b"}},{name:"123",name1:"123",name2:"12323",_checkbox:!0,name3:"123"}]}},methods:{rowClassName:function(t){t.row;var e=t.index;t.data;if(2===e)return"red"},spanMethod:function(t){t.row,t.column;var e=t.rowIndex,a=t.columnIndex;return 4===a?e%3===0?{rowspan:3,colspan:1}:{rowspan:0,colspan:0}:e%2===0?0===a?{rowspan:1,colspan:3}:1===a||2===a?{rowspan:0,colspan:0}:{rowspan:1,colspan:1}:void 0}}},d=l,o=(a("81c8"),a("2877")),r=Object(o["a"])(d,n,s,!1,null,null,null);e["default"]=r.exports}}]);