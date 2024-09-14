<template>
  <div>子组件{{ props.count }}</div>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
  onActivated,
  onDeactivated,
} from "vue"
console.log("son setup")
onBeforeMount(() => {
  console.log("son beforeMount")
})
onMounted(() => {
  console.log("son mounted")
})

onBeforeUnmount(() => {
  console.log("son beforeUnmount")
})

onUnmounted(() => {
  console.log("son unmounted")
})

onBeforeUpdate(() => {
  console.log("son before update")
})

onUpdated(() => {
  console.log("son updated")
})

onActivated(() => {
  console.log("son activated")
})

onDeactivated(() => {
  console.log("son deactivated")
})

const props = defineProps({
  count: Number,
})
</script>
