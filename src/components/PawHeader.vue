<template>
  <header>
    <button @click="openSideMenu">
      <img src="../assets/icons/menu.svg"/>
    </button>
    <router-link to="/" class="header-title">
      Pawlove
    </router-link>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PawHeader',
  methods: {
    ...mapActions({
      openSideMenu: 'common/openSideMenu'
    })
  }
}
</script>

<style scoped>
button {
  all: initial;
  height: 16px;
  width: 20px;
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
.header-title {
  color: #4A4A4A;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 5px;
}
header {
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
}
img {
  width: 4rem;
}
</style>
