<template>
  <div class="page-container">
    <div v-if="isLoading">
      <Spinner />
    </div>
    <template v-else>
      <UserItem v-if="user" :user="user"></UserItem>

      <div class="actions">
        <button class="btn-back" @click="router.back()">Back</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { AxiosInstance } from "axios";
import { inject, onMounted, ref } from "vue";
import { IUser } from "@/types";
import router from "@/router";
import UserItem from "@/components/users/UserItem.vue";
import Spinner from "@/components/core/Spinner.vue";

const $axios = inject("$axios") as AxiosInstance;
const route = useRoute();

const isLoading = ref(false);
const user = ref<IUser | null>(null);

onMounted(async () => {
  const id = +route?.params?.id;
  if (!id) {
    return router.push("/not-found");
  }
  try {
    isLoading.value = true;
    const res = await $axios.get(`/users/${id}`);
    user.value = res.data;
  } catch (error) {
    // handle error
  } finally {
    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped>
.user {
  max-width: 500px;
  margin: auto;
}
.actions {
  text-align: center;
  padding-top: 1rem;
}
</style>
