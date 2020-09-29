<template>
    <a ref="csLink" :class="`csLink csLink-${type}${realDisabled} csLink-${type}${realUnderline}${realDisabled}`" @click="clickLink">
        <i :class="icon"></i>
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'csLink',
        data() {
            return {}
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            underline: {
                type: Boolean,
                default: true
            },
            icon: {
                type: String,
                default: ''
            },
            href: {
                type: String,
                default: ''
            }
        },
        mounted() {
            this.watchHref(this.href)
        },
        computed: {
            realDisabled() {
                if(this.disabled) {
                    return '-disabled'
                } else {
                    return ''
                }
            },
            realUnderline() {
                if(this.underline) {
                    return '-underline'
                } else {
                    return ''
                }
            }
        },
        methods: {
            /**
             监听href改变事件
             @param {String} val href当前的值
             @return
             */
            watchHref(val) {
                if(val) {
                    this.$refs.csLink.setAttribute('href', val)
                } else {
                    if(this.$refs.csLink.getAttribute('href')) {
                        this.$refs.csLink.removeAttribute('href')
                    }
                }
            },
            /**
             点击按link时触发
             @param {Event} e 点击事件参数
             @return
             */
            clickLink(e) {
                this.$emit('click', e)
            }
        },
        watch: {
            href: {
                handler: 'watchHref',
                immediate: false   //立即执行 即创建组建后能够立即执行
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csLink {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        position: relative;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
        font-weight: 500;
        color: #606266;
        text-decoration: none;
        >i {
            font-size: 16px;
        }
    }
    .csLink-default:hover {
        color: #409eff;
    }
    .csLink-default-underline:hover:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-bottom: 1px solid #409eff;
    }
    .csLink-default-disabled {
        color: #c0c4cc;
        cursor: not-allowed;
    }

    .csLink-primary {
        color: #409eff;
    }
    .csLink-primary:hover {
        color: #66b1ff;
    }
    .csLink-primary-underline:hover:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-bottom: 1px solid #66b1ff;
    }
    .csLink-primary-disabled {
        color: #a0cfff;
        cursor: not-allowed;
    }

    .csLink-success {
        color: #67c23a;
    }
    .csLink-success:hover {
        color: #85ce61;
    }
    .csLink-success-underline:hover:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-bottom: 1px solid #85ce61;
    }
    .csLink-success-disabled {
        color: #b3e19d;
        cursor: not-allowed;
    }

    .csLink-warning {
        color: #e6a23c;
    }
    .csLink-warning:hover {
        color: #ebb563;
    }
    .csLink-warning-underline:hover:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-bottom: 1px solid #ebb563;
    }
    .csLink-warning-disabled {
        color: #f3d19e;
        cursor: not-allowed;
    }

    .csLink-danger {
        color: #f56c6c;
    }
    .csLink-danger:hover {
        color: #f78989;
    }
    .csLink-danger-underline:hover:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-bottom: 1px solid #f78989;
    }
    .csLink-danger-disabled {
        color: #fab6b6;
        cursor: not-allowed;
    }

    .csLink-info {
        color: #909399;
    }
    .csLink-info:hover {
        color: #a6a9ad;
    }
    .csLink-info-underline:hover:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
        bottom: 0;
        border-bottom: 1px solid #a6a9ad;
    }
    .csLink-info-disabled {
        color: #c8c9cc;
        cursor: not-allowed;
    }

</style>