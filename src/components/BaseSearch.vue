<template>
  <div class="base-search">
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
    />
    <button class="search-icon">
      <img src="@/assets/icons/search.svg" alt="search" />
    </button>
  </div>
</template>
<script lang="ts" setup>
import { debounce } from "@/utils";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
  placeholder: String,
  debounceTime: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["update:modelValue"]);

const onInput = debounce(props.debounceTime, (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target?.value;
  emits("update:modelValue", value);
});
</script>

<style lang="scss" scoped>
.base-search {
  width: 100%;
  width: 100%;
  position: relative;

  input {
    border: 1px solid $color-light;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px 40px 8px 8px;
    outline: none;
    color: $color-light;
  }
  .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: auto;
    right: 10px;
    cursor: pointer;
    outline: none;
    border: 0;
    background: 0;
  }
  margin-bottom: 1rem;
}
</style>
