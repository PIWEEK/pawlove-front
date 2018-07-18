const state = {
  sideMenuIsOpen: false
}

const getters = {
  sideMenuIsOpen: state => state.sideMenuIsOpen
}

const mutationTypes = {
  OPEN_SIDE_MENU: 'OPEN_SIDE_MENU',
  CLOSE_SIDE_MENU: 'CLOSE_SIDE_MENU'
}

const mutations = {
  [mutationTypes.OPEN_SIDE_MENU] (state) {
    state.sideMenuIsOpen = true
  },
  [mutationTypes.CLOSE_SIDE_MENU] (state) {
    state.sideMenuIsOpen = false
  }
}

const actions = {
  openSideMenu ({ commit, state }) {
    commit(mutationTypes.OPEN_SIDE_MENU)
  },
  closeSideMenu ({ commit, state }) {
    commit(mutationTypes.CLOSE_SIDE_MENU)
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
