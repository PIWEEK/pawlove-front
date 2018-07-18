<template>
  <div class="paw-tips">
    <img src="../assets/img/black-cat.png" alt="" />
    <div class="content">
      <p class="tip-title">{{title}}</p>
      <p class="tip-description">{{description}}</p>
    </div>
  </div>
</template>

<script>
const tips = [
  {
    title: 'Los gatos negros son super-gatos',
    description: 'La piel oscura les hace más resistentes al virus de inmunodeficiencia felina y a otras infecciones. Además, les protege de los daños del sol.',
    imageUrl: '../../assets/img/black-cat.png'
  },
  {
    title: 'Los gatos negros son super-gatos',
    description: 'La piel oscura les hace más resistentes al virus de inmunodeficiencia felina y a otras infecciones. Además, les protege de los daños del sol.',
    imageUrl: '../../assets/img/black-cat.png'
  },
  {
    title: 'Los gatos negros son super-gatos',
    description: 'La piel oscura les hace más resistentes al virus de inmunodeficiencia felina y a otras infecciones. Además, les protege de los daños del sol.',
    imageUrl: '../../assets/img/black-cat.png'
  }
]

export default {
  data () {
    return {
      ...tips[Math.floor(Math.random() * 3)]
    }
  },
  name: 'PawSuccessCard',
  props: {
    text: String
  }
}
</script>

<style scoped>
  .paw-tips {
    display: flex;
    background-color: #ffffff;
    border-radius: 4px;
  }
  .paw-tips img {
    border-radius: 4px 0 0 4px;
  }
  .content {
    margin: 1.25rem 1rem;
  }
  .tip-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
  .tip-description {
    font-size: 14px;
  }
</style>