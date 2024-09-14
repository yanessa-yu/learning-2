<template>
  <div>
    排序前
    <span v-for="item in arr" :key="item">{{ item }},</span>
  </div>
  <div>
    排序后
    <span v-for="item in newArr" :key="item">{{ item }},</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
const arr = [3, 1, 9, 2, 8, 0]
const newArr = arr.sort((a, b) => {
  // a比b大， 返回正数，a在b后面
  // a比b小， 返回负数，a在b前面
  return a - b
})

onMounted(() => {
  console.log("mounted")
})
</script>
