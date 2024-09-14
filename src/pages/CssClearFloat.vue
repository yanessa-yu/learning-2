<template>
  <!-- 高度塌陷，清除浮动 -->
  <div v-for="x in 2" :class="'demo-' + x" :key="x">
    {{ x }}:
    <div class="father-box">
      <div class="son-box" v-for="i in 10" :key="i"></div>
    </div>
    <div class="other-box"></div>
  </div>

  <div :class="'demo-' + 3">
    {{ 3 }}:
    <div class="father-box">
      <div class="son-box" v-for="i in 10" :key="i"></div>
      <div class="last-box"></div>
    </div>
    <div class="other-box"></div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
$px20: 20px;

.father-box {
  background-color: aquamarine;
  width: 50px;

  .son-box {
    background-color: green;
    width: $px20;
    height: $px20;
    float: left;
    border: 1px solid #fff;
  }
}

.other-box {
  width: 70px;
  height: 20px;
  background-color: blue;
}

.demo-1 {
  .father-box {
    overflow: auto;
  }
}

.demo-2 {
  .father-box::before,
  .father-box::after {
    content: "";
    display: block;
    clear: both;
  }
}

.demo-3 {
  .last-box {
    clear: both;
  }
}
</style>
