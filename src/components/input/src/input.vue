<template>
    <div :class="`csInput ${realPrepend || realAppend ? 'csInput-group-prepend' : ''}`">
        <div class="csInput-prepend" v-if="realPrepend">
            <slot name="prepend"></slot>
        </div>
        <div class="csInput_inner-box">
            <input v-if="type !== 'textarea'" ref="csInput" v-model="componentValue" :class="`csInput_inner ${realDisabled} ${realClear} ${realPrepend ? 'csInput-inner-prepend' : ''} ${realAppend ? 'csInput-inner-append' : ''} ${realSize} ${computedFocusClass}`" :disabled="disabled" :type="realType" :readonly="readonly" :placeholder="placeholder" :style="{'--color': focusColor}" @focus.stop="focus" @blur.stop="blur" @input="onInput" @mousedown.stop>
            <i v-if="clear && componentValue && showClear" :class="`cs-icon-roundclosefill csInput-icon csInput-icon-clear ${isSelect ? 'csInput-icon-clear-transparent' : ''}`" @mousedown.stop="clearInput"></i>
        </div>
        <div class="csInput-append" v-if="realAppend">
            <slot name="append"></slot>
        </div>
        <textarea ref="csTextarea" class="csTextarea_inner" v-if="type === 'textarea'" rows="1" :placeholder="placeholder" :style="`--color: ${focusColor}; height: ${height}px; min-height: ${minHeight}px; max-height: ${maxHeight}px`" @input="textareaInput" @focus.stop="focus" @blur.stop="blur"></textarea>
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
        <transition name="flex">
            <div v-if="autocomplete && isShowSuggest" :class="`csInput-scrollbar ${realSize}`" @mouseover="isEntrance = false">
                <div class="csInput-scrollbar_arrow"></div>
                <div class="csInput-scrollbar-content custom-scroll" ref="csInputScroll" @scroll="scroll">
                    <div class="csInput-scrollbar-item" v-for="(suggestItem, key) in componentSuggestList" :key="key" @mousedown.stop="selectSuggestItem(suggestItem, key)">
                        <slot name="suggestItem" :index="key" :item="suggestItem">
                            <div class="csInput-scrollbar-item-content text_ellipsis">
                                <span :class="`${computedActive(key) ? 'csInput-scrollbar-item-active' : ''}`">{{suggestItem[customLabel]}}</span>
                                <i v-show="computedActive(key)" class="cs-icon-check"></i>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </transition>
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
            maxHeight: -1,
            isShowSuggest: false,
            componentSuggestList: [],
            scrollTop: 0,
            isEntrance: false
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
        readonly: {    //是否只读
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
            default: 'text'   //text、number、positive
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
        },
        toFixed: {    //仅当type为decimal时有效 输入框限制的小数位 -1时为不限制小数位
            type: Number | String,
            default: -1
        },
        autocomplete: {    //是否开启输入建议
            type: Boolean,
            default: false
        },
        suggestList: {    //输入建议的数组
            type: Array,
            default: () => {
                return []
            }
        },
        customLabel: {    //输入建议数组文案展示的字段
            type: String,
            default: 'label'
        },
        isSelect: {    //select模式 配合select使用
            type: Boolean,
            default: false
        },
        active: {
            type: String | Number | Array,
            default: ''
        }
    },
    mounted() {
        if (this.type === 'textarea' && typeof this.autosize === 'boolean' && this.autosize) {
            this.height = this.$refs.csTextarea.scrollHeight + 2
        }
    },
    model: {
        props: 'value',
        event: 'change'
    },
    computed: {
        showClear() {
            if (this.isSelect) {
                return true
            } else {
                return this.isFocus
            }
        },
        transparentClear() {
            if (this.isSelect) {
                return !this.isEntrance

            } else {
                return false
            }
        },
        computedFocusClass() {
            if (this.isFocus) {
                return 'csInput_inner-focus'
            } else {
                return ''
            }
        },
        realDisabled() {
            if (this.disabled) {
                return 'csInput_inner-disabled'
            } else {
                return ''
            }
        },
        realClear() {
            if (this.clear || this.showPassword || this.suffixIcon || this.$slots.suffix) {
                return 'csInput_inner-suffix'
            } else if (this.prefixIcon || this.$slots.prefix) {
                return 'csInput_inner-prefix'
            } else {
                return ''
            }
        },
        realFocus() {
            if (this.isFocus) {
                return 'csInput-icon-focus'
            } else {
                return ''
            }
        },
        realType() {
            if (this.showPassword && this.isPassword) {
                return 'password'
            } else {
                return 'text'
            }
        },
        realPrepend() {
            if (this.type !== 'textarea' && this.$slots.prepend) {
                return true
            } else {
                return false
            }
        },
        realAppend() {
            if (this.type !== 'textarea' && this.$slots.append) {
                return true
            } else {
                return false
            }
        },
        realSize() {
            if (this.size) {
                return `csInput_inner-${this.size}`
            } else {
                return ''
            }
        },
        watchSuggestList() {
            const { componentValue, suggestList } = this
            return {
                componentValue,
                suggestList
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
            this.$emit('clear')
            this.$emit('change', '')
            this.componentValue = ''
            if (!this.isSelect) {
                setTimeout(() => {
                    this.$refs.csInput.focus()
                })
            }
        },
        $focus() {
            this.$refs.csInput.focus()
        },
        /**
         input框获取焦点事件
         @param
         @return
         */
        focus() {
            this.$emit('focus')
            this.isFocus = true
            this.isShowSuggest = true
            //如果为select模式
            if (this.isSelect) {
                document.getElementsByTagName('body')[0].addEventListener('mousedown', this.hideSuggest)
                this.$nextTick(() => {
                    this.$refs.csInputScroll.scrollTo(0, this.scrollTop)
                })
            }
        },
        /**
         鼠标移动到input框时触发
         @param
         @return
         */
        mouseover() {
            this.isEntrance = true
            this.$emit('mouseover')
        },
        /**
         鼠标移出到input框时触发
         @param
         @return
         */
        mouseout() {
            this.isEntrance = false
            this.$emit('mouseout')
        },
        /**
         隐藏输入建议
         @param
         @return
         */
        hideSuggest() {
            console.log(111)
            this.isFocus = false
            this.isShowSuggest = false
        },
        /**
         input框失去焦点事件
         @param
         @return
         */
        blur() {
            this.$emit('blur')
            if (!this.isSelect) {
                this.isFocus = false
            }
            this.isShowSuggest = false
        },

        /**
         选择提示项时触发
         @param {Object} suggestItem 提示项信息
         @param {Number} index 点击的下标
         @return
         */
        selectSuggestItem(suggestItem, index) {
            this.$emit('select', {
                item: suggestItem, index
            })
            if (this.isSelect) {
                return
            }
            this.componentValue = suggestItem[this.customLabel]
            this.$emit('change', suggestItem[this.customLabel])
        },

        /**
         input框输入事件
         @param {Event} e 输入框输入事件
         @return
         */
        onInput(e) {
            this.$emit('input', e)
            let selfValue
            switch (this.type) {
                case 'positive':   //正数(不允许负数)
                    if (this.toFixed == 0) {   //正整数(不支持小数)
                        selfValue = this.componentValue.replace(/[^\d]/g, '')   //过滤非数字
                    } else if (this.toFixed > 0) {   //正数(支持小数)
                        selfValue = this.componentValue.replace(/[^\d\.]/g, '')   //过滤非数字和.
                        selfValue = selfValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")   //去除多余的.
                        let regStr = '^(\\-)*(\\d+)\\.('
                        for (let i = 0; i < this.toFixed; i++) {
                            regStr += '\\d'
                        }
                        regStr += ').*$'
                        const decimalReg = new RegExp(regStr)
                        selfValue = selfValue.replace(decimalReg, '$1$2.$3')
                    } else {    //正数(不限制小数位)
                        selfValue = this.componentValue.replace(/[^\d\.]/g, '')   //过滤非数字和.
                        selfValue = selfValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")   //去除多余的.
                    }
                    this.componentValue = selfValue
                    this.$emit('change', selfValue)
                    break
                case 'number':   //整数(允许负数)
                    if (this.toFixed == 0) {    //(不允许小数位)
                        const value = `${this.componentValue}`.match(/^-?[1-9]*\d*|0/g, '')
                        selfValue = value === null ? '' : value[0] === '-' ? '-' : value[0] === '' ? '' : Number(value[0])
                    } else if (this.toFixed > 0) {   //允许小数位
                        selfValue = this.componentValue.replace(/[^\d\.\-]/g, '')   //过滤非数字和.-
                        selfValue = selfValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")   //去除多余的.
                        const result = selfValue.match(/^-?[1-9]*\d*\.*\d*|0/g, '')
                        selfValue = result === null ? '' : result[0] === '-' ? '-' : result[0] === '' ? '' : result[0]
                        let regStr = '^(\\-)*(\\d+)\\.('
                        for (let i = 0; i < this.toFixed; i++) {
                            regStr += '\\d'
                        }
                        regStr += ').*$'
                        const decimalReg = new RegExp(regStr)
                        selfValue = selfValue.replace(decimalReg, '$1$2.$3')
                    } else {   //不限制小数位
                        selfValue = this.componentValue.replace(/[^\d\.\-]/g, '')   //过滤非数字和.-
                        selfValue = selfValue.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")   //去除多余的.
                        const result = selfValue.match(/^-?[1-9]*\d*\.*\d*|0/g, '')
                        selfValue = result === null ? '' : result[0] === '-' ? '-' : result[0] === '' ? '' : result[0]
                    }
                    this.componentValue = selfValue
                    this.$emit('change', selfValue)
                    break
                //文本
                case 'text':
                    this.$emit('change', this.componentValue)
                    break
            }
        },

        /**
         选项滚动时触发
         @param {Event} e 滚动事件参数
         @return
         */
        scroll(e) {
            this.scrollTop = e.target.scrollTop
        },

        /**
         textarea输入事件
         @param
         @return
         */
        textareaInput() {
            if (this.autosize) {
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
            if (val instanceof Object) {
                this.minHeight = (val.minRows && val.minRows >= 1) ? (val.minRows - 1) * 21 + 33 : 33
                this.maxHeight = val.maxRows ? val.maxRows * 21 + 12 : ''
            }
        },
        computedActive(key) {
            if (Array.isArray(this.active)) {
                if (this.active.indexOf(key.toString()) > -1 || this.active.indexOf(Number(key)) > -1) {
                    return true
                } else {
                    return false
                }
            } else {
                if (this.active !== '' && this.active == key) {
                    return true
                } else {
                    return false
                }
            }
        },
    },
    watch: {
        autosize: {
            handler: 'watchAutosize',
            deep: true,   // 深度监听
            immediate: true   //立即执行 即创建组建后能够立即执行
        },
        value: {
            handler(newValue) {
                this.componentValue = newValue
            },
            immediate: true
        },
        watchSuggestList: {
            handler(newValue) {
                if (this.isSelect || !newValue.componentValue) {
                    this.componentSuggestList = newValue.suggestList
                } else {
                    let suggestList = []
                    for (let i = 0; i < newValue.suggestList.length; i++) {
                        const suggestItem = newValue.suggestList[i]
                        if (suggestItem[this.customLabel].indexOf(newValue.componentValue) > -1) {
                            suggestList.push(suggestItem)
                        }
                    }
                    this.componentSuggestList = suggestList
                }
            },
            immediate: true,
            deep: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.csInput {
    display: inline-block;
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
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
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
    .csInput_inner::-webkit-input-placeholder {
        font-size: 14px;
        color: #c0c4cc;
    }
    .csInput_inner-focus {
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
        z-index: 2;
        position: absolute;
        height: 16px;
        width: 16px;
        right: 8px;
        top: 0;
        bottom: 0;
        margin: auto;
        font-size: 15px;
        color: #fff;
    }
    .csInput-icon-clear {
        //display: block;
        color: #c0c4cc;
    }
    .csInput-icon-clear-transparent {
        display: none;
        color: #fff;
    }
    .csInput-icon-clear:hover {
        color: #c0c4cc;
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
        max-height: 18px;
        max-width: 18px;
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
        max-height: 18px;
        max-width: 18px;
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
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        outline-width: 0;
    }
    .csTextarea_inner:focus {
        outline: none;
        border-color: var(--color);
    }
    .csTextarea_inner::-webkit-input-placeholder {
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
    .flex-enter-active,
    .flex-leave-active {
        transition: transform 0.2s;
        transform-origin: top center;
    }
    .flex-enter,
    .flex-leave-to {
        transform: scaleY(0);
    }
    .csInput-scrollbar {
        position: absolute;
        top: 46px;
        left: 0;
        right: 0;
        border: 1px solid #ebeef5;
        padding: 8px 0;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        border: 1px solid #e4e7ed;
        box-sizing: border-box;
        background-color: #fff;
        .csInput-scrollbar_arrow {
            left: 35px;
            top: -12px;
            //left: 50%;
            border-color: transparent;
            margin-right: 3px;
            border-top-width: 0;
            border-bottom-color: #fff;
            border-width: 6px;
            filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border-style: solid;
        }
        .csInput-scrollbar-content {
            // position: absolute;
            // top: 8px;
            // bottom: 8px;
            // left: 0px;
            // right: 0px;
            //padding: 8px 0;
            max-height: 265px;
            overflow-y: auto;
            .csInput-scrollbar-item {
                .csInput-scrollbar-item-content {
                    position: relative;
                    padding: 0 20px;
                    cursor: pointer;
                    span {
                        line-height: 34px;
                        color: #606266;
                    }
                    i {
                        position: absolute;
                        top: 0;
                        right: 20px;
                        line-height: 34px;
                        font-size: 18px;
                        color: $cs_border_focus_color;
                    }
                    .csInput-scrollbar-item-active {
                        color: $cs_border_focus_color;
                    }
                }
                .csInput-scrollbar-item-content:hover {
                    background: #f5f7fa;
                }
            }
        }
    }
    .csInput-scrollbar.csInput_inner-large {
        top: 42px;
    }
    .csInput-scrollbar.csInput_inner-small {
        top: 38px;
    }
    .csInput-scrollbar.csInput_inner-mini {
        top: 24px;
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
.csInput_inner-box:hover .csInput-icon-clear {
    display: inline-block;
     color: #c0c4cc;
}
</style>