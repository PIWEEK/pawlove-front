<template>
  <div class="register">
    <div class="diary">
      <img src="https://instagram.fmad3-7.fna.fbcdn.net/vp/b5a91190c22e87ff1bfddf08ec4abc10/5BD62ACB/t51.2885-15/sh0.08/e35/s640x640/30591276_183696315591873_4545995404168134656_n.jpg" alt="" />
      <p>Hoy ha metido la cabeza en el cuenco de la comida y tenía trocitos hasta en las orejas! 😅</p>
    </div>
    <p>¿Quieres registrarte?</p>
    <ul>
      <li>Podrás ver como avanza el proceso.</li>
      <li>Podrás estar al tanto de cómo le va a Antonio.</li>
    </ul>
    <form id="register" @submit="checkForm">
      <div class="field">
        <label for="password">Indica una contraseña</label>
        <input type="password" name="password" id="password" v-model="password">
        <span v-if="!password && showRequired">Campo requerido</span>
      </div>

      <div class="field">
        <label for="repeatPassword">Repite la contraseña</label>
        <input type="password" name="repeatPassword" id="repeatPassword" v-model="repeatPassword">
        <span v-if="!repeatPassword && showRequired">Campo requerido</span>
        <span v-if="showDifferentValues">La contraseña no coincide con el campo anterior</span>
      </div>

      <div class="field">
        <button type="submit">Regístrate</button>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showRequired: false,
      showDifferentValues: false,
      password: null,
      repeatPassword: null
    }
  },
  name: 'pawRegister',
  methods: {
    checkForm: function (e) {
      this.showRequired = !this.password || !this.repeatPassword
      this.showDifferentValues = this.password !== this.repeatPassword
    e.preventDefault()
    }
  }
}
</script>