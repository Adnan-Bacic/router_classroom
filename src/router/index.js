import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Push1 from '@/components/Push1'
import Push2 from '@/components/Push2'
import Push3 from '@/components/Push3'
import Push4 from '@/components/Push4'
import Push5 from '@/components/Push5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'Push1',
      component: Push1
    },
    {
      path: '/contact',
      name: 'Push2',
      component: Push2
    },
    {
      path: '/push3',
      name: 'Push3',
      component: Push3
    },
    {
      path: '/push4',
      name: 'Push4',
      component: Push4
    },
    {
      path: '/push5',
      name: 'Push5',
      component: Push5
    }
  ]
})
