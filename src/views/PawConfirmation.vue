<template>
  <div class="confirmation" v-if="getMatch">
    <img src="../assets/img/confirmation.gif" alt="Confirmación"/>
    <p class="paw-title-primary">¡Perfecto!</p>
    <p>La {{getMatch.association.name}} se pondrá en contacto contigo en los próximos días</p>
    <router-link to="/pawfeed" tag="a" class="paw-button primary">Entendido</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'pawConfirmation',
  computed: {
    ...mapGetters({
      getMatch: 'match/getMatch'
    })
  }
}
</script>

<style scoped>
  .confirmation {
    margin: 0 1rem;
  }
  img {
    padding: 2rem;
  }
  p {
    margin-bottom: 1rem;
    padding: 0 3rem;
    text-align: center;
  }
</style>
