// 计数器组件
<template>
    <div :class="`cs-inputNumber ${(isFocus && !disabled) ? 'cs-inputNumber-focus' : ''} ${disabled ? 'cs-inputNumber-disabled' : ''}`" :style="`border-radius: ${computedBorderRadius}`">
        <div :class="`cs-inputNumber-less-default ${(isDisabledLess || disabled) ? 'cs-inputNumber-less-default-disabled' : ''}`" @click="less">
            <i class="cs-icon-less"></i>
        </div>
        <div :class="`cs-inputNumber-add-default ${(isDisabledAdd || disabled) ? 'cs-inputNumber-add-default-disabled' : ''}`" @click="add">
            <i class="cs-icon-add"></i>
        </div>
        <div :class="`cs-inputNumber-content cs-inputNumber-content-${controlsPosition} ${disabled ? 'cs-inputNumber-content-disabled' : ''}`">
            <csInput v-model="inputValue" :disabled="disabled" @focus="focus" @blur="blur" @change="change" type="number"></csInput>
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
            default: 'default'   //left default right
        },
        step: {   //步长
            type: Number | String,
            default: 1
        },
        max: {   //最大值
            type: String | Number,
            default: '10'
        },
        min: {   //最小值
            type: String | Number,
            default: '0'
        },
        disabled: {   //是否禁用
            type: Boolean,
            default: false
        }
    },
    components: {
        csInput
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    computed: {
        /**
         * 计算圆角值
         * @param
         * @return {String} 圆角属性
         */
        computedBorderRadius() {
            if(typeof this.borderRadius === 'number') {
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
            if(this.min === '') {
                return false
            }
            if(Number(this.inputValue) <= Number(this.min)) {
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
            if(this.max === '') {
                return false
            }
            if(Number(this.inputValue) >= Number(this.max)) {
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

        },
        /**
         * 点击加号时触发
         * @param
         * @return
         */
        add() {
            if(this.isDisabledAdd || this.disabled) {
                return
            }
            let inputValue = Number(this.inputValue) + Number(this.step)
            if(inputValue > this.max) {
                inputValue = this.max
            }
            this.inputValue = inputValue
            this.$emit('change', inputValue)
        },
        /**
         * 点击减号时触发
         * @param
         * @return
         */
        less() {
            if(this.isDisabledLess || this.disabled) {
                return
            }
            let inputValue = Number(this.inputValue) - Number(this.step)
            if(inputValue < this.min) {
                inputValue = this.min
            }
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
            immediate: true
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
    transition: border-color .15s;
    .cs-inputNumber-less-default, .cs-inputNumber-add-default {
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
    .cs-inputNumber-less-default-disabled, .cs-inputNumber-add-default-disabled {
        color: $color_disabled;
        cursor: not-allowed;
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
</style>