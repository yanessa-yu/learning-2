<template>
  <div class="flashing-element"></div>
  <div>
    <!-- 生成一段html，可以输入文件-->
  </div>
  <div class="set-element-flicker"></div>
  <div class="father-box">
    <div
      class="test-box"
      :class="'test-box-' + i"
      v-for="i in 10"
      :key="i"
    ></div>
  </div>
</template>

<script setup>
function loop(list) {
  //
  let data1 = [1, 2, 3]
  let data2 = [4, 5, 6, 7]
  // 合并data1和data2数组
  let data3 = data1.concat(data2)
  console.log(data3)
  // 对data3数组去重复元素
  data3 = Array.from(new Set(data3))
  let obj = {
    a: { aa: 1, bb: 2 },
  }
  // js遍历一个对象的所有属性
}
</script>

<style scoped lang="scss">
@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.flashing-element {
  width: 10px;
  height: 10px;
  background-color: red;
  animation: blink 1s infinite;
}

.father-box {
  width: 500px;
}

.test-box {
  width: $px20;
  height: $px20;
  margin: 20px 0;
  animation-name: testBox;
  animation-duration: 3s;
}

@keyframes test-box {
  from {
    margin-left: 0;
    background-color: green;
  }

  to {
    margin-left: 100%;
    background-color: red;
  }
}

.test-box-1 {
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.test-box-2 {
  animation-fill-mode: backwards;
  animation-iteration-count: 1;
}

.test-box-3 {
  animation-fill-mode: both;
  animation-iteration-count: 1;
}

.test-box-4 {
  animation-direction: reverse;
  animation-iteration-count: infinite;
}

.test-box-5 {
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.test-box-6 {
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
}

.test-box-7 {
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
}

.text-box-8 {
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
}

.text-box-9 {
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
