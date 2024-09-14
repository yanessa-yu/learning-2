<template>
  <div class="margin-collapse">
    <div class="box box-a"></div>
    <div style="overflow: hidden">
      <div class="box box-b"></div>
    </div>
  </div>

  <div v-for="x in 7" class="demo" :class="'demo-' + x" :key="x">
    {{ x }}:
    <div class="father-box">
      <div class="son-box" v-for="i in 20" :key="'son' + i"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
$px20: 20px;

.margin-collapse {
  .box {
    width: $px20;
    height: $px20;
    background-color: blue;
    margin: $px20 0;
  }
}

.father-box {
  width: 60px;
  background-color: orange;

  .son-box {
    width: 20px;
    height: 20px;
    background-color: green;
    border: 1px solid red;
    float: left;
  }
}

.demo {
  margin: 20px;
}

.demo-1 {
  .father-box {
    overflow: auto;
  }
}

.demo-2 {
  .father-box {
    display: table-cell;
  }
}

.demo-3 {
  .father-box {
    display: inline-block;
  }
}

.demo-4 {
  .father-box {
    display: flow-root;
  }
}

.demo-5 {
  .father-box {
    contain: content;
  }
}

.demo-6 {
  .father-box {
    contain: layout;
  }
}

.demo-7 {
  .father-box {
    contain: paint;
  }
}
</style>
