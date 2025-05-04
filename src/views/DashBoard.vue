<template>
  <div class="page-container">
    <h1>Users</h1>
    <BaseFilter
      :sortByList="sortByList"
      v-model:searchText="searchText"
      v-model:sortBy="sortBy"
      v-model:isAsc="isAsc"
      @onSort="handleSort"
      @onSearch="handleSearch"
      placeholder="Search"
    ></BaseFilter>

    <div v-if="users.length" class="users-container">
      <BaseTable
        :fields="userFields"
        :items="users"
        @rowClick="userClicked"
        class="users-container--table"
      />
      <UserList
        :users="users"
        @userClicked="userClicked"
        class="users-container--list"
      />
    </div>
    <h3 v-else class="data-not-found">
      {{ noDataMessage }}
    </h3>
  </div>
</template>
<script setup lang="ts">
import { ISortBy, IUser } from "@/types";
import { onMounted, ref } from "vue";
import UserList from "@/components/users/UserList.vue";
import BaseFilter from "@/components/BaseFilter.vue";
import { DATA_NOT_FOUND } from "@/constants/message";
import { useSortable } from "@/composables/sortable";
import router from "@/router";
import { getUsers } from "@/services/users";
import BaseTable from "@/components/BaseTable.vue";
import { IField } from "@/types/table";
import { useLoading } from "@/composables/loading";

const { initSortSearchFunction, sort, search } = useSortable();
const { showLoading, hideLoading } = useLoading();

const userFields: Array<IField> = [
  {
    key: "name",
    title: "Name",
  },
  {
    key: "email",
    title: "Email",
  },
  {
    key: "phone",
    title: "Phone",
  },
  {
    key: "address.city",
    title: "Address",
  },
];

const users = ref<IUser[]>([]);
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
    showLoading();
    const res = await getUsers();
    users.value = res.data;
    initSortSearchFunction(users.value);
    handleSort();
  } catch (error: any) {
    // handle error
    console.log("error", error.response.message || error);
  } finally {
    hideLoading();
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
.users-container {
  &--table {
    display: none;
    @include responsive("small") {
      display: block;
    }
  }
  &--list {
    @include responsive("small") {
      display: none;
    }
  }
}
</style>
