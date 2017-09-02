import Vue from 'vue'
import config from './config'
import until from './until'

require('./axios')

Vue.mixin({
    created: function () {
        this.until = until
        this.$config = config
    }
})
