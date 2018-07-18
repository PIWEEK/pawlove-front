<template>
  <div id="app">
    <PawHeader />
    <div id="nav">
      <router-link to="/pawresultcard">Ficha</router-link> | 
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
  background-color: #EDEDED;
}
* {
  box-sizing: border-box;
}
p {
  font-size: 14px;
  margin: 0;
}
img {
  max-width: 100%;
}
.paw-button {
  all: initial;
  border-radius: 8px;
  box-shadow: 2px 3px 4px 0px rgba(0,0,0,0.2);
  display: block;
  font-family: 'Cabin', sans-serif;
  padding: 1.2rem;
  text-align: center;
  margin: auto;
  width: 310px;
}
.paw-button.primary {
  background-color: #E4643C;
  color: #ffffff;
}
.paw-button.secondary {
  background-color: #ffffff;
  color: #E4643C;
  border: 1px solid #E4643C;
}
.paw-link {
    color: #2197D8;
  }
.paw-title-primary {
  color: #E4643C;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
}
</style>
