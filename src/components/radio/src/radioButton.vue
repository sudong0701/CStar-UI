<template>
    <div :class="`csRadioButton ${realSize} ${realSelect} ${realDisabled}`" :style="{'--color': fill}"  @click="selectRadio">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csRadioButton',
        data() {
            return {
                isSelect: false,
                size: '',
                fill: '#409eff'
            }
        },
        props: {
            label: {
                type: Number | String | Boolean,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            realSize() {
                if(this.size) {
                    return `csRadioButton-${this.size}`
                } else {
                    return ''
                }
            },
            realSelect() {
                if(this.isSelect) {
                    return `csRadioButton-select`
                } else {
                    return ''
                }
            },
            realDisabled() {
                if(this.disabled) {
                    if(this.isSelect) {
                        return `csRadioButton-disabled-select`
                    } else {
                        return `csRadioButton-disabled`
                    }
                } else {
                    return ''
                }
            }
        },
        methods: {
            /**
             选中单选框的事件
             @param
             @return
             */
            selectRadio(e) {
                if(!this.disabled) {
                    if(this.$parent.$refs.csRadioGroup) {
                        this.$parent.changeValue(this.label)
                    } else  {
                        if(this.value !== this.label) {
                            this.$emit('change', this.label)
                        }
                    }
                    this.$emit('click', e)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csRadioButton {
        box-sizing: border-box;
        display: inline-flex;
        margin-right: 0;
        white-space: nowrap;
        padding: 12px 20px;
        font-size: 14px;
        line-height: 1;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
        border-top: 1px solid #dcdfe6;
        border-right: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
        color: #606266;
        background-color: #fff;
        cursor: pointer;
    }
    .csRadioButton-select {
        color: #fff;
        background-color: var(--color);
        border-color: var(--color);
    }
    .csRadioButton-disabled {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
        box-shadow: none;
    }
    .csRadioButton-disabled-select {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        border-color: #ebeef5;
        box-shadow: none;
        background-color: #f2f6fc;

    }
</style>