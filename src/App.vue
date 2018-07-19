<template>
  <div id="app">
    <PawSideMenu />
    <div>
      <PawHeader />
      <router-view/>
    </div>
  </div>
</template>

<script>
import PawHeader from '@/components/PawHeader.vue'
import PawSideMenu from '@/components/PawSideMenu'

export default {
  name: 'app',
  components: {
    PawSideMenu,
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
* {
  box-sizing: border-box;
}
body {
  margin: 0 auto;
  max-width: 768px;
}
#app {
  background-color: #EDEDED;
  min-height: 100vh;
  height: 100%;
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
  display: block;
  font-family: 'Cabin', sans-serif;
  padding: 1.2rem;
  text-align: center;
  margin: auto;
}
.paw-button.primary {
  background-color: #E4643C;
  box-shadow: 2px 3px 4px 0px rgba(0,0,0,0.2);
  color: #ffffff;
}
.paw-button.secondary {
  background-color: #ffffff;
  color: #E4643C;
  border: 1px solid #E4643C;
}
.paw-title-primary {
  color: #E4643C;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
}
fieldset {
  border: none;
  padding: 0;
  margin: 0 0 1rem 0;
}
</style>
