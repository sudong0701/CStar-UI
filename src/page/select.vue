<template>
    <div class="select">
        <div class="cs-doc-demo-block">
            <div class="cs-doc-demo-block__title">基础用法</div>
            <div class="button-demo-content">
                <cs-select v-model="value" multiple :options="options" customLabel="name" customValue="id" clear @change="change"></cs-select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            options: []
        }
    },
    mounted() {
        this.options = [
            {id: '1', name: '苹果'},
            {id: '2', name: '香梨'},
            {id: '3', name: '芒果'},
            {id: '4', name: '香蕉'},
            {id: '5', name: '李子'},
            {id: '6', name: '桃子'},
            {id: '7', name: '杏子'},
            {id: '8', name: '西瓜'},
            {id: '9', name: '圣女果'},
            {id: '10', name: '火龙果'},
            {id: '11', name: '枣'},
            {id: '12', name: '樱桃'},
            {id: '13', name: '猕猴桃'},
            {id: '14', name: '葡萄'},
            {id: '15', name: '木瓜'},
            {id: '16', name: '石榴'},
            {id: '17', name: '橘子'},
            {id: '18', name: '橙子'},
            {id: '19', name: '桂圆'},
            {id: '20', name: '菠萝蜜'},
            {id: '21', name: '枇杷'},
            {id: '22', name: '杨桃'},
            {id: '23', name: '人参果'},
        ]
        setTimeout(()=> {
            this.value = '8'
        }, 1000)
    },
    methods: {
        change(e) {
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>