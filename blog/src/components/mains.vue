<template>
    <div>
        <!--头部-->
        <header class="t-header-con">
            <div class="t-i-t">
                paste-copy-ui
            </div>
        </header>
        <!--导航-->
        <section class="t-navigation-con">
            <navigation :routeDate="routeDate"/>
        </section>
        <section class="t-body-con">
            <router-view/>
        </section>
    </div>
</template>

<script>
    import {routes} from '../router'
    import navigation from "./navigation";
    export default {
        name: "mains",
        data(){
            return {
                routeDate: routes
            }
        },
        components: {
            navigation
        },
        mounted() {
            console.log(routes)
        }
    }
</script>

<style scoped>
    .t-i-t{
        overflow: hidden;
        padding-left: 40px;
        float: left;
        height: 64px;
        line-height: 64px;
        text-decoration: none;
        white-space: nowrap;
        font-weight: bold;
        font-size: 22px;
    }
    .t-header-con{
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 64px;
        background: white;
        box-shadow: 0 2px 8px #f0f1f2;
    }
    .t-navigation-con{
        position: fixed;
        top: 70px;
        width: 270px;
        left: 0;
        bottom: 20px;
        background: white;
        border-right: 1px solid #e8e8e8;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    .t-body-con{
        position: fixed;
        top: 70px;
        left: 270px;
        right: 0;
        bottom: 20px;
        background: white;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0 200px 144px 64px;
        font-size: 14px;
    }
</style>
