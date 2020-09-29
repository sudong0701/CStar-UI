<template>
    <div class="link">
        <div>
            <csLink>默认链接</csLink>
            <csLink type="primary">默认链接</csLink>
            <csLink type="success">默认链接</csLink>
            <csLink type="warning">默认链接</csLink>
            <csLink type="danger">默认链接</csLink>
            <csLink type="info">默认链接</csLink>
        </div>

        <div style="margin-top: 15px">
            <csLink disabled>默认链接</csLink>
            <csLink type="primary" disabled>默认链接</csLink>
            <csLink type="success" disabled>默认链接</csLink>
            <csLink type="warning" disabled>默认链接</csLink>
            <csLink type="danger" disabled>默认链接</csLink>
            <csLink type="info" disabled>默认链接</csLink>
        </div>

        <div style="margin-top: 15px">
            <csLink :underline="false">默认链接</csLink>
            <csLink>默认链接</csLink>
        </div>

        <div style="margin-top: 15px">
            <csLink icon="cs-icon-write">默认链接</csLink>
            <csLink>默认链接
                <i class="cs-icon-_voice"></i>
            </csLink>
        </div>

        <div style="margin-top: 15px">
            <csLink :href="href">默认链接</csLink>
        </div>
        <button @click="href = ''">改变</button>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                href: '111'
            }
        },
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link {
    padding: 30px;
}
</style>