<template>
    <div class="csCol" :style="`width: ${realWidth}; float: left; margin-left: ${realOffset}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csCol',
        data() {
            return {
                spanChild: 0,
                offsetChild: 0
            }
        },
        props: {
            span: {
                type: String | Number,
                default: 24
            },
            offset: {   //偏移的栏数
                type: String | Number,
                default: 0
            },
            xs: {   //<768
                type: Object | Number,
                default: 0
            },
            sm: {   //>=768
                type: Object | Number,
                default: 0
            },
            md: {   //>=992
                type: Object | Number,
                default: 0
            },
            lg: {   //>=1200
                type: Object | Number,
                default: 0
            },
            xl: {   //>=1920
                type: Object | Number,
                default: 0
            },
        },
        mounted() {
            this.resize(window.innerWidth)
            window.addEventListener('resize', (e)=> {
                this.resize(e.target.innerWidth)
            })
//            window.onresize = (e)=> {
//                this.resize(e.target.innerWidth)
//            }
        },
        computed: {
            realWidth() {
                return this.spanChild ? `${parseInt(this.spanChild) / 24 * 100}%` : `${parseInt(this.span) / 24 * 100}%`
            },
            realOffset() {
                return this.offsetChild ? `${parseInt(this.offsetChild) / 24 * 100}%` : `${parseInt(this.offset) / 24 * 100}%`
            }
        },
        methods: {
            resize(width) {
                if(this.xs &&width < 768) {
                    if(this.xs instanceof  Object) {
                        this.spanChild = this.xs.span
                        this.offsetChild = this.xs.offset
                    } else {
                        this.spanChild = this.xs
                    }
                } else if(this.sm && width < 992) {
                    if(this.sm instanceof  Object) {
                        this.spanChild = this.sm.span
                        this.offsetChild = this.sm.offset
                    } else {
                        this.spanChild = this.sm
                    }
                } else if(this.md && width < 1200) {
                    if(this.md instanceof  Object) {
                        this.spanChild = this.md.span
                        this.offsetChild = this.md.offset
                    } else {
                        this.spanChild = this.md
                    }
                } else if(this.lg && width < 1920) {
                    if(this.lg instanceof  Object) {
                        this.spanChild = this.lg.span
                        this.offsetChild = this.lg.offset
                    } else {
                        this.spanChild = this.lg
                    }
                } else if(this.xl) {
                    if(this.xl instanceof  Object) {
                        this.spanChild = this.xl.span
                        this.offsetChild = this.xl.offset
                    } else {
                        this.spanChild = this.xl
                    }
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .csCol {
        box-sizing: border-box;
        height: 100%;
    }
</style>