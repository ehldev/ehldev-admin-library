<template>
  <section class="admin-layout vh-100" :class="{ 'show-sidebar': showSidebar }">
    <div class="position-relative">
      <AdminSidebar :navItems="navItems">
        <template slot="sidebar-header">
          <slot name="sidebar-header"> </slot>
        </template>
      </AdminSidebar>
    </div>

    <main class="main" :class="{ 'show-sidebar': showSidebar }">
      <slot name="header"></slot>
      
      <section class="content">
        <slot name="main"></slot>
      </section>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

import AdminSidebar from "./AdminSidebar";

export default {
  data() {
    return {
    };
  },
  mounted() {
    this.calcResize();
  },
  props: {
    navItems: Array
  },
  components: {
    AdminSidebar
  },
  methods: {
    calcResize() {
      screen.width < 1024
        ? this.changeSidebarStatus(false)
        : this.changeSidebarStatus(true);

      window.addEventListener("resize", () => {
        screen.width < 1024
          ? this.changeSidebarStatus(false)
          : this.changeSidebarStatus(true);
      });
    },
    changeSidebarStatus(value) {
      this.$store.commit('app/SET_SIDEBAR_STATUS', value)
    }
  },
  computed: {
    ...mapGetters({
      showSidebar: 'app/getSidebarStatus'
    })
  }
};
</script>

<style lang="scss">
.admin-layout {
  background-color: $admin-light;

  .main {
    @media (min-width: $md) {
      width: calc(100% - 50px);
      margin-left: auto;

      transition: all 0.3s;

      &.show-sidebar {
        width: calc(100% - 250px);
      }
    }
  }

  .content {
    height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 24px 24px 0 24px;
  }
}
</style>