<template>
  <div class="paw-association-contact">
    <p>¡Ya estás más cerca de tener a tu nuevo amigo en casa!</p>
    <PawProfileImage
      imgUrl="https://instagram.fmad3-7.fna.fbcdn.net/vp/dfd813c0a53d73f437639f4a9060ce9c/5BC6C53D/t51.2885-15/e35/35617246_240673170075456_4290119012362223616_n.jpg"
      :showFollowLink=false />
    <p>Indícanos como quieres que la asociación ANAA contacte contigo:</p>
    <a href="">Tengo una cuenta</a>
    <form id="associationContact" @submit="checkForm">
      <div class="field">
        <label for="name">¿Cuál es tu nombre completo?</label>
        <input type="text" name="name" id="name" v-model="name">
        <span v-if="!name && showError">Campo requerido</span>
      </div>

      <div class="field">
        <label for="email">Indícanos un email</label>
        <input type="text" name="email" id="email" v-model="email">
        <span v-if="!email && showError">Campo requerido</span>
      </div>

      <div class="field">
        <label for="phone">Teléfono móvil</label>
        <input type="text" name="phone" id="phone" v-model="phone">
        <span v-if="!phone && showError">Campo requerido</span>
      </div>

      <div class="field">
        <label for="comments">¿Algún comentario?</label>
        <textarea type="text" name="comments" id="comments" v-model="comments" />
      </div>

      <div class="field">
        <button type="submit">Enviar datos de contacto</button>
      </div>

    </form>
  </div>
</template>

<script>

import PawProfileImage from '@/components/PawProfileImage.vue'

export default {
  data () {
    return {
      showError: false,
      name: null,
      email: null,
      phone: null,
      comments: null
    }
  },
  name: 'pawAssociationContact',
  components: {
    PawProfileImage
  },
  methods: {
    checkForm: function (e) {
      !this.name || !this.email || !this.phone || !this.validEmail(this.email)
        ? this.showError = true
        : this.showError = false
    e.preventDefault()
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
