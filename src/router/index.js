import Vue from 'vue'
import Router from 'vue-router'
import container from '@/page/container'
import layout from '@/page/layout'
import button from '@/page/button'
import link from '@/page/link'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/container',
            name: 'container',
            component: container
        },
        {
            path: '/layout',
            name: 'layout',
            component: layout
        },
        {
            path: '/button',
            name: 'button',
            component: button
        },
        {
            path: '/link',
            name: 'link',
            component: link
        }
  ]
})
