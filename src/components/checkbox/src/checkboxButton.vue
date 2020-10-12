<template>
    <div :class="`csCheckboxButton ${realSize} ${realSelect} ${realDisabled}`" :style="{'--color': fill}"  @click="selectCheckbox">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csCheckboxButton',
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
                    return `csCheckboxButton-${this.size}`
                } else {
                    return ''
                }
            },
            realSelect() {
                if(this.isSelect) {
                    return `csCheckboxButton-select`
                } else {
                    return ''
                }
            },
            realDisabled() {
                if(this.disabled) {
                    if(this.isSelect) {
                        return `csCheckboxButton-disabled-select`
                    } else {
                        return `csCheckboxButton-disabled`
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
            selectCheckbox(e) {
                if(!this.disabled) {
                    if(this.$parent.$refs.csCheckboxGroup) {
                        this.$parent.changeValue(!this.isSelect, this.label)
                    }
                    this.isSelect = !this.isSelect
                    this.$emit('click', e)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csCheckboxButton {
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
    .csCheckboxButton-select {
        color: #fff;
        background-color: var(--color);
        border-top-color: var(--color);
        border-bottom-color: var(--color);
        border-right-color: #fff;
    }
    .csCheckboxButton-disabled {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
        box-shadow: none;
    }
    .csCheckboxButton-disabled-select {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        border-color: #ebeef5;
        box-shadow: none;
        background-color: #f2f6fc;

    }
</style>