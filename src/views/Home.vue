<template>
  <div class="home">
    <PawCTA />
    <PawSuccessCard/>
    <section class="association">
      <div class="flex">
        <img src="../assets/icons/couple.svg" alt="Icono pareja"/>
        <p class="title">¿Ayudas en una fundación, <br/>una asociación <br/> o una protectora?</p>
      </div>
      <router-link to="" tag="a" class="paw-button secondary">Encuenta un adoptante</router-link>
    </section>
    <PawSuccessCard/>
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
