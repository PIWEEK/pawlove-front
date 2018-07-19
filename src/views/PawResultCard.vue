<template>
  <div class="paw-result-card" v-if="getMatch">
    <div class="match-card">
      <p class="paw-title-primary">¡Tenemos un match!</p>
      <PawProfileImage
        :imgUrl="getMatch.images[0]"
        :showFollowLink="getMatch.association !== null"
        :petName="getMatch.name"
        :type="getMatch.nickname"/>
      <div class="pet-tags">
        <span v-for="tag in getMatch.tags" :key="tag.index" class="tag">{{tag}}</span>
      </div>
      <div class="pet-description">
        <p>
          {{getMatch.description}}
        </p>
      </div>
      <router-link to="/pawassociationcontact" tag="a" class="paw-button primary">¡Quiero adoptar!</router-link>
    </div>

    <div class="hobbies" v-if="getMatch.race">
      <p>{{ displaySex }} {{getMatch.race}}</p>
      <ul>
        <li>
          <img  src="../assets/icons/cake.svg" alt="icono tarta"/>
          {{`${getMatch.age} años`}}
        </li>
        <li>
          <img src="../assets/icons/measure.svg" alt="icono metro"/>
          Tamaño {{displaySize}}
        </li>
        <li v-if="getMatch.personality_1">
          <img  src="../assets/icons/prize.svg" alt="icono premio"/>
          {{getMatch.personality_1}}</li>
        <li v-if="getMatch.personality_2">
          <img src="../assets/icons/prize.svg" alt="icono premio"/>
          {{getMatch.personality_2}}</li>
        <li v-if="getMatch.personality_joke">
          <img src="../assets/icons/prize.svg" alt="icono premio"/>
          {{getMatch.personality_joke}}</li>
      </ul>
    </div>

    <div class="media" v-if="getMatch.images.length > 2">
      <img v-for="image in getMatch.images.slice(1, 4)" :key="image.index" class="pet-img" :src="image" alt=""/>
      <div class="view-more">
        <img src="../assets/icons/camera.svg" alt="icono cámara"/>
        <span v-if="getMatch.images.length > 4">ver más</span>
      </div>
    </div>

    <div class="questions" v-if="getMatch.association">
      <p>¿Tienes alguna duda sobre {{getMatch.name}}?</p>
      <router-link to="" tag="a" class="paw-button secondary">Pregunta a la asociación</router-link>
    </div>

    <div class="association" v-if="getMatch.association">
      <img :src="getMatch.association && getMatch.association.logo" :alt="getMatch.association.name" />
      <div class="association-info">
        <span class="name">{{getMatch.association.name}}</span>
        <span class="subtitle">{{getMatch.association.description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import PawProfileImage from '@/components/PawProfileImage.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'pawResultCard',
  components: {
    PawProfileImage
  },
  computed: {
    ...mapGetters({
      getMatch: 'match/getMatch'
    }),
    displaySex () {
      if (this.getMatch.size === 'H') return 'Hembra'
      if (this.getMatch.size === 'M') return 'Macho'
      return ''
    },
    displaySize () {
      const size = {
        P: 'pequeño',
        M: 'mediano',
        G: 'grande'
      }
      return size[this.getMatch.size]
    }
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
    font-size: 14px;
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
