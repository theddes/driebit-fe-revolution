<template>
    <div id="app">
        <AppHeader></AppHeader>
        <router-view></router-view>
        <AppFooter></AppFooter>
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader'
    import AppFooter from '@/components/AppFooter'

    export default {
        name: 'Driebit',
        components: { AppHeader, AppFooter }
    }
</script>

<style lang="scss">
    @import 'assets/styles/main.css';
</style>
