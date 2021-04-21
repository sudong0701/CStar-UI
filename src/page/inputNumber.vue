<template>
    <div class="inputNumber">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-inputNumber v-model="basisValue" step="3"></cs-inputNumber>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            basisValue: '1'
        }
    }
}
</script>

<style lang="scss" scoped>
.inputNumber {
    
}
</style>