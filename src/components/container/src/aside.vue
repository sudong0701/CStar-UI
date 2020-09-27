<template>
    <div class="csAside" :style="`width: ${realWidth}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csAside',
        data() {
            return {}
        },
        props: {
            width: {
                type: Number | String,
                default: 200
            }
        },
        computed: {
            realWidth() {
                if(typeof this.width === 'number') {
                    return `${this.width}px`
                } else {
                    return this.width
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>