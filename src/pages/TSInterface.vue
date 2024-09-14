<template>
  <div></div>
</template>

<script setup lang="ts">
interface Person {
  name: string
  age: number
  sex: string
}

let p1: Person = {
  name: "lily",
  age: 11,
  sex: "woman",
}
console.log(p1)

// 可索引的类型
interface Animate {
  [key: string]: string
}

let a1: Animate = {}
console.log(a1)
</script>
