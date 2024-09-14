<template>
  <!-- 实现垂直居中对齐 -->
  <div :class="'demo-' + x" class="demo-a" v-for="x in 1" :key="x">
    <div class="father-box">
      <div class="son-box">居</div>
    </div>
  </div>

  <div>
    <h3>行内居中对齐</h3>
    <div class="inline-block">
      <span>欢迎</span>
      <img
        src="https://q4.itc.cn/q_70/images03/20240405/39ec09deda3a41d79e03897b0fdf68a0.jpeg"
        alt=""
      />
      <span>光临！!！</span>
    </div>
  </div>

  <div :class="'demo-' + x" class="demo-b" v-for="x in 4" :key="x">
    <div class="father-box">
      <div class="son-box">内部块宽高不固定</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo-a {
  .father-box {
    width: 40px;
    height: 40px;
    background-color: aquamarine;
    margin: 10px 0;

    .son-box {
      width: 20px;
      height: 20px;
      background-color: green;
    }
  }
}

.demo-b {
  .father-box {
    width: 400px;
    height: 100px;
    background-color: aquamarine;
    margin: 10px 0;

    .son-box {
      background-color: green;
    }
  }
}

.demo-a.demo-1 {
  .father-box {
    position: relative;
  }

  .son-box {
    inset: 0;
    margin: auto;
    position: absolute;
  }
}

.inline-block {
  background-color: aquamarine;
  width: CALC(100%);

  img {
    width: 100px;
    vertical-align: middle;
  }
}

.demo-b.demo-1 {
  .father-box {
    position: relative;
  }

  .son-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: TRANSLATE(-50%, -50%);
  }
}

.demo-b.demo-2 {
  .father-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.demo-b.demo-3 {
  .father-box {
    display: grid;
    justify-content: center;
    align-items: center;
  }
}

.demo-b.demo-4 {
  .father-box {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
}
</style>
