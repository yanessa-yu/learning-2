<template>
  <div class="page">
    <div class="father-box">
      我是父组件
      <div class="son-box"></div>
    </div>
    <VueCSSDeepSon></VueCSSDeepSon>
  </div>
</template>

<script setup lang="ts">
import VueCSSDeepSon from "./VueCSSDeepSon.vue"
</script>

<style scoped>
.page .father-box {
  color: black;
}

.page .son-box {
  background-color: green;
}

.page::v-deep .son-box {
  background-color: yellow;
}

.page::v-deep(.son-box) {
  font-size: 2em;
}

.page:deep(.son-box) {
  color: red;
}
</style>
