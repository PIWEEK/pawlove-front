<template>
  <div class="paw-result-card">
    <div class="match-card">
      <p class="paw-title-primary">¡Tenemos un match!</p>
      <PawProfileImage
        imgUrl="https://instagram.fmad3-7.fna.fbcdn.net/vp/dfd813c0a53d73f437639f4a9060ce9c/5BC6C53D/t51.2885-15/e35/35617246_240673170075456_4290119012362223616_n.jpg"
        :showFollowLink="true"
        petName="Antonio"
        type="el Goden Terrier"/>
      <div class="pet-tags">
        <span class="tag">calmado</span>
        <span class="tag">dominante</span>
        <span class="tag">juguetón</span>
      </div>
      <div class="pet-description">
        <p>Antonio es muy cariñoso y tiene mucha energía.
          Está todo el día haciendo el tonto con los juguetes, en especial con su tortuga de peluche.
          Está muy contento en casa si va a jugar al parque durante al menos media hora.
        </p>
      </div>
      <router-link to="/pawassociationcontact" tag="a" class="paw-button primary">¡Quiero adoptar!</router-link>
    </div>

    <div class="hobbies">
      <p>Macho Golden Terrier</p>
      <ul>
        <li>
          <img  src="../assets/icons/cake.svg" alt="icono tarta"/>
          2 años
        </li>
        <li>
          <img  src="../assets/icons/measure.svg" alt="icono metro"/>
          Tamaño mediano
        </li>
        <li>
          <img  src="../assets/icons/prize.svg" alt="icono premio"/>
          Cocreador en la creación de la batamanta</li>
        <li>
          <img src="../assets/icons/prize.svg" alt="icono premio"/>
          Gran cazador de ardillas</li>
      </ul>
    </div>

    <div class="media">
      <img class="pet-img" src="../assets/img/dog1.png" alt="imagen perro"/>
      <img class="pet-img" src="../assets/img/dog2.png" alt="imagen perro"/>
      <img class="pet-img" src="../assets/img/dog3.png" alt="imagen perro"/>
      <div class="view-more">
        <img src="../assets/icons/camera.svg" alt="icono cámara"/>
        <span>+9 más</span>
      </div>
    </div>

    <div class="questions">
      <p>¿Tienes alguna duda sobre Antonio?</p>
      <router-link to="" tag="a" class="paw-button secondary">Pregunta a la asociación</router-link>
    </div>

    <div class="association">
      <img src="http://www.gataweb.com/images/logo.jpg" alt="" />
      <div class="association-info">
        <span class="name">GATA</span>
        <span class="subtitle">Asociación protectora de animales</span>
      </div>
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
  .paw-result-card {
    margin: 0 10px;
  }
  .paw-title-primary {
    margin-bottom: 1rem;
  }
  .match-card {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 2px 3px 4px 0px rgba(0,0,0,0.2);
    padding: 1.5rem 1rem;
    margin-bottom: 2rem;
  }
  .profile {
    margin-bottom: 2rem;
  }
  .pet-tags {
    margin-bottom: 1.5rem;
  }
  .tag {
    color: #90A1A3;
    border: 1px solid #E1E1E1;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
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
  }
  .association-info span {
    display: block;
  }
  .association-info .name {
    font-size: 14px;
    font-weight: 700;
  }
  .association-info .subtitle {
    color: #9B9B9B;
  }
  .media {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    margin-bottom: 1.5rem;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  .media .pet-img {
    width: 100%;
    border-radius: 4px;
  }
  .media .view-more {
    width: 100%;
    background: linear-gradient(to right, #E2A28E 0%,#E4643C 100%);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .view-more span {
    color: #ffffff;
    font-size: 12px;
  }
  .pet-description p{
    line-height: 20px;
    margin-bottom: 1.5rem;
    color: #4F5859;
  }
  .questions {
    display: flex;
    margin-bottom: 1.5rem;
    align-items: center;
  }
  .questions .paw-button {
    width: 100%;
    padding: 1.2rem 0.5rem;
  }
  .questions p {
    font-size: 16px;
    margin-right: 1rem;
  }
  .hobbies {
    background-color: #ffffff;
    border-radius: 4px;
    padding: 1.5rem 1rem;
    margin-bottom: 2rem;
  }
  .hobbies p {
    padding: 0 1rem;
    font-weight: 700;
  }
  .hobbies ul {
    list-style-type: none;
    padding: 0 2rem;
  }
  .hobbies li {
    color: #4A4A4A;
    margin-bottom: 0.5rem;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
</style>
