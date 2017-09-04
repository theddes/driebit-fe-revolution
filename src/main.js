import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './plugins'

Vue.config.productionTip = false

// forcing https on surge ¯\_(ツ)_/¯
if (location.protocol !== 'https:' && location.host.indexOf('surge') !== -1) {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length)
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
