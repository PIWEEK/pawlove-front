<template>
  <div class="home">
    <section class="main">
      <h1>
        ¿Te gustaría encontrar la mascota ideal en base a tu personalidad?
      </h1>
      <p>Completa nuestro cuestionario para saber qué mascota querría formar parte de tu vida.</p>
      <router-link to="/onboarding" tag="a" class="paw-button">Encontrar mi mascota ideal</router-link>
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
