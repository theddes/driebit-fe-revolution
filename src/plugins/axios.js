import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from '../store'
import config from './config'

axios.defaults.baseURL = config.api.base

// before api call
axios.interceptors.request.use(config => {
    // update 'searching' state and clear current results
    store.commit('toggle_searching', true)
    store.commit('update_search_results', [])

    return config
})

// upon response
axios.interceptors.response.use(response => {
    const conf = config.searchSettings

    // clear 'searching' state, force load time if configured to do so
    setTimeout(() => {
        store.commit('toggle_searching', false)
    }, conf.forcedLoadTime * response.data.length)

    return response
})

Vue.use(VueAxios, axios)
