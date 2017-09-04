<template>
    <div id="app">
        <transition name="fadein">
            <loader v-if="searching"></loader>
        </transition>
        <transition name="fadein">
            <modal v-if="modalVisible"></modal>
        </transition>
        <router-view></router-view>
        <aside class="no-results" v-if="results && !results.length && $route.params.term && !searching">
            Couldn't find anything.. :(
        </aside>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import loader from '@/components/loader'
    import modal from '@/components/modal'
    export default {
        name: 'Driebit',
        components: { loader, modal },
        computed: {
            ...mapState(['searching', 'results', 'modalVisible'])
        },
        methods: {
            ...mapMutations(['toggle_modal'])
        },
        // hacky!!! For demo only.. last minute addition, need to find a better way to handle this initial load of the modal
        data: () => ({
            loaded: false
        }),
        watch: {
            searching: function (searching) {
                if (!searching && !this.loaded && this.$route.params.id) {
                    this.loaded = true
                    this.toggle_modal(true)
                }
            }
        },
        mounted () {
            setTimeout(() => {
                this.loaded = true
            }, 4000)
        }
    }
</script>

<style lang="scss">
    @import 'assets/styles/main.css';

    #app {
        background: var(--color-bg) url(assets/images/confectionary.png) repeat;
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
