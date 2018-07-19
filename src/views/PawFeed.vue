<template>
  <div class="paw-feed">
    <PawCTA/>
    <PawMatchCard :pet="follow1"/>
    <PawSuccessCard
      title="¡Hank y Elisabeth ya están en casa juntos!"
      association="Asociación GATA"
      associationImageUrl="https://pawlove.club/media/uploads/petlogo.jpeg"
      time="Hace 1 minuto"
      petName="Hank"
      ownerName="Elisabeth"
      description="Hace dos días que Hank está en casa y ya es como si llevara toda la vida aquí. Se ha adueñado del sofá grande y mis hijos están ..."
      imageUrl="https://t1.uc.ltmcdn.com/images/8/5/4/img_por_que_se_le_caen_los_dientes_a_mi_gato_causas_y_soluciones_48458_300_150.jpg"/>
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
    <PawMatchCard :pet="follow2"/>
  </div>
</template>

<script>
import PawSuccessCard from '@/components/PawSuccessCard.vue'
import PawTips from '@/components/PawTips.vue'
import PawMatchCard from '@/components/PawMatchCard.vue'
import PawCTA from '@/components/PawCTA.vue'

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
    PawMatchCard,
    PawCTA
  }
}
</script>

<style scoped>
  .paw-feed {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 10px;
  }
  .paw-success-card, .paw-match-group, .paw-tips {
    margin-bottom: 1.5rem;
  }
</style>
