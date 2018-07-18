<template>
  <div class="paw-success-card">
    <div class="img-container">
      <img src="../assets/img/love-history.png" alt="" />
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
const successCases = [
  {
    title: '¡Hank y Elisabeth ya están en casa juntos!',
    association: 'Asociación GATA',
    associationImageUrl: 'http://www.gataweb.com/images/logo.jpg',
    time: 'Hace 1 minuto',
    petName: 'Hank',
    ownerName: 'Elisabeth',
    description: 'Hace dos días que Hank está en casa y ya es como si llevara toda la vida aquí. Se ha adueñado del sofá grande y mis hijos están ...',
    imageUrl: '../assets/img/love-history.png'
  },
  {
    title: 'Zoe y Samuel, amantes de la montaña',
    association: 'Asociación GATA',
    associationImageUrl: 'http://www.gataweb.com/images/logo.jpg',
    time: 'Hace 1 minuto',
    petName: 'Zoe',
    ownerName: 'Samuel',
    description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
    imageUrl: '../assets/img/love-history.png'
  },
  {
    title: 'Coco, como caído del cocotero',
    association: 'Asociación GATA',
    associationImageUrl: 'http://www.gataweb.com/images/logo.jpg',
    time: 'Hace 1 minuto',
    petName: 'Coco',
    ownerName: 'Marina',
    description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
    imageUrl: '../assets/img/love-history.png'
  }
]

export default {
  data () {
    return {
      ...successCases[Math.floor(Math.random() * 3)]
    }
  },
  name: 'PawSuccessCard',
  props: {
    text: String
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