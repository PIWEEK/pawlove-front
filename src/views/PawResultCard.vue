<template>
  <div class="paw-result-card">
    <div class="match-card">
      <p class="paw-title-primary">¡Tenemos un match!</p>
      <p class="card-subtitle">Nuestro avanzado algoritmo y la revisión explícita de Mari Carmen, nuestro IA, lo confirman</p>
      <PawProfileImage            
        imgUrl="https://instagram.fmad3-7.fna.fbcdn.net/vp/dfd813c0a53d73f437639f4a9060ce9c/5BC6C53D/t51.2885-15/e35/35617246_240673170075456_4290119012362223616_n.jpg"
        showFollowLink="true"
        petName="Antonio"
        type="el Goden Terrier"/>
      <router-link to="/pawassociationcontact" tag="a" class="paw-button primary">¡Quiero adoptar!</router-link>
    </div>


    <ul class="hobbies">
      <li>Tamaño mediano</li>
      <li>Cazador de ardillas</li>
      <li>Cocreador en la creación de la batamanta</li>
      <li>Se va con extraños</li>
      <li>No te conoce pero ya te quiere</li>
    </ul>
    <div class="media">
      Aquí fotos
    </div>
    <div class="pet-description">
      <p>Antonio es muy cariñoso y tiene mucha energía.
        Está todo el día haciendo el tonto con los juguetes, en especial con su tortuga de peluche.
        Está muy contento en casa si va a jugar al parque durante al menos media hora.
      </p>
    </div>

    <div class="association">
      <img src="http://www.gataweb.com/images/logo.jpg" alt="" />
      <div class="association-info">
        <span class="name">Asociación GATA</span>
        <span class="subtitle">Asociación protectora de animales</span>
      </div>
    </div>

    <div class="questions">
      <p>¿Tienes alguna duda sobre Antonio?</p>
      <router-link to="" tag="a" class="paw-button secondary">Pregunta al cuidador</router-link>
    </div>
  </div>
</template>

<script>
import PawProfileImage from '@/components/PawProfileImage.vue'

export default {
  name: 'pawResultCard',
  components: {
    PawProfileImage
  }
}
</script>

<style scoped>
  .match-card {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 2px 3px 4px 0px rgba(0,0,0,0.2);
    padding: 1.5rem 1rem;
  }
  .card-subtitle {
    text-align: center;
    line-height: 20px;
    margin: 0 0.25rem 2rem 0.25rem;
  }
  .association {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
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
  .association-info .subtitle {
    color: #9B9B9B;
    font-size: 12px;
  }
  .media {
    margin-bottom: 1.5rem;
  }
  .pet-description {
    line-height: 20px;
    margin-bottom: 1.5rem;
  }
  .questions {
    margin-bottom: 1.5rem;
  }
  .questions p {
    text-align: center;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 16px;
  }
</style>
