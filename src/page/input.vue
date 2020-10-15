<template>
    <div class="input">
        <div style="margin-top: 15px">
            <div class="input-item">
                <csInput placeholder="请输入内容" focusColor="#67c23a"></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item">
                <csInput placeholder="请输入内容" disabled></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item">
                <csInput placeholder="请输入内容" clear></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item">
                <csInput placeholder="请输入内容" showPassword></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item">
                <csInput placeholder="请输入内容" suffixIcon="cs-icon-calendar"></csInput>
            </div>
            <div class="input-item">
                <csInput placeholder="请输入内容" prefixIcon="cs-icon-search">

                </csInput>
            </div>
            <div class="input-item">
                <csInput placeholder="请输入内容">
                    <template #prefix>
                        <i class="cs-icon-search"></i>
                    </template>
                </csInput>
            </div>
            <div class="input-item">
                <csInput placeholder="请输入内容">
                    <template #suffix>
                        <i class="cs-icon-calendar"></i>
                    </template>
                </csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="textarea-item">
                <csInput placeholder="请输入内容" type="textarea"></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="textarea-item">
                <csInput placeholder="请输入内容" type="textarea" :autosize="true"></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="textarea-item">
                <csInput placeholder="请输入内容" type="textarea" :autosize="autosize"></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item-lang">
                <csInput placeholder="请输入内容">
                    <template #prepend>https://</template>
                </csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item-lang">
                <csInput placeholder="请输入内容">
                    <template #append>.com</template>
                </csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item-lang">
                <csInput placeholder="请输入内容">
                    <template #prepend>https://</template>
                    <template #append>
                        <i class="cs-icon-search"></i>
                    </template>
                </csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item">
                <csInput placeholder="请输入内容" size="large"></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item">
                <csInput placeholder="请输入内容" size="small"></csInput>
            </div>
        </div>

        <div style="margin-top: 15px">
            <div class="input-item">
                <csInput placeholder="请输入内容" size="mini"></csInput>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                autosize: {
                    minRows: 2, maxRows: 4
                }
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .input {
        padding: 30px;
        .input-item {
            margin-top: 15px;
            width: 180px;
        }
        .input-item:first-child {
            margin-top: 0;
        }
        .textarea-item {
            width: 414px;
        }
        .input-item-lang {
            width: 480px;
        }
    }
</style>