<template>
  <div class="">nextTick</div>
  <div>
    <div>{{ count }}</div>
    <div>{{ count2 }}</div>
  </div>
</template>

<script setup>
import { ref, watch, computed, nextTick, onMounted } from "vue"
const count = ref(0)

watch(count, (val) => {
  console.log(val)
})

const count2 = computed(() => {
  return count.value * 2
})

const changeCount1 = () => {
  nextTick(() => {
    count.value = 10 // 同步任务下的微任务
  })
  count.value = 20 // 同步任务下的微任务
}

const changeCount2 = () => {
  setTimeout(() => {
    // 宏任务
    nextTick(() => {
      // 当前宏任务下的微任务
      count.value = 100
    })
    count.value = 200 //对应的watchers也是当前宏任务下的微任务
    nextTick(() => {
      // 当前宏任务下的微任务
      count.value = 300
    })
  }, 0)
}

// 生成修改count值的方法


onMounted(() => {
  changeCount1()
  changeCount2()
})
</script>
