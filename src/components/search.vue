<template>
    <section role="search">
        <form @submit.prevent="search">
            <input id="search" type="text" placeholder="Search entoen.nu" autocomplete="off" v-model="term">
            <transition name="fadein">
                <aside class="search-options" v-if="results">
                    <span class="search-count" :title="'limited to ' + $config.searchSettings.limit">{{ results.length }} results</span>
                </aside>
            </transition>
        </form>
    </section>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'
    export default {
        name: 'Search',
        data: () => ({
            term: ''
        }),
        computed: {
            ...mapState(['results'])
        },
        mounted () {
            this.term = this.$route.params.term || ''
            this.term.length && this.search()
        },
        methods: {
            ...mapActions(['updateSearchResults']),
            ...mapMutations(['toggle_modal']),
            async search () {
                // update url params
                this.$router.push({path: '', params: {term: this.term}})

                // clear search results on empty search
                if (!this.term.length) return this.updateSearchResults([])

                // get results and pass to store when done
                const query = await this.until(
                    this.axios.get(`/search?text=${this.term}${this.$config.api.parameters}`)
                )
                this.updateSearchResults(query.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    form {
        position: fixed;
        width: 100%;
        z-index: 100;
        max-width: 70em;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 1em;
        width: 100%;
        input {
            background-color: #e8e8e8;
            border: 1px solid #e0e0e0;
            cursor: pointer;
            font-size: 1.5em;
            font-weight: 300;
            opacity: 0.8;
            padding: 0.2em 0;
            text-align: center;
            transition: all 0.6s ease-in-out;
            width: 100%;
            &::placeholder {
                opacity: 0.5;
                transition: opacity 0.6s  ease-in-out;
            }
            &:focus {
                box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.14);
                opacity: 0.95;
                &::placeholder {
                    opacity: 0.8;
                }
            }
        }
        .search-options {
            float: right;
            padding: 0.2em 0.5em;
            transform: translateY(-2.35em);
        }
    }
</style>

