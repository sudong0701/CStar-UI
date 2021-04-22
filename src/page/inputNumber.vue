<template>
    <div class="inputNumber">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-inputNumber v-model="basisValue" step="1"></cs-inputNumber>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">精度</div>
            <div class="button-demo-content">
                <cs-inputNumber v-model="precisionValue" step="0.2" precision='1'></cs-inputNumber>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">尺寸</div>
            <div class="button-demo-content">
                <cs-inputNumber size="large" v-model="mediumValue" step="0.2" precision='1'></cs-inputNumber>

                <cs-inputNumber size="small" v-model="mediumValue" step="0.2" precision='1'></cs-inputNumber>

                <cs-inputNumber size="mini" v-model="mediumValue" step="0.2" precision='1'></cs-inputNumber>
            </div>
        </div>

        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">按钮位置</div>
            <div class="button-demo-content">
                <cs-inputNumber size="" v-model="rightValue" step="1" max="5" min="0" controlsPosition="right" ></cs-inputNumber>
                <cs-inputNumber size="large" v-model="rightValue" step="1" max="5" min="0" controlsPosition="right" ></cs-inputNumber>
                <cs-inputNumber size="small" v-model="rightValue" step="1" max="5" min="0" controlsPosition="right" ></cs-inputNumber>
                <cs-inputNumber size="mini" v-model="rightValue" step="1" max="5" min="0" controlsPosition="right" ></cs-inputNumber>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basisValue: '1',
            precisionValue: '1',
            mediumValue: '1',
            rightValue: '1'
        }
    }
}
</script>

<style lang="scss" scoped>
.inputNumber {
    
}
</style>