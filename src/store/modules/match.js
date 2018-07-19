import appService from '../../service/app.service.js'

const state = {
  match: null
}

const getters = {
  getMatch: state => state.match
}

const mutationTypes = {
  SET_MATCH: 'SET_MATCH'
}

const mutations = {
  [mutationTypes.SET_MATCH] (state, match) {
    state.match = match
  }
}

const actions = {
  getMatch ({commit}, answers) {
    appService.getMatch(answers).then(match => {
      commit(mutationTypes.SET_MATCH, match[0])
    })
  },
  setMatch ({commit}, match) {
    commit(mutationTypes.SET_MATCH, match)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutationTypes,
  mutations,
  actions
}
