<template>
    <div class="button">
        <div>
            <csButton>默认按钮</csButton>
            <csButton type="primary">主要按钮</csButton>
            <csButton type="success">成功按钮</csButton>
            <csButton type="info">信息按钮</csButton>
            <csButton type="warning">警告按钮</csButton>
            <csButton type="danger">危险按钮</csButton>
        </div>

        <div style="margin-top: 15px">
            <csButton plain>默认按钮</csButton>
            <csButton type="primary" plain>主要按钮</csButton>
            <csButton type="success" plain>成功按钮</csButton>
            <csButton type="info" plain>信息按钮</csButton>
            <csButton type="warning" plain>警告按钮</csButton>
            <csButton type="danger" plain>危险按钮</csButton>
        </div>

        <div style="margin-top: 15px">
            <csButton round>默认按钮</csButton>
            <csButton type="primary" round>主要按钮</csButton>
            <csButton type="success" round>成功按钮</csButton>
            <csButton type="info" round>信息按钮</csButton>
            <csButton type="warning" round>警告按钮</csButton>
            <csButton type="danger" round>危险按钮</csButton>
        </div>

        <div style="margin-top: 15px">
            <csButton icon="cs-icon-pic" circle></csButton>
            <csButton type="primary" icon="cs-icon-pay" circle></csButton>
            <csButton type="success" icon="cs-icon-play_forward_fill" circle></csButton>
            <csButton type="info" icon="cs-icon-paint" circle></csButton>
            <csButton type="warning" icon="cs-icon-order" circle></csButton>
            <csButton type="danger" icon="cs-icon-peoplelist" circle></csButton>
        </div>

        <div style="margin-top: 15px">
            <csButton disabled>默认按钮</csButton>
            <csButton type="primary" disabled>主要按钮</csButton>
            <csButton type="success" disabled>成功按钮</csButton>
            <csButton type="info" disabled>信息按钮</csButton>
            <csButton type="warning" disabled>警告按钮</csButton>
            <csButton type="danger" disabled>危险按钮</csButton>
        </div>

        <div style="margin-top: 15px">
            <csButton plain disabled>默认按钮</csButton>
            <csButton type="primary" plain disabled>主要按钮</csButton>
            <csButton type="success" plain disabled>成功按钮</csButton>
            <csButton type="info" plain disabled>信息按钮</csButton>
            <csButton type="warning" plain disabled>警告按钮</csButton>
            <csButton type="danger" plain disabled>危险按钮</csButton>
        </div>

        <div style="margin-top: 15px">
            <csButton type="text">默认按钮</csButton>
            <csButton type="text" disabled>主要按钮</csButton>
        </div>

        <div style="margin-top: 15px">
            <csButton icon="cs-icon-pic"></csButton>
            <csButton type="primary" icon="cs-icon-pay">钱包</csButton>
            <csButton type="success" icon="cs-icon-play_forward_fill" ></csButton>
            <csButton type="info" icon="cs-icon-paint" ></csButton>
            <csButton type="warning" icon="cs-icon-order" ></csButton>
            <csButton type="danger" icon="cs-icon-peoplelist" >我的</csButton>
        </div>

        <div style="margin-top: 15px;display: flex; flex-direction: row; align-items: flex-start">
            <csButton style="margin-left: 15px">默认按钮</csButton>
            <csButton style="margin-left: 15px" size="medium">默认按钮</csButton>
            <csButton style="margin-left: 15px" size="small">默认按钮</csButton>
            <csButton style="margin-left: 15px" size="mini">默认按钮</csButton>
        </div>

        <div style="margin-top: 15px">
            <csButton type="primary" loading @click="clickBtn">加载中</csButton>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {
            clickBtn() {
                console.log(111)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .button {
        padding: 30px;
    }
</style>