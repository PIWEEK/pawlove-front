<template>
  <div>
    <div class="overlay"  :class="{open: isOpen}" @click="closeSideMenu"></div>
    <div class="menu" :class="{open: isOpen}">
      <button class="close-btn" @click="closeSideMenu">
        &times;
      </button>
      <div class="content">
        <div class="user-info">
          <img  class="photo" src="https://randomuser.me/api/portraits/women/47.jpg" />
          <div class="data">
            <span class="name">Yvonne Jones</span>
            <span class="email">yvn.jones78@example.com</span>
          </div>
        </div>
        <div class="actions">
          <a href="#">
            <img src="../assets/icons/profile.svg" />
            Mi perfil
          </a>
          <a href="#">
            <img src="../assets/icons/favourite.svg" />
            Mis favoritos
          </a>
          <a href="#">
            <img src="../assets/icons/settings.svg" />
            Configuración
          </a>
          <a href="#">
            <img src="../assets/icons/info.svg" />
            About Pawlove
          </a>
          <a href="#">
            <img src="../assets/icons/logout.svg" />
            Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PawSideMenu',
  computed: {
    ...mapGetters({
      isOpen: 'common/sideMenuIsOpen'
    })
  },
  methods: {
    ...mapActions({
      closeSideMenu: 'common/closeSideMenu'
    })
  }
}
</script>

<style scoped>
  .overlay.open {
    width: 100%;
    opacity: 0.8;
  }

  .overlay {
    background-color: #FFFFFF;
    height: 100%;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    transition: .3s ease-in-out opacity;
    width: 0;
    z-index: 100;
  }

  .menu.open {
    width: 80%;
  }

  .menu {
    background-color: #FFFFFF;
    box-shadow: 14px 0px 37px 1px rgba(0,0,0,0.17);
    display:flex;
    flex-direction: column;
    font-family: Cabin;
    justify-content: flex-start;
    height: 100%;
    left: 0;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    transition: .3s ease all;
    width: 0;
    z-index: 200;
  }

  .close-btn {
    font-size: 2.5rem;
    height: 3.5rem;
    width: 3.5rem;
    border: none;
    color: #a4a4a4;
    background-color: #fff;
    align-self: flex-end;
  }
  /* User info */
  .user-info {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 1rem;
  }
  .photo {
    border-radius: 50%;
    height: 4rem;
  }
  .data {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    line-height: 2rem;
  }
  .name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .email {
    color: #a4a4a4;
    font-size: 1rem;
    font-weight: 500;
  }

  /* Actions */
  .actions {
    border-top: 1px #f1f1f1 solid;
    margin-top: 2rem;
    padding-left: 1.2rem;
    font-seze: 1.3rem;
  }
  .actions a {
    color: #4a4a4a;
    display: block;
    margin-top: 2.4rem;
    width: 100%;
    text-decoration: none;
  }
  .actions a img {
    padding-right: .5rem;
  }
</style>
