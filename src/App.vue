<template>
  <router-view />
  <Spinner v-if="isLoading" />
</template>
<script setup lang="ts">
import { useStore } from "vuex";
import Spinner from "./components/core/Spinner.vue";
import { computed } from "vue";
const store = useStore();
const isLoading = computed(() => store.getters["loadingStore/isLoading"]);
</script>
