<template>
  <div>
    <div class="confirmation" v-if="getMatch">
      <img src="../assets/img/confirmation.gif" alt="Confirmación"/>
      <p class="paw-title-primary">¡Perfecto!</p>
      <p>{{getMatch.association.name}} se pondrá en contacto contigo en los próximos días</p>
      <router-link to="/pawfeed" tag="a" class="paw-button primary">Entendido</router-link>
    </div>
    <div class="empty-card" v-else>
      <p class="paw-title-primary">404</p>
      <img src="../assets/img/404.gif" alt="Página no encontrada"/>
      <p>Tenemos a nuestras mejores cabecitas peludas pensantes intentando descrubir qué ha pasado.</p>
      <router-link to="/" tag="a" class="paw-button primary">Volver al inicio</router-link>
    </div>
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
  .empty-card {
    margin: 0 10px;
  }
  .empty-card .paw-title-primary {
    font-size: 20px;
    margin-top: 1rem;
    margin-bottom: 0;
  }
  .empty-card p {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .empty-card img{
    padding: 1rem 2rem;
  }
</style>
