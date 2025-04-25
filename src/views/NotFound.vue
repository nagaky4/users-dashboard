<template>
  <div class="page-container not-found">
    <h1>NotFound</h1>

    <button class="btn-back" @click="router.push('/')">Back</button>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
</script>
<style lang="scss" scoped>
.not-found {
  text-align: center;
}
</style>
