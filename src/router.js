import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PawOnBoarding from './views/PawOnBoarding.vue'
import PawResultCard from './views/PawResultCard.vue'
import PawAssociationContact from './views/PawAssociationContact.vue'
import PawConfirmation from './views/PawConfirmation.vue'
import PawRegister from './views/PawRegister.vue'
import PawFeed from './views/PawFeed.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pawonboarding',
      name: 'pawonboarding',
      component: PawOnBoarding
    },
    {
      path: '/pawresultcard',
      name: 'pawresultcard',
      component: PawResultCard
    },
    {
      path: '/pawassociationcontact',
      name: 'pawassociationcontact',
      component: PawAssociationContact
    },
    {
      path: '/pawconfirmation',
      name: 'pawconfirmation',
      component: PawConfirmation
    },
    {
      path: '/pawregister',
      name: 'pawregister',
      component: PawRegister
    },
    {
      path: '/pawfeed',
      name: 'pawfeed',
      component: PawFeed
    }
  ]
})
