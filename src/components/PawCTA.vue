<template>
  <section class="main">
    <div class="container">
      <p class="title">¿Te ayudamos a encontrar tu <br/> nuevo amigo peludo?</p>
      <div class="icons-group">
        <img src="../assets/icons/dog.svg" alt="Icono perro"/>
        <img src="../assets/icons/cat.svg" alt="Icono gato"/>
        <img src="../assets/icons/hamster.svg" alt="Icono hamster"/>
      </div>
      <p class="subtitle">Reconócelo, tienes tus cosas, tus rarezas, tus manías... Las mascotas también tienen su propia personalidad.</p>
      <router-link to="/pawonboarding" tag="a" class="paw-button primary">Encuentra mi mascota ideal</router-link>
    </div>
  </section>
</template>

<style scoped>
  section {
    text-align: center;
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 250px;
    margin-top: 1.5rem;
  }
  .main .subtitle {
    font-size: 16px;
    line-height: 24px;
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
  .main .paw-button {
    margin-bottom: 3rem;
  }
  .main .title {
    color: #E4643C;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }
  .icons-group {
    margin-bottom: 20px;
  }
  .icons-group img:not(:last-child) {
    margin-right: 5px;
  }
</style>
