<template>
  <div class="onBoarding">
    <h2>Cuestionario</h2>
    <fildset>
      <h3>¿En que tipo de mascota estabas pensando?</h3>
      <input type="radio" id="one" value="One" v-model="questionnaire.questionOne">
      <label for="one">Perro</label>
      <input type="radio" id="two" value="Two" v-model="questionnaire.questionOne">
      <label for="two">Gato</label>
      <input type="radio" id="three" value="Three" v-model="questionnaire.questionOne">
      <label for="three">Conejo</label>
    </fildset>

    <fildset>
      <input type="radio" id="one" value="One" v-model="questionnaire.questionTwo">
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="questionnaire.questionTwo">
      <label for="two">Two</label>
    </fildset>

    <fildset>
      <input type="radio" id="one" value="One" v-model="picked3">
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked3">
      <label for="two">Two</label>
    </fildset>

    <fildset>
      <input type="radio" id="one" value="One" v-model="picked4">
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked4">
      <label for="two">Two</label>
    </fildset>
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
      }
    }
  }
}
</script>
<style>
.onBoarding {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
