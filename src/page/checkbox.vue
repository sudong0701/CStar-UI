<template>
    <div class="checkbox">
        <div>
            <csCheckbox v-model="checked">苹果</csCheckbox>
        </div>
        <div style="margin-top: 15px">
            <csCheckbox v-model="checked" disabled>苹果</csCheckbox>
            <csCheckbox v-model="checkDisabled" disabled>香蕉</csCheckbox>
        </div>

        <div style="margin-top: 15px">
            <csCheckboxGroup v-model="checkList">
                <csCheckbox label="苹果">苹果</csCheckbox>
                <csCheckbox label="香蕉">香蕉</csCheckbox>
                <csCheckbox label="橘子">橘子</csCheckbox>
                <csCheckbox label="香梨">香梨</csCheckbox>
                <csCheckbox label="山竹" disabled>山竹</csCheckbox>
                <csCheckbox label="葡萄" disabled>葡萄</csCheckbox>
            </csCheckboxGroup>
        </div>

        <div style="margin-top: 15px">
            <csCheckboxGroup v-model="checkList">
                <csCheckboxButton label="苹果">苹果</csCheckboxButton>
                <csCheckboxButton label="香蕉">香蕉</csCheckboxButton>
                <csCheckboxButton label="橘子">橘子</csCheckboxButton>
            </csCheckboxGroup>
        </div>

        <div style="margin-top: 15px">
            <csCheckboxGroup v-model="checkList" size="medium">
                <csCheckboxButton label="苹果">苹果</csCheckboxButton>
                <csCheckboxButton label="香蕉">香蕉</csCheckboxButton>
                <csCheckboxButton label="橘子">橘子</csCheckboxButton>
            </csCheckboxGroup>
        </div>

        <div style="margin-top: 15px">
            <csCheckboxGroup v-model="checkList" size="small">
                <csCheckboxButton label="苹果">苹果</csCheckboxButton>
                <csCheckboxButton label="香蕉" disabled>香蕉</csCheckboxButton>
                <csCheckboxButton label="橘子">橘子</csCheckboxButton>
            </csCheckboxGroup>
        </div>

        <div style="margin-top: 15px">
            <csCheckboxGroup v-model="checkList" size="mini" disabled>
                <csCheckboxButton label="苹果">苹果</csCheckboxButton>
                <csCheckboxButton label="香蕉">香蕉</csCheckboxButton>
                <csCheckboxButton label="橘子">橘子</csCheckboxButton>
            </csCheckboxGroup>
        </div>

        <div style="margin-top: 15px">
            <csCheckboxGroup v-model="checkList" size="medium" disabled>
                <csCheckbox label="苹果" border>苹果</csCheckbox>
                <csCheckbox label="香蕉" border disabled>香蕉</csCheckbox>
                <csCheckbox label="橘子" border>橘子</csCheckbox>
            </csCheckboxGroup>
        </div>

        <div style="margin-top: 15px">
            <csCheckboxGroup v-model="checkList" size="small">
                <csCheckbox label="苹果" border>苹果</csCheckbox>
                <csCheckbox label="香蕉" border>香蕉</csCheckbox>
                <csCheckbox label="橘子" border disabled>橘子</csCheckbox>
            </csCheckboxGroup>
        </div>

        <div style="margin-top: 15px">
            <csCheckboxGroup v-model="checkList" size="mini" fill="#67c23a">
                <csCheckbox label="苹果" border>苹果</csCheckbox>
                <csCheckbox label="香蕉" border disabled>香蕉</csCheckbox>
                <csCheckbox label="橘子" border>橘子</csCheckbox>
            </csCheckboxGroup>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                checked: false,
                checkDisabled: true,
                checkList: ['香蕉', '葡萄']
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .checkbox {
        padding: 30px;
    }
</style>