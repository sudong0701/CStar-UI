<template>
    <div :class="`csRadioGroup ${realSize} ${realDisabled}`" :style="{'--color': fill}" ref="csRadioGroup">
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
            },
            size: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            fill: {
                type: String,
                default: '#409eff'
            }
        },
        mounted() {
           this.changeValue(this.value, 'init')
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        computed: {
            realSize() {
                if(this.size) {
                    return `csRadioGroup-${this.size}`
                } else {
                    return ''
                }
            },
            realDisabled() {
                if(this.disabled) {
                    return `csRadioGroup-disabled`
                } else {
                    return ''
                }
            }
        },
        methods: {
            changeValue(val, type) {
                if(type || !this.disabled) {
                    this.$slots.default.map((item)=> {
                        if(item.tag && (item.tag.indexOf('csRadio') > -1 || item.tag.indexOf('csRadioButton') > -1)) {
                            if(item.componentInstance.label === val) {
                                item.componentInstance.isSelect = true
                            } else {
                                item.componentInstance.isSelect = false
                            }
                            if(type) {
                                item.componentInstance.fill = this.fill
                            }
                        }
                    })
                    if(!type) {
                        this.$emit('change', val)
                    }
                }
            },
            watchFill() {
                this.$slots.default.map((item)=> {
                    if(item.tag && (item.tag.indexOf('csRadio') > -1 || item.tag.indexOf('csRadioButton') > -1)) {
                        item.componentInstance.fill = this.fill
                    }
                })
            }
        },
        watch: {
            fill: {
                handler: 'watchFill',
                deep: true,   // 深度监听
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csRadioGroup {
        font-size: 0;
        .csRadioButton:first-child{
            border-left: 1px solid #dcdfe6;
            border-radius: 4px 0 0 4px;
        }
        .csRadioButton:last-child{
            border-radius: 0 4px 4px 0;
        }
        .csRadio-border {
            padding: 9px 20px 9px 10px;
            border-radius: 4px;
        }
    }
    .csRadioGroup-medium .csRadioButton {
        padding: 10px 20px;
    }
    .csRadioGroup-small .csRadioButton {
        padding: 9px 15px;
        font-size: 12px;
    }
    .csRadioGroup-mini .csRadioButton {
        padding: 7px 15px;
        font-size: 12px;
    }
    .csRadioGroup-medium .csRadio-border {
        padding: 7px 18px 7px 8px;
    }
    .csRadioGroup-small .csRadio-border {
        padding: 5px 16px 5px 6px;
        font-size: 12px;
    }
    .csRadioGroup-mini .csRadio-border {
        padding: 4px 15px 4px 5px;
        font-size: 12px;
    }
    .csRadioGroup-disabled {
        .csRadioButton {
            color: #c0c4cc;
            cursor: not-allowed;
            background-image: none;
            background-color: #fff;
            border-color: #ebeef5;
            box-shadow: none;
        }
        .csRadio-border {
            border-color: #ebeef5;
        }
        /deep/ .csRadio {
            cursor: not-allowed;
            .csRadio-round {
                color: #e4e7ed;
            }
            .csRadio-label {
                color: #c0c4cc;
            }
            .csRadio-select {
                color: #e4e7ed;
            }
        }
    }
    .csRadioGroup-disabled .csRadioButton-select{
        background-color: #f2f6fc;
    }
</style>