<template>
  <div class="user-detail">
    <div class="user-detail__header">
      <img
        class="user-detail__avatar"
        :src="`https://i.pravatar.cc/150?img=${user.id}`"
        alt="User Avatar"
        loading="lazy"
      />
      <div class="user-detail__basic">
        <h2 class="user-detail__name">{{ user.name }}</h2>
        <span class="user-detail__role">Administrator</span>
        <p class="user-detail__email">{{ user.email }}</p>
        <p class="user-detail__phone">{{ user.phone }}</p>
      </div>
      <div class="user-detail__actions">
        <button class="btn btn--secondary" @click="router.back()">Back</button>
      </div>
    </div>

    <div class="user-detail__sections">
      <div class="user-detail__section">
        <h3>Personal Info</h3>
        <ul>
          <li><strong>Username:</strong> {{ user.username }}</li>
          <li>
            <strong>Address:</strong>
            {{ user.address.street }},
            {{ user.address.city }}
          </li>
        </ul>
      </div>

      <div class="user-detail__section">
        <h3>Company Info</h3>
        <ul>
          <li><strong>Company:</strong> {{ user.company.name }}</li>
          <li><strong>Website:</strong> {{ user.website }}</li>
          <li><strong>Catch Phrase:</strong> {{ user.company.catchPhrase }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IUser } from "@/types/index";
import { PropType, defineProps } from "vue";
import { useRouter } from "vue-router";

defineProps({
  user: {
    type: Object as PropType<IUser>,
    required: true,
    default() {
      return {};
    },
  },
});

const router = useRouter();
</script>
<style lang="scss" scoped>
.user-detail {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: $white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  font-family: "Segoe UI", sans-serif;
  color: #333;

  &__header {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid $background-light3;
    padding-bottom: 1.5rem;
  }

  &__avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  }

  &__basic {
    flex-grow: 1;
    min-width: 200px;

    & > h2 {
      font-size: 1.5rem;
      margin-bottom: 0.2rem;
    }

    &__role {
      display: inline-block;
      background: #e0f2ff;
      color: $blue;
      padding: 0.25rem 0.5rem;
      border-radius: 6px;
      font-size: 0.8rem;
      margin-bottom: 0.5rem;
    }

    & > p {
      margin: 0.2rem 0;
      font-size: 0.95rem;
      color: #666;
    }
  }

  &__sections {
    margin-top: 2rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  &__section {
    background: #fafafa;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    border: 1px solid $background-light3;

    & h3 {
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
      color: #111;
    }

    & ul {
      list-style: none;
      padding: 0;
      margin: 0;

      & li {
        margin: 0.5rem 0;
        font-size: 0.95rem;
        line-height: 1.4;
      }

      & strong {
        font-weight: 600;
      }
    }
  }
}
</style>
