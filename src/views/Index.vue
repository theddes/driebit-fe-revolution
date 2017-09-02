<template>
    <main role="main" class="index">
        <search></search>
        <results></results>
    </main>
</template>

<script>
    import search from '@/components/search'
    import results from '@/components/results'
    export default {
        name: 'Index',
        components: { search, results }
    }
</script>

<style>
    main {
        display: inline-block;
        width: 100%;
    }
</style>
