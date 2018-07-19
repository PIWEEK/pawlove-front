<template>
  <div class="home">
    <PawCTA />
    <PawSuccessCard
      title="¡Hank y Elisabeth ya están en casa juntos!"
      association="Asociación GATA"
      associationImageUrl="https://pawlove.club/media/uploads/petlogo.jpeg"
      time="Hace 1 minuto"
      petName="Hank"
      ownerName="Elisabeth"
      description="Hace dos días que Hank está en casa y ya es como si llevara toda la vida aquí. Se ha adueñado del sofá grande y mis hijos están ..."
      imageUrl="https://t1.uc.ltmcdn.com/images/8/5/4/img_por_que_se_le_caen_los_dientes_a_mi_gato_causas_y_soluciones_48458_300_150.jpg"/>
    <section class="association">
      <div class="flex">
        <img src="../assets/icons/couple.svg" alt="Icono pareja"/>
        <p class="title">¿Ayudas en una fundación, <br/>una asociación <br/> o una protectora?</p>
      </div>
      <router-link to="" tag="a" class="paw-button secondary">Encuenta un adoptante</router-link>
    </section>
    <PawSuccessCard
      title="Salva se hace sitio en casa de Marta."
      association="Sociedad protectora de animales PETMA"
      associationImageUrl="https://pawlove.club/media/uploads/Oval.png"
      time="Hace 1 minuto"
      petName="Salva"
      ownerName="Marta"
      description="Salva llegó con mucho miedo pero ahora puede estar tranquilo porque aquí va a tener todo lo que le haga falta..."
      imageUrl="http://demo.isotype.blue/metagrid/wp-content/uploads/sites/20/2015/05/girl-1160441_1920-1-960x440.jpg"/>
    <PawTips/>
  </div>
</template>

<script>
import PawSuccessCard from '@/components/PawSuccessCard.vue'
import PawTips from '@/components/PawTips.vue'
import PawCTA from '@/components/PawCTA.vue'

export default {
  name: 'home',
  components: {
    PawSuccessCard,
    PawTips,
    PawCTA
  }
}
</script>

<style scoped>
  .home {
    margin: 0 10px;
  }
  .association {
    background-color: #ffffff;
    border-radius: 4px;
    padding: 1.5rem 0.75rem;
    margin-bottom: 2rem;
  }
  .association .flex {
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;
    justify-content: center;
  }
  .association img {
    margin: 0 2rem 0 1.5rem;
  }
  .association .title {
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin-bottom: 0;
  }
  .paw-success-card {
    margin-bottom: 1.5rem;
  }
  .paw-tips {
    margin-bottom: 1.5rem;
  }
</style>
