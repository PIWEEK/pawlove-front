import appService from '../../service/app.service.js'

const state = {
  questions: []
}

const getters = {
  getQuestionsList: state => state.questions
}

const mutationTypes = {
  GET_QUESTIONS: 'GET_QUESTIONS'
}

const mutations = {
  [mutationTypes.GET_QUESTIONS] (state, questions) {
    state.questions = questions
  }
}

const actions = {
  getQuestions ({ commit }) {
    appService.getQuestions().then(data => {
      commit(mutationTypes.GET_QUESTIONS, { questions: data })
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