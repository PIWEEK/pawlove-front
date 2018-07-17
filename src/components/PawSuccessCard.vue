<template>
  <div class="paw-success-card">
    <div class="img-container">
      <img src="../assets/img/love-history.png" alt="" />
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <div class="association">
        <img :src="associationImageUrl" alt="" />
        <p> {{ association }}
          <span class="date">{{ time }}</span>
        </p>
      </div>
      <p class="description">
        <strong>Esto es lo que nos cuenta {{ ownerName }}:</strong>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
const successCases = [
  {
    title: '¡Hank y Elisabeth ya están en casa juntos!',
    association: 'Asociación GATA',
    associationImageUrl: 'Asociación GATA',
    time: '4546545646',
    petName: 'Hank',
    ownerName: 'Elisabeth',
    description: 'Hace dos días que Hank está en casa y ya es como si llevara toda la vida aquí. Se ha adueñado del sofá grande y mis hijos están ...',
    imageUrl: '../assets/img/love-history.png'
  },
  {
    title: 'Zoe y Samuel, amantes de la montaña',
    association: 'Asociación GATA',
    associationImageUrl: 'Asociación GATA',
    time: '4546545646',
    petName: 'Zoe',
    ownerName: 'Samuel',
    description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
    imageUrl: '../assets/img/love-history.png'
  },
  {
    title: 'Coco, como caído del cocotero',
    association: 'Asociación GATA',
    associationImageUrl: 'Asociación GATA',
    time: '4546545646',
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
  }
  .img-container img {
    width: 100%;
  }
  .img-container .title {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #ffffff;
    font-weight: 700px;
  }
</style>