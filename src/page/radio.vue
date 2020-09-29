<template>
    <div class="radio">
        <div>
            <csRadio v-model="label" label="1">备选项1</csRadio>
            <csRadio v-model="label" label="2">备选项2</csRadio>
        </div>

        <div style="margin-top: 15px">
            <csRadio v-model="label" label="1" disabled>备选项1</csRadio>
            <csRadio v-model="label" label="2" disabled>备选项2</csRadio>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup">
                <csRadio label="1">备选项1</csRadio>
                <csRadio label="2">备选项2</csRadio>
            </cs-radio-group>
        </div>

    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                label: '1',
                labelGroup: '1'
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .radio {
        padding: 30px;
    }
</style>