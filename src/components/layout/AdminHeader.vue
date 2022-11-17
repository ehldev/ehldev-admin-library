<template>
  <header
    class="admin-header bg-white d-flex justify-content-between align-items-center main-shadow py-3 px-5"
  >
    <div class="d-flex">
      <button
        type="button"
        class="border-none bg-transparent p-0 mr-3 cursor-pointer"
        @click="$emit('toggleSidebar')"
      >
        <AdminToggleMenuIcon />
      </button>

      <AdminSearch placeholder="Buscar módulo" />
    </div>

    <div class="d-flex align-items-center">
      <button
        type="button"
        class="admin-button admin-button-option d-none d-md-block m-0"
        @click="fullScreen()"
      >
        <i class="ri-fullscreen-line"></i>
      </button>

      <AdminDropdown>
        <template slot="toggle">
          <button
            type="button"
            class="dropdown-button cursor-pointer main-shadow d-flex align-items-center border-none px-2"
          >
            <!-- <i class="ri-user-line"></i> -->
            <img
              src="http://nazox.vuejs-light.themesdesign.in/img/avatar-4.e0ab315a.jpg"
              alt=""
              class="rounded-circle mr-2"
            />

            <span class="font-weight-bold text-uppercase">Erick</span>
          </button>
        </template>

        <template slot="content">
          <a href="" class="admin-dropdown-item">Ver detalles</a>
          <a href="" class="admin-dropdown-item">Editar</a>
          <a href="" class="admin-dropdown-item">Eliminar</a>
        </template>
      </AdminDropdown>
    </div>
  </header>
</template>

<script>
import AdminSearch from '../common/AdminSearch'
import AdminDropdown from '../common/AdminDropdown'
import AdminToggleMenuIcon from '../icons/AdminToggleMenuIcon'

export default {
  name: "AdminHeader",
  components: {
    AdminSearch,
    AdminDropdown,
    AdminToggleMenuIcon
  },
  methods: {
    fullScreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.body.requestFullscreen();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-header {
  height: $header-height;

  .user-dropdown {
    .image {
      width: 35px;
    }
  }

  .username {
    font-size: 1rem;
  }

  .dropdown-button {
    background-color: white;
    color: $admin-gray;
    // width: 40px;
    // height: 40px;
    // border: 1px solid rgba($admin-dark, 0.7);

    i {
      font-size: 1.8em;
    }

    img {
      width: 37px;
      height: 37px;
    }
  }
}
</style>