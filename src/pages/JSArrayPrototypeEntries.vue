<template>
  <div class="page"></div>
</template>

<script setup lang="ts">
const arr: number[] = [1, 2, 3, 4, 5, 6, 7]
const iterator: IterableIterator<[number, number]> = arr.entries()
for (const iter of iterator) {
  console.log(iter)
}
while (true) {
  let result = iterator.next()
  console.log(result)
  if (result.done) break
  console.log(result.value)
}
</script>
