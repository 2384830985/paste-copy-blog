<template>
    <div>
        <div v-for="(item,index) in routeDates" :key="item.path"
             @click="routePush(item)"
             :class="['t-navigation-item',item.name === routeName?'selected-navigation':'']">
            {{item.meta.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
        props: {
            routeDate: {
                type: Array,
                default: []
            }
        },
        methods:{
            routePush(item){
                this.$router.push(item.path)
            }
        },
        data(){
            return {
                routeDates: this.routeDate,
                routeName: ''
            }
        },
        mounted() {
            setTimeout(()=>{
                if (this.$route.name){
                    this.routeName = this.$route.name
                }
            },100)
        },
    }
</script>

<style scoped>
    .t-navigation-item{
        cursor: pointer;
        padding: 0 16px 0 28px;
        height: 40px;
        margin-top: 4px;
        margin-bottom: 4px;
        overflow: hidden;
        font-size: 14px;
        line-height: 40px;
        text-overflow: ellipsis;
    }
    .t-navigation-item:hover{
        color: #2d8cf0;
    }
    .selected-navigation{
        background: #e6f7ff;
        color: #2d8cf0;
    }
</style>
