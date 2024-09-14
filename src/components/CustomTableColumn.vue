<template>
  <el-table-column :prop="prop" :label="label" v-bind="$attrs">
    <template v-if="$slots.default" v-slot:default="scoped">
      <slot v-bind="scoped"> </slot>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
import { ElTableColumn } from "element-plus"
defineOptions({
  inheritAttrs: false, //自定义继承attribute
})
defineProps({
  prop: String,
  label: String,
})
</script>
