<template>
    <transition-group role="list" name="list" tag="ul" v-if="results" mode="out-in">
        <result
            v-for="(result, index) in results"
            :key="result.id"
            :data="result"
            role="listitem">
        </result>
    </transition-group>
</template>

<script>
    import { mapState } from 'vuex'
    import result from '@/components/result'
    export default {
        name: 'Results',
        components: { result },
        computed: {
            ...mapState(['results'])
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        column-gap: 1.5em; 
        column-width: 15em;
        margin: 7.5em auto;
        max-width: 70em;
        padding: 0 2em;
        position: relative;
        width: 100%;
        z-index: 10;
        &:hover {
            li:not(:hover) {
                // filter: grayscale(100%);
                opacity: 0.75;
            }
        }
    }
</style>
