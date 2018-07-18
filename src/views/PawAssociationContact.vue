<template>
  <div class="paw-association-contact">
    <p class="paw-title-primary">¡Ya estás más cerca de tener a tu nuevo amigo en casa!</p>
    <PawProfileImage
      imgUrl="https://instagram.fmad3-7.fna.fbcdn.net/vp/dfd813c0a53d73f437639f4a9060ce9c/5BC6C53D/t51.2885-15/e35/35617246_240673170075456_4290119012362223616_n.jpg"
      :showFollowLink="false"
      petName="Antonio"
      type="el Goden Terrier"/>
    <p class="contact-subtitle">Indícanos como quieres que la asociación ANAA contacte contigo:</p>
    <a href="" class="paw-link">Tengo una cuenta</a>
    <form id="associationContact" @submit="checkForm" class="association-contact-form">
      <fieldset>
        <label for="name">¿Cuál es tu nombre completo?</label>
        <input type="text" name="name" id="name" v-model="contactData.name">
        <span v-if="!name && showError">Campo requerido</span>
      </fieldset>

      <fieldset>
        <label for="email">Indícanos un email</label>
        <input type="text" name="email" id="email" v-model="contactData.email">
        <span v-if="!email && showError">Campo requerido</span>
      </fieldset>

      <fieldset>
        <label for="phone">Teléfono móvil</label>
        <input type="text" name="phone" id="phone" v-model="contactData.phone">
        <span v-if="!phone && showError">Campo requerido</span>
      </fieldset>

      <fieldset>
        <label for="comments">¿Algún comentario?</label>
        <textarea type="text" name="comments" id="comments" v-model="contactData.comments" />
      </fieldset>

      <fieldset>
        <button type="submit" class="paw-button primary">Enviar datos de contacto</button>
      </fieldset>

    </form>
  </div>
</template>

<script>

import PawProfileImage from '@/components/PawProfileImage.vue'

export default {
  data () {
    return {
      showError: false,
      contactData: {
        name: null,
        email: null,
        phone: null,
        comments: null
      }
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

<style scoped>
  .paw-association-contact {
    display: grid;
    grid-template-columns: 1fr;
  }
  .association-contact-form {
    margin-bottom: 1rem;
  }
  fieldset {
    border: none;
    padding: 0;
    margin: 0 0 1rem 0;
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
  .contact-subtitle {
    font-size: 16px;
    margin-bottom: 0.25rem;
  }
  .paw-link {
    margin-bottom: 1rem;      
  }
  .paw-title-primary {
    margin-bottom: 1rem;
  }
</style>