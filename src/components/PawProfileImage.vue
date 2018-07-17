<template>
  <div class="profile-img">
    <div class="img">
      <img :src="imgUrl" alt="" />
    </div>
    <a v-if="showFollowLink" href="">seguir</a>
  </div>
</template>

<script>
export default {
  name: 'PawProfileImage',
  props: {
    imgUrl: String,
    showFollowLink: Boolean
  }
}
</script>
