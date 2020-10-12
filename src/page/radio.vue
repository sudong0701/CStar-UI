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
            <cs-radio-group v-model="labelGroup" disabled>
                <csRadio label="1">备选项1</csRadio>
                <csRadio label="2">备选项2</csRadio>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup">
                <cs-radio-button label="1">广州</cs-radio-button>
                <cs-radio-button label="2">深圳</cs-radio-button>
                <cs-radio-button label="3">北京</cs-radio-button>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup" size="medium">
                <cs-radio-button label="1">广州</cs-radio-button>
                <cs-radio-button label="2">深圳</cs-radio-button>
                <cs-radio-button label="3">北京</cs-radio-button>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup" size="small">
                <cs-radio-button label="1">广州</cs-radio-button>
                <cs-radio-button label="2">深圳</cs-radio-button>
                <cs-radio-button label="3">北京</cs-radio-button>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup" size="mini" disabled>
                <cs-radio-button label="1">广州</cs-radio-button>
                <cs-radio-button label="2">深圳</cs-radio-button>
                <cs-radio-button label="3">北京</cs-radio-button>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup" size="mini">
                <cs-radio-button label="1" disabled>广州</cs-radio-button>
                <cs-radio-button label="2" disabled>深圳</cs-radio-button>
                <cs-radio-button label="3" disabled>北京</cs-radio-button>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup">
                <csRadio label="1" border>广州</csRadio>
                <csRadio label="2" border>深圳</csRadio>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px" >
            <cs-radio-group v-model="labelGroup" size="medium">
                <csRadio label="1" border>广州</csRadio>
                <csRadio label="2" border>深圳</csRadio>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup" size="small">
                <csRadio label="1" border>广州</csRadio>
                <csRadio label="2" border>深圳</csRadio>
            </cs-radio-group>
        </div>

        <div style="margin-top: 15px">
            <cs-radio-group v-model="labelGroup" size="mini">
                <csRadio label="1" border disabled>广州</csRadio>
                <csRadio label="2" border>深圳</csRadio>
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