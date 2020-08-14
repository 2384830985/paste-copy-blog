<template>
    <div class="t-demo-con">
        <div class="t-demo-pro">
            <slot name="demo"/>
        </div>
        <div :class="['t-demo-icon',codeShow?'':'border-none']" @click="onCodeShow">
            <i class="pc-icons pc-icon pc-icon-code"></i>
        </div>
        <div :class="['t-trans',codeShow?'t-trans1':'']" :style="{height: codeShow?`${height}`:''}">
            <pre ref="pre"><code class="t-code" v-html="codes"></code></pre>
        </div>
    </div>
</template>

<script>
    let setCode = function (val) {
        return val.replace(/\<([a-z\-A-Z]+)|\<\/([a-z\-A-Z]+)\>/ig,(x,y,z)=>{
            if (typeof y==='string'){
                return `<<span class="t-red">${y}</span>`
            }
            if (typeof z==='string'){
                return `<<span class="t-red">${z}</span>>`
            }
            return ""
        })
    }
    export default {
        name: "codeBlock",
        props: {
            code: {
                type: String,
                default: ""
            }
        },
        data(){
            return {
                codes: setCode(this.code),
                codeShow: false,
                height: ''
            }
        },
        methods:{
            onCodeShow(){
                this.codeShow = !this.codeShow
            },
        },
        watch: {
            code(newVal,oldVal){
                this.codes = setCode(newVal)
            }
        },
        mounted() {
            this.height = window.getComputedStyle(this.$refs.pre).height
        }
    }
</script>

<style>
    .t-red{
        color: red;
    }
</style>

<style scoped>

    .t-demo-con{
        border: 1px solid #e8e8e8;
    }
    .t-code{
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        direction: ltr;
        text-align: left;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.5;
        tab-size: 4;
        color: #333;
        /*background: #f8f8f8;*/
        font-size: 1rem;
        padding: .67rem 1.3rem;
        margin: 0;
        display: block;
        z-index: 1;
    }
    .t-demo-pro{
        padding: 42px 24px;
        border-bottom: 1px dashed #e8e8e8;
        z-index: 100;
    }
    pre{
        padding: 0;
        margin: 0;
    }
    .t-demo-icon{
        display: flex;
        align-items: center;
        justify-items: center;
        text-align: center;
        padding: 5px 0;
        border-bottom: 1px dashed #e8e8e8;
    }
    .pc-icons{
        margin-left: 50%;
        font-size: 22px;
        margin-right: -11px;
        cursor: pointer;
    }
    .border-none{
        border: none;
    }
    .t-trans{
        height: 0;
        visibility: hidden;
        transition: height .5s ease-in,opacity .6s ease;
        opacity: 0;
    }
    .t-trans1{
        height: 0;
        visibility: initial;
        transition: height .5s ease-in,opacity 2s ease;
        opacity: 1;
    }
</style>
