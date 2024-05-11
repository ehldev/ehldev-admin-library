<template>
  <footer
    class="admin-footer text-center p-2 d-flex justify-content-between align-items-center"
  >
    <p>
      Una app de
      <a href="http://erickhl.com" target="_blank" class="link font-weight-bold"
        >@ehldev</a
      >
    </p>

    <p>© {{ currentYear }}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.admin-footer {
  background-color: $admin-light;

  p {
    font-size: 0.9em;
  }

  .link {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
