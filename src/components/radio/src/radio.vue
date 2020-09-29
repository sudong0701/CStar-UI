<template>
    <div :class="`csRadio ${realClass} csRadio${realDisabled}`" @click="selectRadio">
        <i v-show="!realSelect" class="cs-icon-round csRadio-round"></i>
        <i v-show="realSelect" class="cs-icon-radioboxfill csRadio-round csRadio-select"></i>
        <span class="csRadio-label">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'csRadio',
        data() {
            return {
                isSelect: false
            }
        },
        props: {
            value: {
                type: Number | String,
                default: ''
            },
            label: {
                type: Number | String | Boolean,
                default: ''
            },
            disabled: {
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
                if(this.value === this.label || this.isSelect) {
                    return true
                } else {
                    return false
                }
            },
            realClass() {
                if(this.value === this.label || this.isSelect) {
                    return 'csRadio-select'
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
    .csRadio {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin-right: 30px;
        cursor: pointer;
        color: #606266;
        .csRadio-round {
            font-size: 18px;
            color: #dcdfe6;
        }
        .csRadio-label {
            font-size: 14px;
            padding-left: 5px;
            color: #606266;
        }
        .csRadio-select {
            color: #409eff;
        }
    }
    .csRadio-select {
        .csRadio-label {
            font-size: 14px;
            padding-left: 5px;
            color: #409eff;
            transition: all 0.05s;
        }
    }
    .csRadio-disabled {
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
</style>