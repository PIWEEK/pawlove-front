<template>
  <div class="paw-result-card">
    <h2>¡Hemos encontrado a tu amigo ideal!</h2>
    <p>Nuestro avanzado algoritmo y la revisión explícita de Mari Carmen, nuestro IA, lo confirman</p>
    <PawProfileImage
      imgUrl="https://instagram.fmad3-7.fna.fbcdn.net/vp/dfd813c0a53d73f437639f4a9060ce9c/5BC6C53D/t51.2885-15/e35/35617246_240673170075456_4290119012362223616_n.jpg"
      showFollowLink="true" />
    <div class="profile-title">
      <h3 class="name">Antonio</h3>
      <p>el Golden Terrier</p>
    </div>
    <router-link to="" tag="a" class="paw-button">Adóptale</router-link>
    <div class="description">
      <p>Antonio es muy cariñoso y tiene mucha energía.
        Está todo el día haciendo el tonto con los juguetes, en especial con su tortuga de peluche.
        Está muy contento en casa si va a jugar al parque durante al menos media hora.
      </p>
    </div>
    <div class="media">
      Aquí fotos
    </div>
    <ul>
      <li>Tamaño mediano</li>
      <li>Cazador de ardillas</li>
      <li>Cocreador en la creación de la batamanta</li>
      <li>Se va con extraños</li>
      <li>No te conoce pero ya te quiere</li>
    </ul>
    <div class="association">
      <img src="" alt="" />
      <h4>ANNA</h4>
      <p>Asociación Protectora de Animales</p>
    </div>
    <p>¿Tienes alguna duda sobre Antonio?</p>
    <router-link to="" tag="a" class="paw-button">Pregunta al cuidador</router-link>
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