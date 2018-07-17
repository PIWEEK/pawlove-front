<template>
  <div id="app">
    <PawHeader />
    <div id="nav">
      <router-link to="/pawresultcard">Ficha</router-link> | 
      <router-link to="/pawassociationcontact">Contacto</router-link> | 
      <router-link to="/pawconfirmation">Confirmación</router-link>
      <router-link to="/pawregister">Registro</router-link>
      <router-link to="/pawfeed">Feed</router-link>
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
@import url('https://fonts.googleapis.com/css?family=Cabin');
html {
  font-family: 'Cabin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
p {
  font-size: 12px;
  margin: 0;
}
img {
  max-width: 100%;
}
.paw-button {
  all: initial;
  background-color: #E4643C;
  box-shadow: 2px 3px 4px 0px rgba(0,0,0,0.2);
  border-radius: 8px;
  color: #ffffff;
  display: inline-block;
  font-family: 'Cabin', sans-serif;
  padding: 1rem;
}
</style>
