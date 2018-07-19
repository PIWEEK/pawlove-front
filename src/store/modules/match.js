import appService from '../../service/app.service.js'

const state = {
  match: []
}

const getters = {
  getMatch: state => state.match
}

const mutationTypes = {
  GET_MATCH: 'GET_MATCH'
}

const mutations = {
  [mutationTypes.GET_MATCH] (state, match) {
    state.match = match
  }
}

const actions = {
  getMatch ({commit}, answers) {
    console.log(answers)
    appService.getMatch(answers).then(data => {
      commit(mutationTypes.GET_MATCH, { match: data })
    })
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
