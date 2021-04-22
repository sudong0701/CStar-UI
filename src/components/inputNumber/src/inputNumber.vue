// 计数器组件
<template>
    <div :class="`cs-inputNumber ${(isFocus && !disabled) ? 'cs-inputNumber-focus' : ''} ${disabled ? 'cs-inputNumber-disabled' : ''} ${size ? 'cs-inputNumber-'+size : ''}`" :style="`border-radius: ${computedBorderRadius}`">
        <div v-if="controlsPosition == 'default'" :class="`cs-inputNumber-less-default ${(isDisabledLess || disabled) ? 'cs-inputNumber-less-default-disabled' : ''} ${size ? 'cs-inputNumber-control-'+size : ''}`" @click="less">
            <i class="cs-icon-less"></i>
        </div>
        <div v-if="controlsPosition == 'default'" :class="`cs-inputNumber-add-default ${(isDisabledAdd || disabled) ? 'cs-inputNumber-add-default-disabled' : ''} ${size ? 'cs-inputNumber-control-'+size : ''}`" @click="add">
            <i class="cs-icon-add"></i>
        </div>

        <div v-if="controlsPosition == 'right'" :class="`cs-inputNumber-add-default ${controlsPosition == 'right' ? 'cs-inputNumber-control-box' : ''} ${size ? 'cs-inputNumber-add-default-'+size : ''}` ">
            <div :class="`cs-inputNumber-control-add ${(isDisabledAdd || disabled) ? 'cs-inputNumber-add-default-disabled' : ''} ${size ? 'cs-inputNumber-control-'+size : ''}`" @click="add">
                <i class="cs-icon-fold"></i>
            </div>
            <div :class="`cs-inputNumber-control-less ${(isDisabledLess || disabled) ? 'cs-inputNumber-less-default-disabled' : ''} ${size ? 'cs-inputNumber-control-'+size : ''}`" @click="less">
                <i class="cs-icon-unfold"></i>
            </div>
        </div>

        <div :class="`cs-inputNumber-content cs-inputNumber-content-${controlsPosition} ${disabled ? 'cs-inputNumber-content-disabled' : ''} ${size ? 'cs-inputNumber-content-'+size : ''}`">
            <csInput v-model="inputValue" :readonly="disabledInput" :disabled="disabled" :size="size" @focus="focus" @blur="blur" @change="change" :type="computedInputType" :toFixed="precision"></csInput>
        </div>
    </div>
</template>

<script>
import csInput from '../../input/src/input'
export default {
    name: 'csInputNumber',
    data() {
        return {
            isFocus: false,
            inputValue: ''
        }
    },
    props: {
        value: {    //组件绑定的值
            type: String | Number,
            default: '1'
        },
        borderRadius: {    //圆角大小
            type: Number | String,
            default: 4
        },
        controlsPosition: {   //控制选项的位置
            type: String,
            default: 'default'   //default right
        },
        step: {   //步长
            type: Number | String,
            default: 1
        },
        max: {   //最大值
            type: String | Number,
            default: ''
        },
        min: {   //最小值
            type: String | Number,
            default: ''
        },
        disabled: {   //是否禁用
            type: Boolean,
            default: false
        },
        disabledInput: {   //禁止输入
            type: Boolean,
            default: false
        },
        precision: {   //精度
            type: Number | String,
            default: 0
        },
        size: {    //large、small、mini
            type: String,
            default: ''
        }
    },
    components: {
        csInput
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    mounted() {
        const num = 0, value = new Number(this.value), precision = Number(this.precision)
        this.inputValue = num.toFixed.call(value, precision)
    },
    computed: {
        /**
         * 计算输入框类型
         * @param
         * @return {String} 输入框类型
         */
        computedInputType() {
            if (this.min !== '' && this.min >= 0) {
                return 'positive'
            } else {
                return 'number'
            }
        },
        /**
         * 计算圆角值
         * @param
         * @return {String} 圆角属性
         */
        computedBorderRadius() {
            if (typeof this.borderRadius === 'number') {
                return `${this.borderRadius}px`
            } else {
                return this.borderRadius
            }
        },
        /**
         * 计算是否禁用减少按钮
         * @param
         * @return {Boolean} 是否禁用减少按钮
         */
        isDisabledLess() {
            if (this.min === '') {
                return false
            }
            if (Number(this.inputValue) <= Number(this.min)) {
                return true
            } else {
                return false
            }
        },
        /**
         * 计算是否禁用增加按钮
         * @param
         * @return {Boolean} 是否禁用增加按钮
         */
        isDisabledAdd() {
            if (this.max === '') {
                return false
            }
            if (Number(this.inputValue) >= Number(this.max)) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        /**
         * 输入框获取焦点时触发
         * @param
         * @return
         */
        focus() {
            this.isFocus = true
            this.$emit('focus')
        },
        /**
         * 输入框失去焦点时触发
         * @param
         * @return
         */
        blur() {
            this.isFocus = false
            this.$emit('blur')
            let result = Math.round(this.inputValue / this.step) * this.step
            result = (this.max !== '' && result > this.max) ? this.max : result
            result = (this.min !== '' && result < this.min) ? this.min : result
            if (result != this.inputValue) {
                result = result.toFixed(Number(this.precision))
                this.inputValue = result
                this.$emit('change', result)
            }
        },
        /**
         * 点击加号时触发
         * @param
         * @return
         */
        add() {
            if (this.isDisabledAdd || this.disabled) {
                return
            }
            let inputValue = Number(this.inputValue) + Number(this.step)
            if (this.max !== '' && inputValue > this.max) {
                inputValue = this.max
            }
            inputValue = inputValue.toFixed(Number(this.precision))
            this.inputValue = inputValue
            this.$emit('change', inputValue)
        },
        /**
         * 点击减号时触发
         * @param
         * @return
         */
        less() {
            if (this.isDisabledLess || this.disabled) {
                return
            }
            let inputValue = Number(this.inputValue) - Number(this.step)
            if (this.min !== '' && inputValue < this.min) {
                inputValue = this.min
            }
            inputValue = inputValue.toFixed(Number(this.precision))
            this.inputValue = inputValue
            this.$emit('change', inputValue)
        },
        /**
         * 输入框值变化时触发
         * @param {String} val 变化后的值
         * @return
         */
        change(val) {
            this.$emit('change', val)
        }
    },
    watch: {
        value: {
            handler(newValue) {
                this.inputValue = newValue
            },
            //immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
.cs-inputNumber {
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: 180px;
    border: 1px solid $cs_border_color;
    cursor: pointer;
    user-select: none;
    transition: border-color 0.15s;
    .cs-inputNumber-less-default,
    .cs-inputNumber-add-default {
        float: left;
        line-height: 40px;
        width: 40px;
        text-align: center;
        background: #f5f7fa;
        i {
            font-size: 18px;
        }
    }
    .cs-inputNumber-less-default {
        border-right: 1px solid $cs_border_color;
    }
    .cs-inputNumber-less-default-disabled,
    .cs-inputNumber-add-default-disabled {
        color: $color_disabled;
        cursor: not-allowed;
    }
    .cs-inputNumber-control-box {
        line-height: 18px;
        .cs-inputNumber-control-add,.cs-inputNumber-control-less {
            width: 40px;
        }
        .cs-inputNumber-control-add {
            border-bottom: 1px solid $cs_border_color;
        }
        i {
            font-size: 12px;
        }
        .cs-inputNumber-control-large {
            width: 100%;
            line-height: 16px;
            height: 18px;
        }
        .cs-inputNumber-control-small {
            width: 100%;
            line-height: 14px;
            height: 16px;
        }
        .cs-inputNumber-control-mini {
            width: 100%;
            line-height: 12px;
            height: 14px;
        }
    }
    .cs-inputNumber-add-default-large {
        width: 36px;
    }
    .cs-inputNumber-add-default-small {
        width: 32px;
    }
    .cs-inputNumber-add-default-mini {
        width: 28px;
    }
    .cs-inputNumber-control-large {
        line-height: 36px;
        width: 36px;
    }
    .cs-inputNumber-control-small {
        line-height: 32px;
        width: 32px;
    }
    .cs-inputNumber-control-mini {
        line-height: 28px;
        width: 28px;
    }
    .cs-inputNumber-add-default {
        float: right;
        border-left: 1px solid $cs_border_color;
    }
    .cs-inputNumber-content {
        /deep/ .csInput_inner {
            text-align: center;
            font-size: 16px;
            border: none;
        }
    }
    .cs-inputNumber-content-default {
        padding: 0 44px;
    }
    .cs-inputNumber-content-right {
        padding-left: 0 !important;
        padding-right: 44px;
    }
    .cs-inputNumber-content-large {
        padding: 0 40px;
    }
    .cs-inputNumber-content-small {
        padding: 0 36px;
    }
    .cs-inputNumber-content-mini {
        padding: 0 32px;
    }
}
.cs-inputNumber:hover {
    border-color: $cs_border_hover_color;
}
.cs-inputNumber-focus {
    border-color: $cs_border_focus_color;
}
.cs-inputNumber-focus:hover {
    border-color: $cs_border_focus_color;
}
.cs-inputNumber-disabled {
    cursor: not-allowed;
    background-color: #f5f7fa;
    .cs-inputNumber-content-disabled {
        cursor: not-allowed;
    }
}
.cs-inputNumber-disabled:hover {
    border-color: $cs_border_color;
}
.cs-inputNumber-large {
    width: 168px;
}
.cs-inputNumber-small {
    width: 156px;
}
.cs-inputNumber-mini {
    width: 144px;
}
</style>