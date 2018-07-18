<template>
  <div class="profile">
    <div class="profile-img">
      <div class="img-container">
        <img :src="imgUrl" alt="" />
      </div>
      <a v-if="showFollowLink" href="" class="paw-link">seguir</a>
    </div>
    <div class="profile-title">
      <p class="pet-name">{{petName}}</p>
      <p class="pet-type">{{type}}</p> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'PawProfileImage',
  props: {
    imgUrl: String,
    showFollowLink: Boolean,
    petName: String,
    type: String
  }
}
</script>

<style scoped>
  .profile-img {
    position: relative;
    margin-bottom: 0.5rem;
  }
  .profile-img .img-container {
    width: 185px;
    height: 185px;
    border-radius: 50%;
    margin: auto;
    overflow: hidden;
  }
  .profile-img img {
    height: 100%;
  }
  .profile-title {
    text-align: center;
    margin-bottom: 1rem;
  }
  .pet-name {
    font-size: 18px;
    font-weight: bold;
  }
  .paw-link {
    position: absolute;
    top: 30px;
    right: 40px;
  }
</style>
