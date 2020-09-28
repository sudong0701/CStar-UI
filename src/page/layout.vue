<template>
    <div class="layout">
        <csRow style="height: 30px">
            <csCol :span="6"></csCol>
            <csCol :span="6"></csCol>
            <csCol :span="6"></csCol>
            <csCol :span="6"></csCol>
        </csRow>

        <csRow style="height: 30px; background-color: #f4f4f4">
            <csCol :span="6" style="background-color: #eee"></csCol>
            <csCol :span="12" style="background-color: #ccc"></csCol>
            <csCol :span="6"></csCol>
        </csRow>

        <csRow style="height: 30px; background-color: #f4f4f4">
            <csCol :span="12" :offset="6">
                <div></div>
            </csCol>
            <csCol :span="6"></csCol>
        </csRow>

        <csRow style="height: 30px; background-color: #fbfbfb; margin-top: 15px" type="flex" justify="end">
            <csCol :span="6">
                <div style="background-color: #ccc; height: 100%"></div>
            </csCol>
            <csCol :span="6">
                <div style="background-color: #eee; height: 100%"></div>
            </csCol>
            <csCol :span="6">
                <div style="background-color: #ccc; height: 100%"></div>
            </csCol>
        </csRow>

        <csRow style="height: 30px; background-color: #fbfbfb; margin-top: 15px">
            <csCol xl="2" lg="3" md="4" sm="6" xs="6">
                <div style="background-color: #ccc; height: 100%"></div>
            </csCol>
            <csCol xl="10" lg="9" md="8" sm="6" xs="8">
                <div style="background-color: #ccc; height: 100%"></div>
            </csCol>
            <csCol xl="10" lg="9" md="8" sm="6" xs="8">
                <div style="background-color: #ccc; height: 100%"></div>
            </csCol>
            <csCol xl="2" lg="3" md="4" sm="6" xs="8">
                <div style="background-color: #ccc; height: 100%"></div>
            </csCol>
        </csRow>
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
<style scoped>

</style>