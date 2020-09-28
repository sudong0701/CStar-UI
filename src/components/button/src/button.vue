<template>
    <div :class="`csButton csButton-${type}${realPlain}${realDisabled} ${realRound} ${realCircle} ${realSize}`">
        <i :class="icon"></i>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'csButton',
        data() {
            return {}
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            plain: {
                type: Boolean,
                default: false
            },
            round: {
                type: Boolean,
                default: false
            },
            circle: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: ''
            },
            loading: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            realPlain() {
                if(this.plain) {
                    return '-plain'
                } else {
                    return ''
                }
            },
            realRound() {
                if(this.round) {
                    return 'csButton-round'
                } else {
                    return ''
                }
            },
            realCircle() {
                if(this.circle) {
                    return 'csButton-circle'
                } else {
                    return ''
                }
            },
            realDisabled() {
                if(this.disabled) {
                    return '-disabled'
                } else {
                    return ''
                }
            },
            realSize() {
                if(this.size) {
                    return `csButton-${this.size}`
                } else {
                    return ''
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .csButton {
        padding: 12px 20px;
        display: inline-block;
        cursor: pointer;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        color: #606266;
        user-select: none;
        text-align: center;
        >i {
            font-size: 16px;
            line-height: 16px;
        }
        >svg {
            height: 16px;
            width: 16px;
        }
    }
    .csButton-medium {
        padding: 10px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    .csButton-small {
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
    .csButton-mini {
        padding: 7px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
    .csButton:hover {
        color: #409eff;
        background-color: #ecf5ff;
        border-color: #c6e2ff;
    }
    .csButton:active {
        color: #409eff;
        background-color: #ecf5ff;
        border-color: #409eff;
    }
    .csButton-default-plain:hover {
        background: #fff;
        border-color: #409eff;
        color: #409eff;
    }
    .csButton-default-plain:active {
        border-color: #3a8ee6;
        color: #3a8ee6;
    }
    .csButton-default-disabled, .csButton-default-disabled:hover, .csButton-default-disabled:active {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }
    .csButton-default-plain-disabled, .csButton-default-plain-disabled:hover, .csButton-default-plain-disabled:active {
        background-color: #fff;
        border-color: #ebeef5;
        color: #c0c4cc;
        cursor: not-allowed;
    }
    .csButton-primary {
        background-color: #409eff;
        color: #fff;
        border-color: #409eff;
    }
    .csButton-primary:hover {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
    }
    .csButton-primary:active {
        background: #3a8ee6;
        border-color: #3a8ee6;
        color: #fff;
    }
    .csButton-primary-plain {
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
    }
    .csButton-primary-plain:hover {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
    }
    .csButton-primary-plain:active {
        background: #3a8ee6;
        border-color: #3a8ee6;
        color: #fff;
        outline: none;
    }
    .csButton-primary-disabled, .csButton-primary-disabled:hover, .csButton-primary-disabled:active {
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
        cursor: not-allowed;
        background-image: none;
    }
    .csButton-primary-plain-disabled, .csButton-primary-plain-disabled:hover, .csButton-primary-plain-disabled:active {
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
        cursor: not-allowed;
    }
    .csButton-success {
        background-color: #67c23a;
        color: #fff;
        border-color: #67c23a;
    }
    .csButton-success:hover {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
    }
    .csButton-success:active {
        background: #5daf34;
        border-color: #5daf34;
        color: #fff;
    }
    .csButton-success-plain {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
    }
    .csButton-success-plain:hover {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
    }
    .csButton-success-plain:active {
        background: #5daf34;
        border-color: #5daf34;
        color: #fff;
        outline: none;
    }

    .csButton-success-disabled, .csButton-success-disabled:hover, .csButton-success-disabled:active {
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
        cursor: not-allowed;
        background-image: none;
    }
    .csButton-success-plain-disabled, .csButton-success-plain-disabled:hover, .csButton-success-plain-disabled:active {
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8;
        cursor: not-allowed;
    }

    .csButton-info {
        background-color: #909399;
        color: #fff;
        border-color: #909399;
    }
    .csButton-info:hover {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
    }
    .csButton-info:active {
        background: #82848a;
        border-color: #82848a;
        color: #fff;
    }

    .csButton-info-plain {
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
    }
    .csButton-info-plain:hover {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
    .csButton-info-plain:active {
        background: #82848a;
        border-color: #82848a;
        color: #fff;
        outline: none;
    }

    .csButton-info-disabled, .csButton-info-disabled:hover, .csButton-info-disabled:active {
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
        cursor: not-allowed;
        background-image: none;
    }
    .csButton-info-plain-disabled, .csButton-info-plain-disabled:hover, .csButton-info-plain-disabled:active {
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb;
        cursor: not-allowed;
    }

    .csButton-warning {
        background-color: #e6a23c;
        color: #fff;
        border-color: #e6a23c;
    }
    .csButton-warning:hover {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
    .csButton-warning:active {
        background: #cf9236;
        border-color: #cf9236;
        color: #fff;
    }

    .csButton-warning-plain {
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
    }
    .csButton-warning-plain:hover {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
    .csButton-warning-plain:active {
        background: #cf9236;
        border-color: #cf9236;
        color: #fff;
        outline: none;
    }

    .csButton-warning-disabled, .csButton-warning-disabled:hover, .csButton-warning-disabled:active {
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
        cursor: not-allowed;
        background-image: none;
    }
    .csButton-warning-plain-disabled, .csButton-warning-plain-disabled:hover, .csButton-warning-plain-disabled:active {
        color: #f0c78a;
        background-color: #fdf6ec;
        border-color: #faecd8;
        cursor: not-allowed;
    }

    .csButton-danger {
         background-color: #f56c6c;
         color: #fff;
         border-color: #f56c6c;
     }
    .csButton-danger:hover {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
    }
    .csButton-danger:active {
        background: #dd6161;
        border-color: #dd6161;
        color: #fff;
    }

    .csButton-danger-plain {
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4;
    }
    .csButton-danger-plain:hover {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
    .csButton-danger-plain:active {
        background: #dd6161;
        border-color: #dd6161;
        color: #fff;
        outline: none;
    }

    .csButton-danger-disabled, .csButton-danger-disabled:hover, .csButton-danger-disabled:active {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
        cursor: not-allowed;
        background-image: none;
    }
    .csButton-danger-plain-disabled, .csButton-danger-plain-disabled:hover, .csButton-danger-plain-disabled:active {
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
        cursor: not-allowed;
    }

    .csButton-text {
        border-color: transparent;
        color: #409eff;
        background: transparent;
        padding-left: 0;
        padding-right: 0;
    }
    .csButton-text:hover {
        color: #66b1ff;
        border-color: transparent;
        background-color: transparent;
    }
    .csButton-text:active {
        color: #3a8ee6;
        background-color: transparent;
    }

    .csButton-text-disabled, .csButton-text-disabled:hover, .csButton-text-disabled:active {
        color: #c0c4cc;
        cursor: not-allowed;
        border-color: transparent;
        background-color: transparent;
    }

    .csButton-round {
        border-radius: 20px;
        padding: 12px 23px;
    }
    .csButton-circle {
        border-radius: 50%;
        padding: 12px;
    }
</style>