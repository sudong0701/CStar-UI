<template>
    <div :class="`csContainer ${direction === '' ? directionName : realDirection}`" ref="csContainer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csContainer',
        data() {
            return {
                directionName: ''
            }
        },
        props: {
            direction: {
                type: String,
                default: ''
            }
        },
        mounted() {
            if(!this.direction) {
                const containerChild = this.$refs.csContainer.children
                for(let i = 0; i < containerChild.length; i++) {
                    if(containerChild[i].className === 'csHeader' || containerChild[i].className === 'csFooter') {
                        this.directionName = 'is-vertical'
                        break
                    }
                }
            }
        },
        computed: {
            realDirection() {
                if(this.direction === 'vertical') {
                    return 'is-vertical'
                } else if(this.direction === 'horizontal'){
                    return ''
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csContainer {
        flex: 1;
        display: flex;
        flex-direction: row;
        height: 100%;
        .is-vertical {
            flex-direction: column;
        }
    }
    .is-vertical {
        flex-direction: column;
    }
</style>