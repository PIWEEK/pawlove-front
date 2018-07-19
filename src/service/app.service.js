import axios from 'axios'

axios.defaults.baseURL = 'https://pawlove.club/api'

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'

const appService = {
  getPets () {
    return new Promise((resolve) => {
      axios.get('/pets/').then(response => {
        resolve(response.data)
      })
    })
  },
  getAssociations () {
    return new Promise((resolve) => {
      axios.get('/associations/').then(response => {
        resolve(response.data)
      })
    })
  },
  getQuestions () {
    return new Promise((resolve) => {
      axios.get('/questions/').then(response => {
        resolve(response.data)
      })
    })
  }
}
export default appService
