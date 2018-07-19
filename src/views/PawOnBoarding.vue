<template>
  <div class="onBoarding">
    <form>
      <fieldset :class="questionActive(question.id)" v-for="(question, index) in getQuestionsList" :key="question.index">
        <p class="question">{{question.text}}</p>
        <div class="input-container" v-for="answer in question.answers" :key="answer.index">
          <input type="radio" :id="answer.id" :value="answer.id" v-model="answers[index]" @change="hasValue">
          <label :for="answer.id" class="answer-label">{{answer.text}}</label>
        </div>
      </fieldset>

      <div class="track-bar">
        <div :class="`icon icon-position-${currentQuestion}`">
        <img v-if="currentQuestion === 1 || currentQuestion === 5 || currentQuestion === 9"
          src="../assets/icons/kitty.svg"
          alt="Icono gato"/>
        <img v-if="currentQuestion === 2 || currentQuestion === 6 || currentQuestion === 10"
          src="../assets/icons/canine.svg"
          alt="Icono perro"/>
        <img v-if="currentQuestion === 3 || currentQuestion === 7"
          src="../assets/icons/rabbit.svg"
          alt="Icono conejo"/>
        <img v-if="currentQuestion === 4 || currentQuestion === 8"
          src="../assets/icons/mouse.svg"
          alt="Icono raton"/>
        </div>
        <p>{{currentQuestion}} de {{getQuestionsList.length}}</p>
        <button type="button" v-if="!isLastQuestion" @click="handleNext" :disabled="nextDisabled">Siguiente</button>
        <button type="button" v-if="isLastQuestion" @click="handleSubmit">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'OnBoarding',
  props: {
    msg: String
  },
  data () {
    return {
      answers: [],
      currentQuestion: 1,
      nextDisabled: true
    }
  },
  computed: {
    ...mapGetters({
      getQuestionsList: 'questions/getQuestionsList'
    }),
    isLastQuestion () {
      return this.currentQuestion === this.getQuestionsList.length
    }
  },
  methods: {
    ...mapActions({
      getQuestions: 'questions/getQuestions',
      getMatch: 'match/getMatch'
    }),
    questionActive (questionId) {
      if (this.currentQuestion === questionId) {
        return ['active']
      } else if (this.currentQuestion + 1 === questionId) {
        return ['after']
      } else if (this.currentQuestion - 1 === questionId) {
        return ['before']
      } else {
        return ['']
      }
    },
    handleNext () {
      this.currentQuestion++
      this.nextDisabled = true
    },
    hasValue (e) {
      if (e.target.value) {
        this.nextDisabled = false
      }
    },
    handleSubmit () {
      const answers = this.answers.join(',')

      switch (answers.slice(0, 5)) {
        case '3,6,9':
          this.$router.push({name: 'pawresultcard', params: { result: 1 }})
          break
        case '3,5,8':
        case '3,5,9':
        case '3,6,8':
          this.$router.push({name: 'pawresultcard', params: { result: 2 }})
          break
        default:
          this.getMatch(answers)
          this.$router.push({name: 'pawresultcard'})
      }
    }
  },
  created () {
    this.getQuestions()
  }
}

</script>
<style scoped>
.onBoarding {
  display: grid;
  grid-template-columns: 1fr;
  height: calc(100vh - 80px);
  position: relative;
}
.question {
  font-size: 20px;
  text-align: center;
  margin: 2rem 1rem 3rem;
  color: #4F5859;
}
.track-bar {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: #E0E0E0;
}
.track-bar p {
  margin-right: 5rem;
  font-size: 16px;
}
.track-bar button{
  background-color: #E4643C;
  color: #ffffff;
  border: none;
  padding: 1.75rem 0.75rem;
  font-size: 14px;
  font-weight: 600;
}
.track-bar button:hover {
  cursor: pointer;
}
.track-bar button:disabled {
  opacity: 0.5;
}
form {
  position: relative;
  overflow: hidden;
}
fieldset {
  position: absolute;
  width: 100%;
  visibility: hidden;
  transition: all ease-in 0.5s;
}
fieldset.before{
  right: 100%;
}
fieldset.after{
  right: -100%;
}
fieldset.active {
  visibility: visible;
  right: 0;
}
.input-container {
  position: relative;
}
.input-container input {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
}
.answer-label {
  display: block;
  background-color: #7CC4BA;
  padding: 1rem 3.5rem;
  color: #ffffff;
  border-top: 1px solid #73B6AD ;
}
.input-container input:checked + .answer-label {
  background-color: #68B0A5;
}
.input-container input:checked + .answer-label:before {
  content: '✓';
  position: absolute;
  left: 25px;
  font-size: 2rem;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 40px;
}
.icon {
  position: absolute;
  top: -60px;
}
.icon.icon-position-1 {
  left: 8%;
}
.icon.icon-position-2 {
  left: 16%;
}
.icon.icon-position-3 {
  left: 24%;
}
.icon.icon-position-4 {
  left: 32%;
}
.icon.icon-position-5 {
  left: 40%;
}
.icon.icon-position-6 {
  left: 48%;
}
.icon.icon-position-7 {
  left: 56%;
}
.icon.icon-position-8 {
  left: 64%;
}
.icon.icon-position-9 {
  left: 72%;
}
.icon.icon-position-10 {
  left: 80%;
}
</style>
