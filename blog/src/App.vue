<template>
    <div id="app">
        <router-link to="/foo">foo</router-link>
        <router-link to="/bar">bar</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>

</style>
