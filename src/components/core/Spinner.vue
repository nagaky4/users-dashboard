<template>
  <div class="spinner">
    <img src="@/assets/images/loading.png" alt="..." />
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  width: 10rem;
  height: 10rem;
  margin: auto;

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
