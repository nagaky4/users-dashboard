<template>
  <Teleport to="body">
    <div class="spinner-wrapper">
      <div class="spinner">
        <img src="@/assets/images/loading.png" alt="..." />
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.spinner-wrapper {
  position: fixed;
  inset: 0;
  background: $background-spinner;
  z-index: 100;
}
.spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;

  img {
    width: 100%;
    height: 100%;
    animation: rotate infinite 2s 0s;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
    0% {
      transform: rotate(0);
    }
  }
}
</style>
