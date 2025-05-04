<template>
  <header>
    <RouterLink to="/" class="logo-link">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="logo-icon" />
        <span>DashBoard</span>
      </div>
    </RouterLink>

    <div class="hamburger-wrapper">
      <label for="hamburger">
        <input type="checkbox" id="hamburger" v-model="showMenu" />
        <div class="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </label>
    </div>
    <nav class="menu_nav" :hidden="!showMenu">
      <ul>
        <li v-for="item in menuList" :key="item.key">
          <RouterLink
            :to="item.link"
            exact-active-class="active"
            @click="showMenu = false"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { IMenu } from "@/types";
import { ref } from "vue";

const menuList = ref<IMenu[]>([
  {
    key: "users",
    link: "/",
    name: "Users",
  },
  {
    key: "contact",
    link: "/contact",
    name: "Contact",
  },
]);

const showMenu = ref(false);
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $main;
  padding: 0 2rem;
  height: $header-height;
  width: 100%;

  .logo-link {
    text-decoration: none;
  }

  .logo {
    display: flex;
    align-items: center;
    img {
      flex-shrink: 0;
      width: 3rem;
      height: auto;
      object-fit: cover;
      border-radius: 2rem;
    }
    span {
      display: inline-block;
      font-size: 1.2rem;
      color: $white;
    }
  }

  nav {
    position: fixed;
    width: 100%;
    height: calc(100vh - $header-height);
    top: 4rem;
    left: 0;
    z-index: 1;
    padding: 1rem;
    background: $main;
    overflow-y: auto;
    ul {
      list-style: none;
      text-align: center;
      li {
        &:not(:last-child) {
          margin-bottom: 1rem;
        }
        a {
          text-decoration: none;
          font-size: 1.2rem;
          color: $color-light;
          cursor: pointer;
          &:hover {
            color: $white;
          }

          &.active {
            color: $white;
          }
        }
      }
    }
  }

  .hamburger-wrapper {
    display: block;
    user-select: none;
    input {
      display: none;
    }
    .hamburger {
      cursor: pointer;
      div {
        width: 20px;
        height: 3px;
        background: $white;
        transition: transform 0.2s;
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }
  }

  #hamburger:checked ~ .hamburger {
    div:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    div:nth-child(2) {
      visibility: hidden;
    }
    div:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  @include responsive("small") {
    .hamburger-wrapper {
      display: none;
    }
    nav {
      position: unset;
      display: block !important;
      height: auto;
      width: max-content;
      padding: 0;
      ul {
        display: flex;
        align-items: center;
        gap: 2rem;
        li {
          &:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
