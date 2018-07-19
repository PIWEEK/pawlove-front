<template>
  <section class="main">
    <div class="container">
      <p>Reconócelo, tienes tus cosas, tus <br/> rarezas, tus manías...</p>
      <div class="icons-group">
        <img src="../assets/icons/dog.svg" alt="Icono perro"/>
        <img src="../assets/icons/cat.svg" alt="Icono gato"/>
        <img src="../assets/icons/hamster.svg" alt="Icono hamster"/>
      </div>
      <p>Las mascotas también tienen su <br/> propia personalidad.</p>
      <hr/>
      <p class="title">¿Te ayudamos a encontrar tu <br/> nuevo amigo peludo?</p>
      <router-link to="/pawonboarding" tag="a" class="paw-button primary">Encuentra mi mascota ideal</router-link>
    </div>
  </section>
</template>

<style scoped>
  section {
    text-align: center;
  }
  p {
    margin-bottom: 1rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 250px;
  }
  .main p {
    font-size: 16px;
    line-height: 24px;
  }
  .main hr {
    margin: 0 4rem 2.5rem;
    border: 1px solid #E4643C;
  }
  .main .paw-button {
    margin-bottom: 4rem;
  }
  .main .title {
    color: #E4643C;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
  }
  .icons-group {
    margin-bottom: 15px;
  }
  .icons-group img:not(:last-child) {
    margin-right: 5px;
  }
</style>
