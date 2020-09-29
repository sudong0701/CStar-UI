<template>
    <div class="csRadioGroup" ref="csRadioGroup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csRadioGroup',
        data() {
            return {

            }
        },
        props: {
            value: {
                type: String | Number,
                default: ''
            }
        },
        mounted() {
           this.changeValue(this.value)
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        methods: {
            changeValue(val) {
                this.$slots.default.map((item)=> {
                    if(item.tag && item.tag.indexOf('csRadio') > -1) {
                        if(item.componentInstance.label === val) {
                            item.componentInstance.isSelect = true
                        } else {
                            item.componentInstance.isSelect = false
                        }
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>