<template>
  <div class="base-table">
    <table>
      <thead>
        <tr>
          <th v-for="(header, indexHeader) in fields" :key="indexHeader">
            {{ header.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, indexItem) in items"
          :key="indexItem"
          @click="$emit('rowClick', item)"
        >
          <template v-for="(header, indexHeader) in fields" :key="indexHeader">
            <td v-if="$slots[header.key]">
              <slot :name="header.key" :row="item"></slot>
            </td>
            <td v-else>
              {{ getValueDeepKey(item, header.key) }}
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { IField } from "@/types/table";
import { getValueDeepKey } from "@/utils";
import { PropType, defineProps } from "vue";

defineProps({
  fields: {
    type: Array as PropType<IField[]>,
    required: true,
    default() {
      return [];
    },
  },
  items: {
    type: Array as PropType<any[]>,
    required: true,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss" scoped>
.base-table {
  overflow-x: auto;
}

table {
  border-collapse: collapse;
  width: 100%;
}

thead tr th {
  background-color: $background-heavy;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: $background-light2;
}

tbody tr:hover {
  background: $background-light3;
}
</style>
