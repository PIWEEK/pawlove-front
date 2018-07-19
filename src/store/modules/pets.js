import appService from '../../service/app.service.js'

const state = {
  pets: []
}

const getters = {
  getPetsList: state => state.pets
}

const mutationTypes = {
  GET_PETS: 'GET_PETS'
}

const mutations = {
  [mutationTypes.GET_PETS] (state, pets) {
    state.pets = pets
  }
}

const actions = {
  getPets ({ commit }) {
    appService.getPets().then(data => {
      commit(mutationTypes.GET_PETS, { pets: data })
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
