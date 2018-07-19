<template>
  <div class="paw-success-card">
    <div class="img-container">
      <img :src="imageUrl" alt="" />
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <div class="association">
        <img :src="associationImageUrl" alt="" />
        <div class="association-info">
          <span class="name">{{ association }}</span>
          <span class="date">{{ time }}</span>
        </div>
      </div>
      <div class="description">
        <p class="title">
          Esto es lo que nos cuenta {{ ownerName }}:
        </p>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PawSuccessCard',
  props: {
    title: String,
    association: String,
    associationImageUrl: String,
    time: String,
    petName: String,
    ownerName: String,
    description: String,
    imageUrl: String
  }
}
</script>

<style scoped>
  .img-container {
    position: relative;
    margin-bottom: 10px;
  }
  .img-container img {
    width: 100%;
  }
  .img-container .title {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #ffffff;
    font-weight: 700;
  }
  .association {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .association img {
    height: 36px;
    border-radius: 50%;
  }
  .association-info {
    margin-left: 10px;
    font-weight: 700;
  }
  .association-info span {
    display: block;
  }
  .association-info .name {
    font-size: 14px;
  }
  .date {
    color: #9B9B9B;
    font-size: 12px;
  }
  .description .title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }
</style>
