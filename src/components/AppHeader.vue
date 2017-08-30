<template>
    <header class="header">
        header
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 30;
        background: var(--color-bg);
        width: 100%;
    }
</style>
