<template>
    <div :class="`csCheckbox ${realClass} csCheckbox${realDisabled} ${realBorder}`" :style="{'--color': fill}"  @click="selectCheckbox">
        <i v-show="!realSelect" class="cs-icon-square csCheckbox-square"></i>
        <i v-show="realSelect && !disabled && !groupDisabled" class="cs-icon-squarecheckfill csCheckbox-square csCheckbox-select"></i>
        <i v-show="realSelect && (disabled || groupDisabled)" class="cs-icon-squarecheck csCheckbox-square csCheckbox-select"></i>
        <span class="csCheckbox-label">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'csCheckbox',
        data() {
            return {
                isSelect: false,
                fill: '#409eff',
                groupDisabled: false
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: Number | String | Boolean,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        computed: {
            realSelect() {
                if(this.value|| this.isSelect) {
                    return true
                } else {
                    return false
                }
            },
            realClass() {
                if(this.value || this.isSelect) {
                    return 'csCheckbox-select'
                } else {
                    return ''
                }
            },
            realDisabled() {
                if(this.disabled) {
                    return '-disabled'
                } else {
                    return ''
                }
            },
            realBorder() {
                if(this.border) {
                    if(this.isSelect) {
                        if(this.disabled) {
                            return 'csCheckbox-border csCheckbox-border-select csCheckbox-border-disabled'
                        } else {
                            return 'csCheckbox-border csCheckbox-border-select'
                        }
                    } else {
                        return 'csCheckbox-border'
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
                        this.isSelect = !this.isSelect
                    } else {
                        this.$emit('change', !this.value)
                    }
                    this.$emit('click', e)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csCheckbox {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin-right: 30px;
        cursor: pointer;
        color: #606266;
        .csCheckbox-square {
            font-size: 18px;
            color: #dcdfe6;
        }
        .csCheckbox-label {
            font-size: 14px;
            padding-left: 5px;
            color: #606266;
        }
        .csCheckbox-select {
            color: var(--color);
        }
    }
    .csCheckbox-select {
        .csCheckbox-label {
            font-size: 14px;
            padding-left: 5px;
            color: var(--color);
            //transition: all 0.05s;
        }
    }
    .csCheckbox-disabled {
        cursor: not-allowed;
        .csCheckbox-square {
            color: #e4e7ed;
        }
        .csCheckbox-label {
            color: #c0c4cc;
        }
        .csCheckbox-select {
            color: #e4e7ed;
        }
    }
    .csCheckbox-border {
        border: 1px solid #dcdfe6;
    }
    .csCheckbox-border-select {
        border-color: var(--color);
    }
    .csCheckbox-border-disabled {
        border-color: #ebeef5;
    }
</style>