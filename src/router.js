import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OnBoarding from './views/OnBoarding.vue'
import PawResultCard from './views/PawResultCard.vue'
import Contact from './views/Contact.vue'
import Complete from './views/Complete.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/onboarding',
      name: 'onBoarding',
      component: OnBoarding
    },
    {
      path: '/pawresultcard',
      name: 'pawresultcard',
      component: PawResultCard
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/complete',
      name: 'complete',
      component: Complete
    }
  ]
})
