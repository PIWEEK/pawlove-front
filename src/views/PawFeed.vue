<template>
  <div class="feed">
    <section class="main">
      <h1>
        ¿Te gustaría encontrar la mascota ideal en base a tu personalidad?
      </h1>
      <p>Completa nuestro cuestionario para saber qué mascota querría formar parte de tu vida.</p>
      <router-link to="/pawonboarding" tag="a" class="paw-button">Encontrar mi mascota ideal</router-link>
    </section>
    <PawSuccessCard/>
    <PawMatchCard :pet="follow1"/>
    <PawSuccessCard/>
    <PawTips/>
    <PawMatchCard :pet="follow2"/>
  </div>
</template>

<script>
import PawSuccessCard from '@/components/PawSuccessCard.vue'
import PawTips from '@/components/PawTips.vue'
import PawMatchCard from '@/components/PawMatchCard.vue'

const follow1 = [
  {
    petName: 'Antonio',
    date: '1531824228421',
    description: '¿Echamos unas carreras? ¡Me encanta el aire libre!',
    profileImageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/b46e4a0ccdaa71a36adc002efacbe2b3/5BE84100/t51.2885-15/e35/32494053_146535416203242_3584742750790090752_n.jpg',
    imageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/28e0b58ccdab13b37d8e2db06a7bd61f/5BD848BC/t51.2885-15/sh0.08/e35/s750x750/31556805_1946908602286539_6694025449317597184_n.jpg'
  },
  {
    petName: 'Antonio',
    date: '1531824228421',
    description: '¡Menuda siesta nos hemos echado! Ya estamos con las pilas cargadas 100%',
    profileImageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/b46e4a0ccdaa71a36adc002efacbe2b3/5BE84100/t51.2885-15/e35/32494053_146535416203242_3584742750790090752_n.jpg',
    imageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/bb4d80d49a3763b117a046cc5bb9979c/5BC90527/t51.2885-15/e35/34545995_221052828678550_3578243683587194880_n.jpg'
  }
]

const follow2 = [
  {
    petName: 'Coco',
    date: '1531824228421',
    description: '¿Echamos unas carreras? ¡Me encanta el aire libre!',
    profileImageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/daca14cd479d3d06da9aa5d9f401f5b3/5BC6758B/t51.2885-15/sh0.08/e35/s750x750/27879429_358168671325063_8248812741570068480_n.jpg',
    imageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/1d6df0a7e03e60106769508722a6e404/5BE92406/t51.2885-15/sh0.08/e35/s640x640/30084668_975608142604111_414186189097009152_n.jpg'
  }
]

export default {
  data () {
    return {
      follow1,
      follow2
    }
  },
  name: 'pawFeed',
  components: {
    PawSuccessCard,
    PawTips,
    PawMatchCard
  }
}
</script>
