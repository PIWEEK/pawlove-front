<template>
  <header>
    <button>
      <img src="../assets/icons/menu.svg"/>
    </button>
    <router-link to="/">
      Pawlove
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'PawHeader'
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
a {
  color: #4A4A4A;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}
header {
  height: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 4rem;
}
</style>
