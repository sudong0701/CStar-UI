<template>
    <div :class="`csCheckboxGroup ${realSize} ${realDisabled}`" :style="{'--color': fill}" ref="csCheckboxGroup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csCheckboxGroup',
        data() {
            return {

            }
        },
        props: {
            value: {
                type: String |Array,
                default: ()=> {
                    return []
                }
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
            },
            max: {
                type: String | Number,
                default: 0
            }
        },
        mounted() {
            this.initGroup()
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        computed: {
            realSize() {
                if(this.size) {
                    return `csCheckboxGroup-${this.size}`
                } else {
                    return ''
                }
            },
            realDisabled() {
                if(this.disabled) {
                    return `csCheckboxGroup-disabled`
                } else {
                    return ''
                }
            }
        },
        methods: {
            /**
             初始化复选框组
             @param
             @return
             */
            initGroup() {
                this.$slots.default.map((item)=> {
                    if(item.tag && (item.tag.indexOf('csCheckbox') > -1 || item.tag.indexOf('csCheckboxButton') > -1)) {
                        if(this.value instanceof Array) {   //如果为数组
                            if(this.value.indexOf(item.componentInstance.label) > -1) {
                                item.componentInstance.isSelect = true
                            }
                        } else {
                            if(this.value === item.componentInstance.label) {
                                item.componentInstance.isSelect = true
                            }
                        }
                        item.componentInstance.fill = this.fill
                        item.componentInstance.groupDisabled = this.disabled
                    }
                })
            },
            /**
             复选框改变时触发
             @param
             @return
             */
            changeValue(isSelect, label) {
                if(!this.disabled) {
                    if(isSelect) {
                        if(this.max && this.value.length >= this.max) {
                            return
                        }
                        if(Array.isArray(this.value)) {
                            this.$emit('change', this.value.concat(label))
                        } else {
                            this.$emit('change', [this.value].concat(label))
                        }
                    } else {
                        if(Array.isArray(this.value)) {
                            let replaceArr = [...this.value]
                            replaceArr.splice(replaceArr.indexOf(label), 1)
                            this.$emit('change', replaceArr)
                        } else {
                            this.$emit('change', [])
                        }
                    }
                }
            },
            /**
             监听fill改变事件
             @param
             @return
             */
            watchFill() {
                this.$slots.default.map((item)=> {
                    if(item.tag && (item.tag.indexOf('csCheckbox') > -1 || item.tag.indexOf('csCheckboxButton') > -1)) {
                        item.componentInstance.fill = this.fill
                    }
                })
            },
            /**
             监听disabled改变事件
             @param
             @return
             */
            watchDisabled() {
                this.$slots.default.map((item)=> {
                    if(item.tag && (item.tag.indexOf('csCheckbox') > -1 || item.tag.indexOf('csCheckboxButton') > -1)) {
                        item.componentInstance.groupDisabled = this.disabled
                    }
                })
            }
        },
        watch: {
            fill: {
                handler: 'watchFill',
                deep: true,   // 深度监听
            },
            disabled: {
                handler: 'watchDisabled',
                deep: true,   // 深度监听
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csCheckboxGroup {
        font-size: 0;
        .csCheckboxButton:first-child{
            border-left: 1px solid #dcdfe6;
            border-radius: 4px 0 0 4px;
        }
        .csCheckboxButton:last-child{
            border-radius: 0 4px 4px 0;
        }
        .csCheckbox-border {
            padding: 9px 20px 9px 10px;
            border-radius: 4px;
        }
    }
    .csCheckboxGroup-medium .csCheckboxButton {
        padding: 10px 20px;
    }
    .csCheckboxGroup-small .csCheckboxButton {
        padding: 9px 15px;
        font-size: 12px;
    }
    .csCheckboxGroup-mini .csCheckboxButton {
        padding: 7px 15px;
        font-size: 12px;
    }
    .csCheckboxGroup-medium .csCheckbox-border {
        padding: 7px 18px 7px 8px;
    }
    .csCheckboxGroup-small .csCheckbox-border {
        padding: 5px 16px 5px 6px;
        font-size: 12px;
    }
    .csCheckboxGroup-mini .csCheckbox-border {
        padding: 4px 15px 4px 5px;
        font-size: 12px;
    }
    .csCheckboxGroup-disabled {
        .csCheckboxButton {
            color: #c0c4cc;
            cursor: not-allowed;
            background-image: none;
            background-color: #fff;
            border-color: #ebeef5;
            box-shadow: none;
        }
        .csCheckbox-border {
            border-color: #ebeef5;
        }
        /deep/ .csCheckbox {
            cursor: not-allowed;
            .csCheckbox-round {
                color: #e4e7ed;
            }
            .csCheckbox-label {
                color: #c0c4cc;
            }
            .csCheckbox-select {
                color: #e4e7ed;
            }
        }
    }
    .csCheckboxGroup-disabled .csCheckboxButton-select{
        background-color: #f2f6fc;
    }
</style>