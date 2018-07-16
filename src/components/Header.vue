<template>
  <header>
    <router-link to="/">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaJkf4d44FoRZJpT22lL89QZu9itmLPWJPJhLjeCrBgZgzbOa">
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  align-items: center;
  background-color: black;
  display: flex;
  height: 5rem;
  padding: 0 1rem;
}
img {
  width: 4rem;
}
</style>
