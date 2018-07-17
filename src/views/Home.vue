<template>
  <div class="home">
    <section class="main">
      <div class="container">
        <p>Reconócelo: tienes tus cosas, tus rarezas, tus manías... <br/> Las mascotas también tienen su personalidad.</p>
        <div class="icons-group">
          <img src="../assets/icons/dog.svg" alt="Icono perro"/>
          <img src="../assets/icons/cat.svg" alt="Icono gato"/>
          <img src="../assets/icons/hamster.svg" alt="Icono hamster"/>
        </div>
        <p class="title">¿Te ayudamos a encontrar tu nuevo amigo peludo?</p>
        <router-link to="/pawonboarding" tag="a" class="paw-button">Encuentra mi mascota ideal</router-link>
      </div>
    </section>
    <PawSuccessCard/>
    <section class="association">
      <h2>¿Colaboras con alguna asociación o refugio?</h2>
      <p>Si quieres que tus potenciales mascotas puedan aparecer en los match contáctanos</p>
      <router-link to="" tag="a" class="paw-button">Dar de alta mascotas</router-link>
    </section>
    <PawSuccessCard/>
    <PawTips/>
  </div>
</template>

<script>
import PawSuccessCard from '@/components/PawSuccessCard.vue'
import PawTips from '@/components/PawTips.vue'

export default {
  name: 'home',
  components: {
    PawSuccessCard,
    PawTips
  }
}
</script>

<style scoped>
  section {
    text-align: center;
  }
  p {
    margin-bottom: 1rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 250px;
  }
  .title {
    font-size: 14px;
  }
  .icons-group {
    margin-bottom: 15px;
  }
  .icons-group img:not(:last-child) {
    margin-right: 5px;
  }
</style>
