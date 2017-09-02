import Vue from 'vue'

const mutations = {
    toggle_searching (state, value) {
        Vue.set(state, 'searching', value)
    },
    update_search_results (state, results) {
        Vue.set(state, 'results', results)
    }
}

export default mutations
