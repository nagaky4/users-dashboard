<template>
  <div class="base-filter">
    <div class="search">
      <BaseSearch v-model="searchText" :debounceTime="200" />
    </div>
    <div class="sort">
      <select name="filter" id="filter" v-model="sortBy">
        <option
          :value="option.key"
          v-for="option in sortByList"
          :key="option.key"
        >
          {{ option.text }}
        </option>
      </select>
      <button @click="toggleSort">
        <img
          src="@/assets/icons/arrow-up-active.svg"
          alt="asc"
          v-show="isAsc"
        />
        <img
          src="@/assets/icons/arrow-down-active.svg"
          alt="desc"
          v-show="!isAsc"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ISortBy } from "@/types";
import { defineModel, watch } from "vue";

import { PropType, defineProps, defineEmits } from "vue";
import BaseSearch from "./BaseSearch.vue";

const searchText = defineModel("searchText");
const sortBy = defineModel("sortBy");
const isAsc = defineModel("isAsc");

defineProps({
  sortByList: {
    type: Array as PropType<ISortBy[]>,
    required: true,
    default() {
      return [];
    },
  },
  placeholder: String,
});

const emits = defineEmits(["onSearch", "onSort"]);

const toggleSort = () => {
  isAsc.value = !isAsc.value;
  emitSort();
};

const emitSort = () => {
  emits("onSort", isAsc.value);
};

watch(sortBy, () => {
  emitSort();
});

watch(searchText, () => {
  emits("onSearch");
});
</script>

<style lang="scss" scoped>
.base-filter {
  @include responsive("small") {
    display: flex;
    gap: 1rem;

    .search {
      flex: 2;
    }
    .sort {
      flex: 1;
    }
  }

  .sort {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    select {
      height: 44px;
      flex: 1;
      padding: 8px;
      border-radius: 8px;
      color: $color-light;
      outline: none;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-self: center;
      height: max-content;
    }
  }
}
</style>
