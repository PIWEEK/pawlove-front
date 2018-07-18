<template>
  <div class="onBoarding">
    <form>
      <fieldset>
        <p class="question">¿Pasas mucho tiempo fuera de casa?</p>
        <div class="input-container">
          <input type="radio" id="one" value="One" v-model="questionnaire.questionOne">
          <label for="one" class="option-label">Perro</label>
        </div>
        <div class="input-container">
          <input type="radio" id="two" value="Two" v-model="questionnaire.questionOne">
          <label for="two" class="option-label">Gato</label>
        </div>
        <div class="input-container">
          <input type="radio" id="three" value="Three" v-model="questionnaire.questionOne">
          <label for="three" class="option-label">Conejo</label>
        </div>
      </fieldset>

      <fieldset>
        <input type="radio" id="one" value="One" v-model="questionnaire.questionTwo">
        <label for="one" class="option-label">One</label>
        <input type="radio" id="two" value="Two" v-model="questionnaire.questionTwo">
        <label for="two" class="option-label">Two</label>
      </fieldset>

      <fieldset>
        <input type="radio" id="one" value="One" v-model="picked3">
        <label for="one" class="option-label">One</label>
        <input type="radio" id="two" value="Two" v-model="picked3">
        <label for="two" class="option-label">Two</label>
      </fieldset>

      <fieldset>
        <input type="radio" id="one" value="One" v-model="picked4">
        <label for="one" class="option-label">One</label>
        <input type="radio" id="two" value="Two" v-model="picked4">
        <label for="two" class="option-label">Two</label>
      </fieldset>
      <div class="track-bar">
        <p>1 de 9</p>
        <button v-if="!lastQuestion" type="button">siguiente</button>
        <button v-if="lastQuestion" type="submit">enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'OnBoarding',
  props: {
    msg: String
  },
  data () {
    return {
      questionnaire: {
        questionOne: '',
        questionTwo: '',
        questionThree: '',
        questionFour: ''
      },
      lastQuestion: false
    }
  }
}

</script>
<style>
.onBoarding {
  display: grid;
  grid-template-columns: 1fr;
  height: calc(100vh - 70px);
  position: relative;
  
}
.question {
  font-size: 20px;
  text-align: center;
  margin: 2rem 0 3rem;
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
.option-label {
  display: block;
  background-color: #7CC4BA;
  padding: 1rem 2.5rem;
  color: #ffffff;
  border-top: 1px solid #73B6AD ;
}
.input-container input:checked + .option-label {
  background-color: #68B0A5;
}

</style>
