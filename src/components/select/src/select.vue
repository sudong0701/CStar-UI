<template>
    <div class="csSelect">
        <div class="csSelect-content">
            <csInput ref="csInput" readonly autocomplete clear isSelect v-model="text" :customLabel="customLabel" :suggestList="options" :active="active" @focus="focus" @blur="blur" @select="select" @clear="clearActive"></csInput>
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
            isFocus: false
        }
    },
    props: {
        value: {    //绑定的值
            type: String | Array,
            default: ''
        },
        options: {   //可选值的数组
            type: Array,
            default: ()=> {
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
            let {value, options} = this
            return {
                value,
                options
            }
        }
    },
    methods: {
        /**
         点击选项时触发
         @param {Object} data 选择的数据
         @return
         */
        select(data) {
            //开启多选
            if(this.multiple) {

            } else {   //单选
                this.active = data.index
                this.text = data.item[this.customLabel]
                console.log(data.item[this.customValue])
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
                console.log(newValue)
                if(Array.isArray(this.value)) {
                    let actives = []
                    for(let i = 0; i < newValue.options.length; i++) {
                        const option = newValue.options[i]
                        if(newValue.value == option[this.customValue]) {
                            actives.push(i)
                        }
                    }
                    this.active = actives
                } else {
                    for(let i = 0; i < newValue.options.length; i++) {
                        const option = newValue.options[i]
                        if(newValue.value == option[this.customValue]) {
                            this.active = i
                            break
                        }
                    }
                }
            },
            immediate: true
        }
    }
}
</script>

<style lang="scss" scoped>
.csSelect {
    .csSelect-content {
        position: relative;
        display: inline-block;
        i {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 8px;
            font-size: 16px;
            color: $cs_border_hover_color;
            transition: transform .2s;
        }
        .csSelect-content-pull {
            transform: translateY(-50%) rotate(180deg);
        }
    }
    .csSelect-content:focus-visible {
        border: 1px solid $cs_border_focus_color;
    }
}
</style>