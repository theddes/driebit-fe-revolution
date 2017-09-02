<template>
    <div id="app">
        <router-view></router-view>
        <aside class="no-results" v-if="results && !results.length && $route.params.term && !searching">
            Couldn't find anything.. :(
        </aside>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'Driebit',
        computed: {
            ...mapState(['searching', 'results'])
        }
    }
</script>

<style lang="scss">
    @import 'assets/styles/main.css';

    #app {
        background: var(--color-bg) url(assets/images/light_wool.png) repeat;
        min-height: 100vh;
        position: relative;
    }
    .no-results {
        animation: fadein 0.4s linear 0.5s forwards;
        font-size: 1.5em;
        opacity: 0;
        position: absolute;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
    }
</style>
