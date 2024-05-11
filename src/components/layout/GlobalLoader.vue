<template>
  <div class="global-loader d-flex flex-column justify-content-center align-items-center">
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>

    <p class="mt-2">Espere un momento por favor...</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.global-loader {
  background-color: white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #42d392;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }

  p {
    font-size: 16px;
    color: rgba($admin-dark, .9);
  }
}
</style>