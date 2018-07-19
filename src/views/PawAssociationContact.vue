<template>
  <div class="paw-association-contact">
    <PawProfileImage
      imgUrl="https://instagram.fmad3-7.fna.fbcdn.net/vp/dfd813c0a53d73f437639f4a9060ce9c/5BC6C53D/t51.2885-15/e35/35617246_240673170075456_4290119012362223616_n.jpg"
      :showFollowLink="false"
      petName="Antonio"
      type="el Goden Terrier"/>
    <p class="paw-title-primary">¡Ya estás más cerca de tener a tu nuevo amigo en casa!</p>
    <p class="contact-subtitle">Regístrate para que la asociación GATA contacte contigo:</p>
    <a href="" class="paw-link">Tengo una cuenta</a>
    <form id="associationContact" @submit="checkForm" class="association-contact-form">
      <fieldset>
        <label for="name">¿Cuál es tu nombre completo?</label>
        <input type="text" name="name" id="name" v-model="contactData.name">
        <span v-if="!contactData.name && showError" class="required">Campo requerido</span>
      </fieldset>

      <fieldset>
        <label for="email">Indícanos un email</label>
        <input type="text" name="email" id="email" v-model="contactData.email">
        <span v-if="!contactData.email && showError" class="required">Campo requerido</span>
        <span v-if="!validEmail(contactData.email) && showError" class="required">Email inválido</span>
      </fieldset>

      <fieldset>
        <label for="password">Indica una contraseña</label>
        <input type="password" name="password" id="password" v-model="contactData.password">
        <span v-if="!contactData.password && showError" class="required">Campo requerido</span>
      </fieldset>

      <fieldset>
        <label for="repeatPassword">Repite la contraseña</label>
        <input type="password" name="repeatPassword" id="repeatPassword" v-model="contactData.repeatPassword">
        <span v-if="!contactData.repeatPassword && showError" class="required">Campo requerido</span>
        <span v-if="contactData.repeatPassword !== contactData.password && showError" class="required">La contraseña no coincide con el campo anterior</span>
      </fieldset>
      <fieldset>
        <label for="phone">Teléfono móvil</label>
        <input type="text" name="phone" id="phone" v-model="contactData.phone">
        <span v-if="!contactData.phone && showError" class="required">Campo requerido</span>
      </fieldset>

      <fieldset>
        <label for="comments">¿Algún comentario?</label>
        <textarea type="text" name="comments" id="comments" v-model="contactData.comments" />
      </fieldset>

      <fieldset>
        <button type="submit" class="paw-button primary">Enviar datos de contacto</button>
      </fieldset>
    </form>
    <p class="contact-subtitle">Si lo prefieres, puedes contactar directamente con la asociación.</p>
    <div class="org-info">
      <img  class="photo" src="https://pawlove.club/media/uploads/petlogo.jpeg" />
      <div class="data">
        <span class="name">GATA</span>
        <span class="description">Asociación protectora de animales</span>
      </div>
    </div>
    <a class="paw-button secondary org-link">Ver los datos de contacto.</a>
  </div>
</template>

<script>

import PawProfileImage from '@/components/PawProfileImage.vue'

export default {
  name: 'pawAssociationContact',
  data () {
    return {
      showError: false,
      contactData: {
        name: null,
        email: null,
        password: null,
        repeatPassword: null,
        phone: null,
        comments: null
      }
    }
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault()
      if (
        !this.contactData.name ||
        !this.contactData.email ||
        !this.validEmail(this.contactData.email) ||
        !this.contactData.phone ||
        !this.contactData.password ||
        this.contactData.password !== this.contactData.repeatPassword
      ) {
        this.showError = true
      } else {
        this.showError = false
        this.$router.push({name: 'pawconfirmation'})
      }
    },
    validEmail: (email) => {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  },
  components: {
    PawProfileImage
  }
}
</script>

<style scoped>
  .paw-association-contact {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 1.25rem;
    padding-bottom: 2rem;
  }
  .association-contact-form {
    margin-bottom: 3.125rem;
  }
  label, input {
    display: block;
  }
  label {
    margin-bottom: 0.1rem;
  }
  input, textarea {
    display: block;
    width: 100%;
    height: 2.5rem;
    padding: .375rem .75rem;
    font-size: 14px;
    line-height: 1.5;
    border: 1px solid #9B9B9B;
    border-radius: 4px;
  }
  textarea {
   height:  5.625rem;
  }
  button {
    margin-top: 1.875rem;
  }
  .contact-subtitle {
    font-size: 16px;
    margin-bottom: 0.25rem;
  }
  .paw-link {
    color: #E4643C;
    margin-bottom: 1.2rem;
  }
  .paw-title-primary {
    margin-bottom: 1rem;
  }
  .required {
    color: #E4643C;
    font-size: 12px;
  }
  /* Org info */
  .org-info {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-family: "Cabin";
    margin: 1.25rem 0;
  }
  .photo {
    border-radius: 50%;
    height: 2.55rem;
  }
  .data {
    display: flex;
    flex-direction: column;
    padding-left: .5625rem;
    line-height: 2rem;
  }
  .name {
    font-size: .875rem;
    font-weight: bold;
    line-height: 1.0625rem;
  }
  .description {
    color: #656A6B;
    font-size: .875rem;
    font-weight: regular;
    line-height: 1.0625rem;
  }
  .org-link {
    box-shadow: none;
  }
</style>
