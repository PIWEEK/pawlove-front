import Vue from 'vue'
import Vuex from 'vuex'
import appService from './service/app.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pets: [],
    associations: [],
    questions: [],
    successCases: [
      {
        title: 'Antonio encuentra el amor',
        petName: 'Antonio',
        ownerName: 'Pepito',
        description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
        imageUrl: 'https://razas-deperros.com/wp-content/uploads/2018/02/Golden-retriever-portada.jpg'
      },
      {
        title: 'Zoe y Samuel, amantes de la montaña',
        petName: 'Zoe',
        ownerName: 'Samuel',
        description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
        imageUrl: 'https://www.losanimales.org/wp-content/uploads/2018/03/Chow-blanco.jpg'
      },
      {
        title: 'Coco, como caído del cocotero',
        petName: 'Coco',
        ownerName: 'Marina',
        description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
        imageUrl: 'https://caldervets.co.uk/wp-content/uploads/2016/06/Dental-Hygiene-For-Rabbits-970x546.jpg'
      }
    ],
    tips: [
      {
        description: 'los gatos negros son súper gatos?',
        imageUrl: 'data:image/png;base64,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'
      },
      {
        description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
        imageUrl: 'http://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/1024/22215-dog-icon.png'
      },
      {
        description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
        imageUrl: 'http://images.hellokids.com/_uploads/_tiny_galerie/20120416/c6n_how-to-draw-a-bunny-for-kids-step-6.jpg'
      }
    ]
  },
  mutations: {
    updatePets (state, pets) {
      state.pets = pets
    },
    updateAssociations (state, associations) {
      state.associations = associations
    },
    updateQuestions (state, questions) {
      state.questions = questions
    }
  },
  actions: {
    updatePets (context) {
      appService.getPets().then(data => {
        context.commit('updatePets', {pets: data})
      })
    },
    updateAssociations (context) {
      appService.getAssociations().then(data => {
        context.commit('updateAssociations', {associations: data})
      })
    },
    updateQuestions (context) {
      appService.getQuestions().then(data => {
        context.commit('updateQuestions', {questions: data})
      })
    }
  }
})
