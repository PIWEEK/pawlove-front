<template>
  <div class="confirmation">
    <img src="https://media.giphy.com/media/l3mZfIZ6ZFlkIUH8A/giphy.gif" alt="Hi five"/>
    <p class="paw-title-primary">¡Perfecto!</p>
    <p>La asociación ANNA se pondrá en contacto contigo en los próximos días</p>
    <router-link to="/pawfeed" tag="a" class="paw-button primary">Entendido</router-link>
  </div>
</template>

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
