<template>
  <div>url上search部分和hash部分哪个在前</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
const route = useRoute()
console.log("vue route = ", route)
</script>
