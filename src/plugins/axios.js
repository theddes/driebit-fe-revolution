import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import store from '../store'
import config from './config'

axios.defaults.baseURL = config.api.base

axios.interceptors.request.use(config => {
    store.commit('toggle_searching', true)
    store.commit('update_search_results', [])
    return config
})

axios.interceptors.response.use(response => {
    store.commit('toggle_searching', false)
    return response
})

Vue.use(VueAxios, axios)
