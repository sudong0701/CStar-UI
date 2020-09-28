<template>
    <div :class="`csRow ${realType} ${realJustify}`" ref="csRow">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csRow',
        data() {
            return {}
        },
        props: {
            gutter: {   //栅格间隔
                type: Number,
                default: 20
            },
            type: {
                type: String,
                default: ''
            },
            justify: {
                type: String,
                default: 'start'
            }
        },
        mounted() {
            //如果存在栅格间隔
            if(this.gutter) {
                const cols = this.$slots.default
                cols.map((ele)=> {
                    if(ele.context) {
                        ele.elm.style.paddingLeft = `${this.gutter / 2}px`
                        ele.elm.style.paddingRight = `${this.gutter / 2}px`
                    }
                })
            }
        },
        computed: {
            realType() {
                if(this.type === 'flex') {
                    return 'csRow-flex'
                } else {
                    return ''
                }
            },
            realJustify() {
                if(this.justify === 'space-between') {
                    return 'csRow-between'
                } else if(this.justify === 'space-around') {
                    return 'csRow-around'
                } else if(this.justify === 'start') {
                    return 'csRow-start'
                } else if(this.justify === 'center') {
                    return 'csRow-center'
                } else if(this.justify === 'end') {
                    return 'csRow-end'
                } else {
                    return ''
                }
            }
        },
        watch: {
            gutter(val) {
                const cols = this.$slots.default
                cols.map((ele)=> {
                    if(ele.context) {
                        ele.elm.style.paddingLeft = `${val / 2}px`
                        ele.elm.style.paddingRight = `${val / 2}px`
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .csRow {
        position: relative;
        box-sizing: border-box;
    }
    .csRow-flex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .csRow-between {
        justify-content: space-between;
    }
    .csRow-around {
        justify-content: space-around;
    }
    .csRow-start {
        justify-content: flex-start;
    }
    .csRow-center {
        justify-content: center;
    }
    .csRow-end {
        justify-content: flex-end;
    }
    .csRow:after {
        clear: both;
    }
</style>