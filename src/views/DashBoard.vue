<template>
  <div class="page-container">
    <Filter
      :sortByList="sortByList"
      v-model:searchText="searchText"
      v-model:sortBy="sortBy"
      v-model:isAsc="isAsc"
      @onSort="handleSort"
      @onSearch="handleSearch"
      placeholder="Search"
    ></Filter>
    <div v-if="isLoading">
      <Spinner />
    </div>
    <template v-else>
      <UserList :users="users" v-if="users.length" @userClicked="userClicked" />
      <h3 class="data-not-found" v-else>
        {{ noDataMessage }}
      </h3>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ISortBy, IUser } from "@/types";
import { AxiosInstance } from "axios";
import { inject, onMounted, ref } from "vue";
import UserList from "@/components/users/UserList.vue";
import Filter from "@/components/Filter.vue";

import { DATA_NOT_FOUND } from "@/constants/message";
import { useSortable } from "@/composables/sortable";
import Spinner from "@/components/core/Spinner.vue";
import router from "@/router";

const $axios = inject("$axios") as AxiosInstance;

const { initSortSearchFunction, sort, search } = useSortable();

const users = ref<IUser[]>([]);
const isLoading = ref(false);
const noDataMessage = ref(DATA_NOT_FOUND);

const sortByList = ref<ISortBy[]>([
  { text: "name", key: "name" },
  { text: "email", key: "email" },
  { text: "address", key: "address.city" },
]);
const sortBy = ref(sortByList.value[0].key);
const searchText = ref("");
const isAsc = ref(true);

onMounted(async () => {
  try {
    isLoading.value = true;
    const res = await $axios.get("/users");
    users.value = res.data;
    initSortSearchFunction(users.value);
    handleSort();
  } catch (error) {
    // handle error
  } finally {
    isLoading.value = false;
  }
});

const handleSearch = () => {
  users.value = search(sortBy.value, searchText.value);
};

const handleSort = () => {
  users.value = sort(sortBy.value, isAsc.value);
};

const userClicked = (user: IUser) => {
  router.push(`/users/${user.id}`);
};
</script>

<style lang="scss" scoped>
.data-not-found {
  text-align: center;
  color: $color-light;
  font-size: 1.6rem;

  @include responsive("small") {
    font-size: 2rem;
  }
}
</style>
