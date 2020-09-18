<template>
    <div>
        <component-title :title="ApiEventDataTitle"
                         v-if="ApiData.length"
                         small="具体属性" />
        <pc-table :columns="ApiColumns"
                  :data="ApiData"
                  v-if="ApiData.length"
        >
        </pc-table>
        <component-title :title="ApiDataTitle"  v-if="ApiEventData.length" />
        <pc-table :columns="ApiEvent"
                  :data="ApiEventData"
                  v-if="ApiEventData.length"
        >
            <span slot="name"></span>
            <div slot="111"></div>
        </pc-table>
    </div>
</template>

<script>
    export default {
        name: "fileText",
        created() {
            this.ApiEvent = this.$utils.ApiEvent
            this.ApiColumns = this.$utils.ApiColumns
        },
        data(){
            return {
                ApiEvent: [],
                ApiColumns: [],
            }
        },
        props: {
            ApiEventData: {
                type: Array,
                default: []
            },
            ApiDataTitle: {
                type: String,
                default: "事件"
            },
            ApiEventDataTitle: {
                type: String,
                default: "API"
            },
            ApiData: {
                type: Array,
                default: []
            },
        }
    }
</script>

<style scoped>

</style>
