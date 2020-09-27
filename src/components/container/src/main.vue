<template>
    <div class="csMain">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csMain',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .csMain {
        flex: 1;
    }
</style>