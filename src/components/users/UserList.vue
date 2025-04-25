<template>
  <div class="users">
    <UserItem
      v-for="user in users"
      :key="user.id"
      :user="user"
      @userClicked="$emit('userClicked', $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import UserItem from "./UserItem.vue";
import { IUser } from "@/types/index";
import { PropType, defineProps } from "vue";

defineProps({
  users: {
    type: Array as PropType<IUser[]>,
    required: true,
    default() {
      return [];
    },
  },
});
</script>
<style lang="scss" scoped>
.users {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @include responsive("xs") {
    grid-template-columns: repeat(2, 1fr);
  }

  @include responsive("small") {
    grid-template-columns: repeat(3, 1fr);
  }

  @include responsive("medium") {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
