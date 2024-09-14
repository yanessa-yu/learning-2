<template>
  <div>
    <span class="title">yanessa的学习网站</span>
    <el-button @click="clickCache">清除应用缓存</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from "element-plus"
import { qiankunCacheMap } from "../qiankun/qiankun"

const clickCache = () => {
  qiankunCacheMap.delete("vue3-element-admin")
  console.log(qiankunCacheMap.size)
}
</script>

<style scoped lang="scss">
.title {
  font-size: 17px;
  margin-left: 20px;
}
</style>
