import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import common from '@/store/modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common
  },
  strict: process.env.DEBUG,
  plugins: process.env.DEBUG ? [createLogger()] : []
})
