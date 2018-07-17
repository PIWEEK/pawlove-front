<template>
  <div id="app">
    <PawHeader />
    <div id="nav">
      <router-link to="/pawresultcard">Ficha</router-link> | 
      <router-link to="/contact">Contacto</router-link> | 
      <router-link to="/complete">Complete</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import PawHeader from '@/components/PawHeader.vue'

export default {
  name: 'app',
  components: {
    PawHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.paw-button {
  all: initial;
  background-color: black;
  color: white;
  padding: 1rem;
}
</style>
