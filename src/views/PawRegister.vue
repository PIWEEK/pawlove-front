<template>
  <div class="register">
    <PawMatchCard :pet="follow1"/>
    <p class="paw-title-primary">¿Quieres registrarte?</p>
    <p>Podrás ver como avanza el proceso y estar al tanto de las últimas novedades de Coco</p>
    <form id="register" @submit="checkForm">
      <fieldset>
        <label for="password">Indica una contraseña</label>
        <input type="password" name="password" id="password" v-model="password">
        <span v-if="!password && showRequired" class="required">Campo requerido</span>
      </fieldset>

      <fieldset>
        <label for="repeatPassword">Repite la contraseña</label>
        <input type="password" name="repeatPassword" id="repeatPassword" v-model="repeatPassword">
        <span v-if="!repeatPassword && showRequired" class="required">Campo requerido</span>
        <span v-if="showDifferentValues" class="required">La contraseña no coincide con el campo anterior</span>
      </fieldset>

      <fieldset>
        <button type="submit" class="paw-button primary">Regístrate</button>
      </fieldset>

    </form>
  </div>
</template>

<script>
import PawMatchCard from '@/components/PawMatchCard.vue'

const follow1 = [
  {
    petName: 'Coco',
    date: '1531824228421',
    description: '¿Echamos unas carreras? ¡Me encanta el aire libre!',
    profileImageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/daca14cd479d3d06da9aa5d9f401f5b3/5BC6758B/t51.2885-15/sh0.08/e35/s750x750/27879429_358168671325063_8248812741570068480_n.jpg',
    imageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/1d6df0a7e03e60106769508722a6e404/5BE92406/t51.2885-15/sh0.08/e35/s640x640/30084668_975608142604111_414186189097009152_n.jpg'
  }
]

export default {
  data () {
    return {
      showRequired: false,
      showDifferentValues: false,
      follow1,
      password: null,
      repeatPassword: null
    }
  },
  name: 'pawRegister',
  components: {
    PawMatchCard
  },
  methods: {
    checkForm: function (e) {
      this.showRequired = !this.password || !this.repeatPassword
      this.showDifferentValues = this.password !== this.repeatPassword
    e.preventDefault()
    }
  }
}
</script>

<style scoped>
  .paw-match-group {
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    margin-bottom: 1rem;
  }
  label, input {
    display: block;
  }
  label {
    margin-bottom: 0.5rem;
  }
  input, textarea {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 14px;
    line-height: 1.5;
    border: 1px solid #9B9B9B;         
    border-radius: 4px;
  }
  .required {
    color: #E4643C;
    font-size: 12px;
  }
</style>