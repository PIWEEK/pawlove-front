<template>
  <div class="paw-match-group">
    <div class="paw-match-card" v-for="card in pet" :key="card.index">
      <img :src="card.imageUrl" alt="" class="main-img"/>
      <div class="content">
        <div class="pet">
          <img :src="card.profileImageUrl" alt=""/>
          <div class="pet-info">
            <span class="name">{{ card.petName }}</span>
            <span class="date">{{ card.date }}</span>
          </div>
        </div>
        <p class="description">
          {{ card.description }}
        </p>
      </div>
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));  
  }
  .paw-match-card {
    margin: 0.25rem 0.25rem 1rem 0.25rem;
  }
  .main-img {
    max-height: 500px;
    border-radius: 4px 4px 0 0;
  }
  .pet {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .pet img {
    height: 36px;
    border-radius: 50%;
  }
  .pet-info {
    margin-left: 10px;
    font-weight: 700;
  }
  .pet-info span {
    display: block;
  }
  .pet-info .name {
    font-size: 14px;
  }
  .date {
    color: #9B9B9B;
    font-size: 12px;
  }
</style>
