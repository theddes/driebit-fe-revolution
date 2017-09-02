import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/:term?',
            name: 'Index',
            component: Index
        }
    ]
})
