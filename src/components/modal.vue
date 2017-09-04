<template>
    <aside class="modal" @click="closeModal" v-if="result">
        <section class="modal-inner">
            <span class="modal-title" v-html="result.title"></span>
            <img :src="result.preview">
        </section>
    </aside>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: 'Modal',
        computed: {
            ...mapState(['results'])
        },
        data: () => ({
            result: {}
        }),
        methods: {
            ...mapMutations(['toggle_modal']),
            closeModal (event) {
                this.toggle_modal(event.target.className !== 'modal')
            }
        },
        mounted () {
            this.result = this.results.find(entry => parseInt(entry.id) === parseInt(this.$route.params.id))
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        align-items: center;
        background: rgba(0,0,0,0.7);
        display: flex;
        height: 100vh;
        justify-content: center;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        .modal-inner {
            max-width: 60%;
            position: relative;
            width: auto;
            .modal-title {
                position: absolute;
                top: -1.5em;
                left: 0;
                color: white;
            }
            img {
                max-height: 50vh;
                max-width: 100%;
            }
        }
    }
</style>
