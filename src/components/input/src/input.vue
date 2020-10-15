<template>
    <div :class="`csInput ${realPrepend || realAppend ? 'csInput-group-prepend' : ''}`">
        <div class="csInput-prepend" v-if="realPrepend">
            <slot name="prepend"></slot>
        </div>
        <input v-if="type !== 'textarea'" ref="csInput"  v-model="componentValue" :class="`csInput_inner ${realDisabled} ${realClear} ${realPrepend ? 'csInput-inner-prepend' : ''} ${realAppend ? 'csInput-inner-append' : ''} ${realSize}`" :disabled="disabled"  :type="realType" :placeholder="placeholder" :style="{'--color': focusColor}" @focus="focus" @blur="blur">
        <div class="csInput-append" v-if="realAppend">
            <slot name="append"></slot>
        </div>
        <textarea ref="csTextarea" class="csTextarea_inner" v-if="type === 'textarea'" rows="1"  :placeholder="placeholder" :style="`--color: ${focusColor}; height: ${height}px; min-height: ${minHeight}px; max-height: ${maxHeight}px`" @input="textareaInput"></textarea>

        <i v-if="clear && componentValue" :class="`cs-icon-roundclose csInput-icon ${realFocus}`" @click="clearInput"></i>
        <i v-if="showPassword" v-show="isPassword" :class="`cs-icon-attention csInput-icon-password csInput-icon ${realFocus}`" @click="changePassword"></i>
        <i v-if="showPassword" v-show="!isPassword" :class="`cs-icon-attentionforbid csInput-icon-password csInput-icon ${realFocus}`" @click="changePassword"></i>
        <i v-if="prefixIcon" :class="`${prefixIcon} csInput-icon-prefix`"></i>
        <i v-if="suffixIcon" :class="`${suffixIcon} csInput-icon-suffix`"></i>
        <!--首部-->
        <span class="csInput-icon-prefix">
            <slot name="prefix"></slot>
        </span>
        <!--尾部-->
        <span class="csInput-icon-suffix">
            <slot name="suffix"></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'csInput',
        data() {
            return {
                componentValue: '',
                isFocus: false,
                isPassword: true,
                height: '',
                minHeight: -1,
                maxHeight: -1
            }
        },
        props: {
            value: {   //初始值
                type: String | Number,
                default: ''
            },
            placeholder: {   //输入框占位符
                type: String,
                default: ''
            },
            focusColor: {   //选中时边框颜色
                type: String,
                default: '#409eff'
            },
            disabled: {   //是否禁用
                type: Boolean,
                default: false
            },
            clear: {   //是否显示清除按钮
                type: Boolean,
                default: false
            },
            "showPassword": {   //是否密码形式显示
                type: Boolean,
                default: false
            },
            "prefixIcon": {   //首部图标
                type: String,
                default: ''
            },
            "suffixIcon": {   //尾部图标
                type: String,
                default: ''
            },
            type: {   //input框的类型
                type: String,
                default: 'text'
            },
            autosize: {   //textarea高度自动调整
                type: Boolean | Object,
                default: false
            },
            rows: {
                type: String | Number,
                default: 2
            },
            size: {
                type: String,
                default: ''
            }
        },
        mounted() {
            if(this.type === 'textarea' && typeof this.autosize === 'boolean' && this.autosize) {
                this.height = this.$refs.csTextarea.scrollHeight + 2
            }
        },
        model: {
            props: 'value',
            event: 'change'
        },
        computed: {
            realDisabled() {
                if(this.disabled) {
                    return 'csInput_inner-disabled'
                } else {
                    return ''
                }
            },
            realClear() {
                if(this.clear || this.showPassword || this.suffixIcon || this.$slots.suffix) {
                    return 'csInput_inner-suffix'
                } else if(this.prefixIcon || this.$slots.prefix){
                    return 'csInput_inner-prefix'
                } else {
                    return ''
                }
            },
            realFocus() {
                if(this.isFocus) {
                    return 'csInput-icon-focus'
                } else {
                    return ''
                }
            },
            realType() {
                if(this.showPassword && this.isPassword) {
                    return 'password'
                } else {
                    return 'text'
                }
            },
            realPrepend() {
                if(this.type !== 'textarea' && this.$slots.prepend) {
                    return true
                } else {
                    return false
                }
            },
            realAppend() {
                if(this.type !== 'textarea' && this.$slots.append) {
                    return true
                } else {
                    return false
                }
            },
            realSize() {
                if(this.size) {
                    return `csInput_inner-${this.size}`
                } else {
                    return ''
                }
            }
        },
        methods: {
            /**
             点击清除按钮时触发
             @param
             @return
             */
            clearInput() {
                //this.$emit('change', '')
                this.componentValue = ''
                this.$refs.csInput.focus()
            },
            /**
             input框获取焦点事件
             @param
             @return
             */
            focus() {
                this.isFocus = true
            },
            /**
             input框失去焦点事件
             @param
             @return
             */
            blur() {
                this.isFocus = false
            },
            /**
             textarea输入事件
             @param
             @return
             */
            textareaInput() {
                if(this.autosize) {
                    this.height = this.$refs.csTextarea.scrollHeight + 2
                }
            },
            /**
             更改密码状态
             @param
             @return
             */
            changePassword() {
                this.isPassword = !this.isPassword
                this.$refs.csInput.focus()
            },
            /**
             监听autosize改变事件
             @param
             @return
             */
            watchAutosize(val) {
                if(val instanceof Object) {
                    this.minHeight = (val.minRows && val.minRows >= 1) ? (val.minRows - 1) * 21 + 33 :33
                    this.maxHeight = val.maxRows ? val.maxRows * 21 + 12 : ''
                }
            }
        },
        watch: {
            autosize: {
                handler: 'watchAutosize',
                deep: true,   // 深度监听
                immediate: true   //立即执行 即创建组建后能够立即执行
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csInput {
        position: relative;
        cursor: pointer;
        .csInput_inner {
            width: 100%;
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        }
        .csInput_inner-large {
            height: 36px;
            line-height: 36px;
        }
        .csInput_inner-small {
            height: 32px;
            line-height: 32px;
        }
        .csInput_inner-mini {
            height: 28px;
            line-height: 28px;
        }
        .csInput-inner-prepend {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        .csInput-inner-append {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        .csInput_inner::-webkit-input-placeholder{
            font-size: 14px;
            color: #c0c4cc;
        }
        .csInput_inner:focus {
            outline: none;
            border-color: var(--color);
        }
        .csInput_inner-disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
        .csInput_inner-suffix {
            padding-right: 30px;
        }
        .csInput_inner-prefix {
            padding-left: 30px;
        }
        .csInput-icon {
            position: absolute;
            display: none;
            height: 16px;
            width: 16px;
            right: 8px;
            top: 0;
            bottom: 0;
            margin: auto;
            font-size: 15px;
            color: #fff;
        }
        .csInput-icon-focus {
            display: block;
            color: #c0c4cc;
        }
        .csInput-icon:hover {
            color: #aaa;
            display: block;
        }
        .csInput-icon-suffix {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: absolute;
            height: 18px;
            width: 18px;
            right: 10px;
            top: 0;
            bottom: 0;
            margin: auto;
            font-size: 18px;
            color: #c0c4cc;
            /deep/ i {
                font-size: 18px;
                color: #c0c4cc;
            }
        }
        .csInput-icon-prefix {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: absolute;
            height: 18px;
            width: 18px;
            left: 7px;
            top: 0;
            bottom: 0;
            margin: auto;
            font-size: 18px;
            color: #c0c4cc;
            /deep/ i {
                font-size: 18px;
                color: #c0c4cc;
            }
        }
        .csTextarea_inner {
            display: block;
            resize: vertical;
            padding: 5px 15px;
            line-height: 21px;
            box-sizing: border-box;
            width: 100%;
            font-size: inherit;
            color: #606266;
            background-color: #fff;
            background-image: none;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            outline-width: 0;
        }
        .csTextarea_inner:focus {
            outline: none;
            border-color: var(--color);
        }
        .csTextarea_inner::-webkit-input-placeholder{
            font-size: 14px;
            color: #c0c4cc;
        }
        .csInput-prepend {
            background-color: #f5f7fa;
            color: #909399;
            vertical-align: middle;
            display: table-cell;
            position: relative;
            border: 1px solid #dcdfe6;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            padding: 0 20px;
            width: 1px;
            white-space: nowrap;
            font-size: 14px;
            border-right: none;
        }
        .csInput-append {
            background-color: #f5f7fa;
            color: #909399;
            vertical-align: middle;
            display: table-cell;
            position: relative;
            border: 1px solid #dcdfe6;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            padding: 0 20px;
            width: 1px;
            white-space: nowrap;
            font-size: 14px;
            border-left: none;

        }
    }
    .csInput-group-prepend {
        line-height: normal;
        display: inline-table;
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }
    .csInput-group-append {
        line-height: normal;
        display: inline-table;
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
    }
</style>