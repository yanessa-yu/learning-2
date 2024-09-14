<template>
  <div v-for="x in 10" :class="'demo-' + x" :key="x">
    {{ x }}:
    <div class="father-box" style="width: 230px">
      <div v-for="i in 10" class="son-box" :key="i"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const a = "aacc"
console.log(a)
</script>

<style scoped lang="scss">
$px20: 20px;

.father-box {
  width: 500px;

  background: #ddd;
  display: flex;
  height: 50px;
  border: 1px solid #000;
}

.son-box {
  width: $px20;
  height: $px20;
  background: green;
  border: 1px solid red;
}

.demo-1 {
  .father-box {
    justify-content: space-between;
    align-items: center;
  }

  .son-box {
    flex-grow: 0;
    flex-shrink: 1;
  }
}

.demo-2 {
  .father-box {
    justify-content: space-around;
  }
}

.demo-3 {
  .father-box {
    justify-content: end;
  }
}

.demo-4 {
  .father-box {
    align-items: baseline;
  }
}

.demo-5 {
  .son-box:first-of-type {
    align-self: flex-end;
  }
}

.demo-6 {
  .son-box {
    flex-grow: 1;
  }
}

.demo-7 {
  .father-box {
    width: 100px;
  }

  .son-box {
    flex-shrink: 1;
  }
}

.demo-8 {
  .son-box:first-of-type {
    flex-basis: 40px;
    background-color: blue;
  }
}
</style>
