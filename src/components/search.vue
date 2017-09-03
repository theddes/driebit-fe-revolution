<template>
    <aside role="search">
        <form @submit.prevent="search">
            <input id="search" type="text" placeholder="Search entoen.nu" autocomplete="off" v-model="term">
        </form>
    </aside>
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
        methods: {
            ...mapActions(['updateSearchResults']),
            ...mapMutations(['toggle_modal']),
            async search () {
                // update url params
                this.$router.push({path: '', params: {term: this.term}})

                // clear search results on empty search
                if (!this.term.length) return this.updateSearchResults([])

                // get results and pass to store
                const query = await this.until(
                    this.axios.get(`/search?text=${this.term}${this.$config.api.parameters}`)
                )
                this.updateSearchResults(query.data)
            }
        },
        mounted () {
            this.term = this.$route.params.term || ''
            this.term.length && this.search()
        }
    }
</script>

<style lang="scss" scoped>
    form {
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
        input {
            background-color: #fff;
            border-bottom: 1px solid rgba(0,0,0,.0975);
            border-left: none;
            border-right: none;
            font-size: 1.5em;
            font-weight: 300;
            padding: 0.5em 0;
            text-align: center;
            transition: all 0.6s ease-in-out;
            width: 100%;
            &::placeholder {
                opacity: 0.5;
                transition: opacity 0.6s  ease-in-out;
            }
            &:focus {
                &::placeholder {
                    opacity: 0.8;
                }
            }
        }
    }
</style>

