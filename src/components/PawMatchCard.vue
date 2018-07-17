<template>
  <div class="paw-match-group">
    <div class="paw-match-card" v-for="card in pet" :key="card.index">
      <div class="header">
        <img :src="card.profileImageUrl" alt=""/>
        <p> {{ card.petName }}
          <span class="date">{{ card.date }}</span>
        </p>
      </div>
      <img :src="card.imageUrl" alt="" class="square"/>
      <p class="description">
        {{ card.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PawMatchCard',
  props: {
    pet: []
  }
}
</script>

<style scoped>
  .paw-match-group {
    display: flex;
  }
  .paw-match-card {
    margin: 1rem;
  }
  .header {
    align-items: center;
    display: flex;
    margin-bottom: 1rem;
  }
  .header img{
    border-radius: 50%;
    height: 50px;
    margin-right: 1rem;
    width: 50px;
  }
  .square {
    max-height: 500px;
  }
  .date {
    display: block;
  }
  .description {
    padding: 1rem 0.5rem;
  }
</style>
