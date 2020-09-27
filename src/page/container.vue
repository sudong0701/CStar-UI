<template>
    <div class="container">
        <csContainer>
            <csHeader></csHeader>
            <csContainer>
                <csAside></csAside>
                <csMain></csMain>
            </csContainer>
        </csContainer>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .container {
        height: 100%;
    }
</style>