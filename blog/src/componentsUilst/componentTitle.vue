<template>
    <div>
        <div class="t-title">
            {{title}}
        </div>
        <p class="t-small">{{small}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            small: {
                type: String,
                default: ''
            }
        },
        name: "componentTitle"
    }
</script>

<style scoped>
    .t-title{
        margin: 55px 0 20px;
        font-weight: 400;
        color: #1f2f3d;
        font-size: 22px;
    }
    .t-small{
        margin: 1em 0;
    }
</style>
