<template>
  <div ref="slotRef">
    <slot></slot>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue"
export default {
  setup(props, context) {
    let slotRef = ref(null)
    console.log(props, context, context.slots.default())
    onMounted(() => {
      nextTick(() => {
        console.log(slotRef.value)
      })
    })
    const getVnode = () => {
      console.log(slotRef.value)
    }
    return getVnode()
  },
}
</script>
