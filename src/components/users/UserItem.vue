<template>
  <div class="user" @click="$emit('userClicked', user)">
    <div class="user__top">
      <img
        :src="`https://avatar.iran.liara.run/public/${user.id}`"
        alt="avatar"
        loading="lazy"
      />
    </div>
    <div class="user__bottom">
      <div class="info">
        <p class="info__field">Name:</p>
        <p :title="user.name" class="info__value">{{ user.name }}</p>
      </div>
      <div class="info">
        <p class="info__field">Email:</p>
        <p class="info__value">
          <a :title="user.email" :href="`mailto:${user.email}`">
            {{ user.email }}</a
          >
        </p>
      </div>
      <div class="info">
        <p class="info__field">Phone:</p>
        <p class="info__value">
          <a :title="user.phone" :href="`tel:+${user.phone}`">
            {{ user.phone }}
          </a>
        </p>
      </div>
      <div class="info">
        <p class="info__field">Address:</p>
        <address :title="user.address.city" class="info__value">
          {{ user.address.city }}
        </address>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IUser } from "@/types/index";
import { PropType, defineProps } from "vue";

defineProps({
  user: {
    type: Object as PropType<IUser>,
    required: true,
    default() {
      return {};
    },
  },
});
</script>

<style lang="scss" scoped>
.user {
  border: 1px solid $color-light;
  box-shadow: 2px 1px 6px 0px $color-light;
  border-radius: 8px;
  background: $background-light;
  padding: 1rem;
  overflow: hidden;

  &__top {
    cursor: pointer;
    img {
      min-width: 100%;
      min-height: 12rem;
      width: 100%;
      height: auto;
      transform: scale(0.8);
      transition: all 0.2s;
      background-image: radial-gradient($background-heavy, transparent);
      border-radius: 50%;
      &:hover {
        transform: scale(1);
      }

      @include responsive("xs") {
        min-height: 10rem;
      }
      @include responsive("large") {
        min-height: 15rem;
      }
    }
  }
  &__bottom {
    font-size: 1.2rem;
    .info {
      display: flex;
      gap: 1rem;
      &__field {
        color: $color-light;
      }
      &__value {
        color: $color-bold;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
