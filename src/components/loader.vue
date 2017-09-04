<template>
    <aside class="loader">
        <img src="../assets/images/logo-driebit.svg">
    </aside>
</template>

<script>
    export default {
        name: 'Loader'
    }
</script>

<style lang="scss" scoped>
    .loader {
        align-items: center;
        background: rgba(0,0,0,0.4);
        display: flex;
        height: 100vh;
        justify-content: center;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        img {
            animation: driebit 1s linear 0.5s infinite;
            width: 7em;
        }
    }
</style>
