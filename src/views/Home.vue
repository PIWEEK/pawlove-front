<template>
  <div class="home">
    <section class="main">
      <h1>
        ¿Te gustaría encontrar la mascota ideal en base a tu personalidad?
      </h1>
      <p>Completa nuestro cuestionario para saber qué mascota querría formar parte de tu vida.</p>
      <Button text="Encontrar mi mascota ideal"/>
    </section>
    <section class="association">
      <h2>¿Colaboras con alguna asociación o refugio?</h2>
      <p>Si quieres que tus potenciales mascotas puedan aparecer en los match contáctanos</p>
      <Button text="Dar de alta mascotas"/>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'home',
  components: {
    Button
  }
}
</script>
