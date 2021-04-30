<template>
    <div class="csSelect">
        <div class="csSelect-content">
            <csInput ref="csInput" readonly autocomplete clear isSelect v-model="text" :customLabel="customLabel" :suggestList="options" :active="active" :multiple="multiple" :activeNames="textList" @focus="focus" @blur="blur" @select="select" @clear="clearActive"></csInput>
            <!-- <i v-show="isEntrance && value && clear" class="cs-icon-roundclosefill csSelect-content-clear"></i> -->
            <i v-show="value || clear" :class="`cs-icon-unfold ${isFocus ? 'csSelect-content-pull' : ''}`"></i>
        </div>
    </div>
</template>

<script>
import csInput from '../../input/src/input'
export default {
    name: 'csSelect',
    data() {
        return {
            active: '',
            text: '',
            isFocus: false,
            textList: []
        }
    },
    props: {
        value: {    //绑定的值
            type: String | Array,
            default: ''
        },
        options: {   //可选值的数组
            type: Array,
            default: () => {
                return []
            }
        },
        customLabel: {   //自定义label的属性名
            type: String,
            default: 'label'
        },
        customValue: {   //自定义value的属性名
            type: String,
            default: 'value'
        },
        multiple: {    //是否开启多选功能
            type: Boolean,
            default: false
        },
        clear: {
            type: Boolean,
            default: false
        }
    },
    model: {
        props: 'value',
        event: 'change'
    },
    components: {
        csInput
    },
    computed: {
        watchValueOrOptions() {
            let { value, options } = this
            return {
                value,
                options
            }
        }
    },
    mounted() {

    },
    methods: {
        /**
         点击选项时触发
         @param {Object} data 选择的数据
         @return
         */
        select(data) {
            //开启多选
            if (this.multiple) {
                let value = [...this.value]
                let currIndex = -1
                if(value.indexOf(data.item[this.customValue].toString()) > -1) {
                    currIndex = value.indexOf(data.item[this.customValue].toString())
                }
                if(value.indexOf(Number(data.item[this.customValue])) > -1) {
                    currIndex = value.indexOf(Number(data.item[this.customValue]))
                }
                if(currIndex > -1) {
                    value.splice(currIndex, 1)
                } else {
                    value.push(data.item[this.customValue])
                }
               this.$emit('change', value)
            } else {   //单选
                this.active = data.index
                this.text = data.item[this.customLabel]
                this.$emit('change', data.item[this.customValue])
            }

        },
        /**
         input框获取焦点时触发
         @param
         @return
         */
        focus() {
            this.isFocus = true
        },
        /**
         input框失去焦点时触发
         @param
         @return
         */
        blur() {
            this.isFocus = false
        },
        /**
         点击清除按钮时触发
         @param
         @return
         */
        clearActive() {
            this.active = this.multiple ? [] : ''
        }
    },
    watch: {
        watchValueOrOptions: {
            handler(newValue) {
                if (this.multiple) {   //如果开启起了多选功能
                    if (!Array.isArray(this.value)) {    //如果value不是数组 需要转换成数组
                        if (this.value) {
                            this.$emit('change', [this.value])
                        } else {
                            this.$emit('change', [])
                        }
                    }
                    let actives = [], textList = []
                    for (let i = 0; i < newValue.options.length; i++) {
                        const option = newValue.options[i]
                        if (newValue.value.indexOf(option[this.customValue].toString()) > -1 || newValue.value.indexOf(Number(option[this.customValue])) > -1) {
                            actives.push(i)
                            textList.push(option[this.customLabel])
                        }
                    }
                    this.active = actives
                    //console.log(textList)
                    this.textList = textList
                } else {   //未开启多选功能
                    for (let i = 0; i < newValue.options.length; i++) {
                        const option = newValue.options[i]
                        if (newValue.value == option[this.customValue]) {
                            this.active = i
                            this.text = option[this.customLabel]
                            break
                        }
                    }
                }
            },
            immediate: true,
            deep: true
        }
    }
}
</script>

<style lang="scss" scoped>
.csSelect {
    .csSelect-content {
        display: flex;
        position: relative;
        display: inline-block;
        height: 40px;
        i {
            position: absolute;
            top: 12px;
            right: 8px;
            font-size: 16px;
            color: $cs_border_hover_color;
            transition: transform 0.2s;
        }
        .csSelect-content-pull {
            transform: rotate(180deg);
        }
    }
    .csSelect-content:focus-visible {
        border: 1px solid $cs_border_focus_color;
    }
}
</style>