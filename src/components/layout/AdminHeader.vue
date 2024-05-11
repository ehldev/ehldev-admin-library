<template>
  <header
    class="admin-header bg-white d-flex justify-content-between align-items-center main-shadow py-3 px-5"
  >
    <div class="d-flex">
      <button
        type="button"
        class="border-none bg-transparent p-0 mr-3 cursor-pointer"
        @click="changeSidebarStatus()"
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

      <slot name="content"></slot>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

import AdminSearch from '../common/AdminSearch'
import AdminToggleMenuIcon from '../icons/AdminToggleMenuIcon'

export default {
  name: "AdminHeader",
  components: {
    AdminSearch,
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
    changeSidebarStatus() {
      this.$store.commit('app/SET_SIDEBAR_STATUS', !this.showSidebar)
    }
  },
  computed: {
    ...mapGetters({
      showSidebar: 'app/getSidebarStatus'
    })
  }
};
</script>

<style lang="scss" scoped>
.admin-header {
  height: $header-height;
}
</style>