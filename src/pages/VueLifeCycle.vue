<template>
  <div>
    父组件 {{ count }} <button @click="changeCount">增加</button>
    <Son :count="count"></Son>
  </div>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  onActivated,
  onDeactivated,
  ref,
} from "vue"
import Son from "../components/Son.vue"
console.log("father setup")
onBeforeMount(() => {
  changeCount()
  console.log("father beforeMount")
})
onMounted(() => {
  changeCount()
  console.log("father mounted")
})

onBeforeUnmount(() => {
  console.log("father beforeUnmount")
})

onUnmounted(() => {
  console.log("father unmounted")
})

onBeforeUpdate(() => {
  console.log("father before update")
})

onUpdated(() => {
  console.log("father updated")
})

onActivated(() => {
  console.log("father activated")
})

onDeactivated(() => {
  console.log("father deactivated")
})

const count = ref(0)
const changeCount = () => {
  count.value += 1
  console.log("change count", count.value)
}
</script>
