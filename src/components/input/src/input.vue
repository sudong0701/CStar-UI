<template>
    <div class="csInput">
        <input v-if="type !== 'textarea'" ref="csInput"  v-model="componentValue" :class="`csInput_inner ${realDisabled} ${realClear}`" :disabled="disabled"  :type="realType" :placeholder="placeholder" :style="{'--color': focusColor}" @focus="focus" @blur="blur">

        <textarea class="csTextarea_inner" v-if="type === 'textarea'"  :rows="realRows" :placeholder="placeholder" :style="`--color: ${focusColor}; height: ${realHeight}`" @scroll="scroll"></textarea>

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
                height: 0,
                minHeight: 0,
                maxHeight: 0
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
            }
        },
        mounted() {

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
            realRows() {
                if(!this.autosize) {
                    return Number(this.rows)
                } else {
                    return ''
                }
            },
            realHeight() {
                if(this.autosize) {
                    return `${this.height}px`
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
             textarea滚动事件
             @param
             @return
             */
            scroll() {
                console.log(111)
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
                console.log(val)
                if(val instanceof Object) {

                } else {

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
            line-height: 1.5;
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
    }
</style>