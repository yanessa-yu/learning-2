<template>
  <h3>qiankun手动加载微应用</h3>

  <div id="qiankun_container" ref="containerRef"></div>
</template>

<script setup lang="ts">
import { loadMicroApp } from "qiankun"
import { onActivated, onBeforeUnmount, onMounted, onUnmounted, ref } from "vue"

const containerRef = ref(null)
let microApp = null
onMounted(() => {
  console.log("qiankun component mount")
  microApp = loadMicroApp(
    {
      name: "vue-cli-demo",
      entry: "https://www.example.com:8080/",
      container: "#qiankun_container",
    },
    {
      sandbox: { strictStyleIsolation: true },
    },
  )
  console.log(microApp)
})

onActivated(() => {
  console.log(111222)
})

onBeforeUnmount(() => {
  console.log(1111, microApp)
  if (microApp) {
    microApp.unmount()
  }
})
</script>
