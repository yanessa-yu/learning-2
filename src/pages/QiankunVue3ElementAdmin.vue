<template>
  <div>{{ Store.state?.personModule.name }}</div>
  <div id="QianKunVue3ElementAdminContainer"></div>
</template>

<script setup lang="ts">
import { loadMicroApp } from "qiankun"
import Store from "../vuex"
import emitter from "../mitt"

import { onMounted } from "vue"

//

onMounted(() => {
  console.log("qiankun start")

  loadMicroApp(
    {
      name: "vue3-element-admin",
      entry: "https://www.ysg.com:3001/#/home",
      container: "#QianKunVue3ElementAdminContainer",
      props: {
        store: Store,
        eventBus: emitter,
      },
    },
    // {
    //   sandbox: { strictStyleIsolation: true },
    // },
  )
})
</script>
