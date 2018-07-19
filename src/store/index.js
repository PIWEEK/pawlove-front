import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import common from '@/store/modules/common'
import pets from '@/store/modules/pets'
import questions from '@/store/modules/questions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    questions,
    pets
  },
  strict: process.env.DEBUG,
  plugins: process.env.DEBUG ? [createLogger()] : []
})
