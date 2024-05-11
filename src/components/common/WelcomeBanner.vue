<template>
  <div class="welcome-banner bg-light p-4 position-relative">
    <button
      type="button"
      class="icon bg-transparent border-none"
    >
      👋
    </button>

    <h1 class="mb-2">Bienvenido <span v-if="user">{{ `${user.name || null}` }}</span>!</h1>
    
    <slot name="description"></slot>

    <p class="message">
      <i
        >Estamos felices de ser tus aliados en el crecimiento de tu negocio.
        🚀</i
      >
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "auth/getCurrentUser",
      getSupportEmail: "app/getSupportEmail",
    }),
  },
};
</script>

<style lang="scss" scoped>
.welcome-banner {

  border-radius: 4px;
  .icon {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  p {
    font-size: 0.97em;
  }

  .message {
    color: #42d392;
    font-weight: bold;
  }
}
</style>