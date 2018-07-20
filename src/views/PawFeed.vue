<template>
  <div class="paw-feed">
    <PawMatchCard :pet="follow1"/>
    <div class="cta">
      <p class="title">
        ¿Te ayudamos a encontrar tu <br/> nuevo amigo peludo?
      </p>
      <router-link to="/pawonboarding" tag="a" class="paw-button primary">Encuentra mi mascota ideal</router-link>
    </div>
    <PawSuccessCard
      title="¡Hank y Elisabeth ya están en casa juntos!"
      association="Asociación GATA"
      associationImageUrl="https://pawlove.club/media/uploads/petlogo.jpeg"
      time="Hace 1 minuto"
      petName="Hank"
      ownerName="Elisabeth"
      description="Hace dos días que Hank está en casa y ya es como si llevara toda la vida aquí. Se ha adueñado del sofá grande y mis hijos están ..."
      imageUrl="https://t1.uc.ltmcdn.com/images/8/5/4/img_por_que_se_le_caen_los_dientes_a_mi_gato_causas_y_soluciones_48458_300_150.jpg"/>
    <PawTips/>
    <PawSuccessCard
      title="Salva se hace sitio en casa de Marta."
      association="Sociedad protectora de animales PETMA"
      associationImageUrl="https://pawlove.club/media/uploads/Oval.png"
      time="Hace 1 minuto"
      petName="Salva"
      ownerName="Marta"
      description="Salva llegó con mucho miedo pero ahora puede estar tranquilo porque aquí va a tener todo lo que le haga falta..."
      imageUrl="http://demo.isotype.blue/metagrid/wp-content/uploads/sites/20/2015/05/girl-1160441_1920-1-960x440.jpg"/>
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
    date: 'Hace 2 minutos',
    description: 'Siempre que puedo llevo a Antonio a pasear por la playa. La verdad es que disfruta muchísimo corriendo con el resto de perretes.',
    profileImageUrl: 'https://res.cloudinary.com/twenty20/image/private/s--61vOLhAS--/c_fit,w_640/g_south_east,l_overlay-twenty20-logo-stacked/v1/photosp/e81c6e0d-a093-4582-8e11-64ae2946c15d.jpg',
    imageUrl: 'http://1.bp.blogspot.com/_dTR_P0sqXdg/TS8dP9Mm8QI/AAAAAAAAB_c/p-iFIQRwMHY/s1600/praia_cachorro2.jpg'
  }
]

const follow2 = [
  {
    petName: 'Coco',
    date: 'Hace 1 minuto',
    description: '¡Estaba escondido! Casi no lo encuentro. Llevaba más de 2 horas buscándole.',
    profileImageUrl: 'https://instagram.fmad3-7.fna.fbcdn.net/vp/81a9012f8dcddc3c037d409518034d85/5BC94B40/t51.2885-15/sh0.08/e35/s640x640/36513958_2084382475211620_6733002049895530496_n.jpg',
    imageUrl: 'https://www.kucni-ljubimci.com/wp-content/uploads/2017/04/zasto-macke-predu-05.jpg'
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
  .cta .title {
    color: #E4643C;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    line-height: 24px;
    margin-bottom: 1rem;
  }
  .cta .paw-button {
    margin-bottom: 3rem;
  }
</style>
