<template>
    <div class="csHeader" :style="`height: ${realHeight}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csHeader',
        data() {
            return {}
        },
        props: {
            height: {
                type: Number | String,
                default: 60
            }
        },
        computed: {
            realHeight() {
                if(typeof this.height === 'number') {
                    return `${this.height}px`
                } else {
                    return this.height
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>