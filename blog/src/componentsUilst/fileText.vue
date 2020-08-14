<template>
    <div>
        <component-title title="API"
                         small="具体属性" />
        <pc-table :columns="ApiColumns"
                  :data="ApiData"
        >
        </pc-table>
        <component-title title="事件" />
        <pc-table :columns="ApiEvent"
                  :data="ApiEventData"
        >
            <span slot="name">123</span>
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
            ApiData: {
                type: Array,
                default: []
            },
        }
    }
</script>

<style scoped>

</style>
