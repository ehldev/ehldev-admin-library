<template>
  <section class="admin-layout vh-100" :class="{ 'show-sidebar': showSidebar }">
    <div class="position-relative">
      <AdminSidebar :showSidebar="showSidebar" @hide="showSidebar = false" :navItems="navItems">
        <template slot="sidebar-header">
          <slot name="sidebar-header"> </slot>
        </template>
      </AdminSidebar>

      <div
        class="overlay"
        @click="showSidebar = false"
        v-if="showSidebar"
      ></div>
    </div>

    <main class="main" :class="{ 'show-sidebar': showSidebar }">
      <section class="content">
        <slot name="main"></slot>
      </section>
    </main>
  </section>
</template>

<script>
import AdminSidebar from "./AdminSidebar";

export default {
  data() {
    return {
      showSidebar: true,
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
        ? (this.showSidebar = false)
        : (this.showSidebar = true);

      window.addEventListener("resize", () => {
        screen.width < 1024
          ? (this.showSidebar = false)
          : (this.showSidebar = true);
      });
    },
  },
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
    padding: 24px;
  }

  .overlay {
    display: block;
    background-color: rgba($admin-dark, 0.5);
    position: fixed;
    top: $header-height;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s;

    @media (min-width: 992px) {
      display: none;
    }
  }
}
</style>