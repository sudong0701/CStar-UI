import Vue from 'vue'
import Router from 'vue-router'
import container from '@/page/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/container',
      name: 'container',
      component: container
    }
  ]
})
