<template>
  <button type="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String
  }
}
</script>

<style scoped>
button {
  all: initial;
  background-color: black;
  color: white;
  padding: 1rem;
}
</style>
