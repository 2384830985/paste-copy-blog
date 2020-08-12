<template>
    <div>
        <pc-button type="success" :disabled="disabled" :loading="disabled" @click="disabled = true">
            <span v-if="!disabled">Click me!</span>
            <span v-else>Loading...</span>
        </pc-button>
    </div>
</template>

<script>
    export default {
        name: "buttons",
        data(){
            return {
                disabled: false
            }
        }
    }
</script>

<style scoped>

</style>
