<template>
  <div class="paw-success-card">
    <img :src="imageUrl" alt="" />
    <div class="content">
      <div class="title">
        {{ title }}
      </div>
      <div class="petName">
        {{ petName }}
      </div>
      <div class="ownerName">
        {{ ownerName }}
      </div>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
const successCases = [
  {
    title: 'Antonio encuentra el amor',
    petName: 'Antonio',
    ownerName: 'Pepito',
    description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
    imageUrl: 'https://razas-deperros.com/wp-content/uploads/2018/02/Golden-retriever-portada.jpg'
  },
  {
    title: 'Zoe y Samuel, amantes de la montaña',
    petName: 'Zoe',
    ownerName: 'Samuel',
    description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
    imageUrl: 'https://www.losanimales.org/wp-content/uploads/2018/03/Chow-blanco.jpg'
  },
  {
    title: 'Coco, como caído del cocotero',
    petName: 'Coco',
    ownerName: 'Marina',
    description: 'Marshmallow sweet apple pie gummies danish macaroon macaroon chupa chups liquorice. Sugar plum chocolate cake sweet roll.',
    imageUrl: 'https://caldervets.co.uk/wp-content/uploads/2016/06/Dental-Hygiene-For-Rabbits-970x546.jpg'
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
button {
  all: initial;
  background-color: black;
  color: white;
  padding: 1rem;
}
</style>
