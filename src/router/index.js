import Vue from 'vue'
import Router from 'vue-router'
import container from '@/page/container'
import layout from '@/page/layout'
import button from '@/page/button'
import link from '@/page/link'
import radio from '@/page/radio'
import checkbox from '@/page/checkbox'
import input from '@/page/input'

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
        },
        {
            path: '/radio',
            name: 'radio',
            component: radio
        },
        {
            path: '/checkbox',
            name: 'checkbox',
            component: checkbox
        },
        {
            path: '/input',
            name: 'input',
            component: input
        }
  ]
})
