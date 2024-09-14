<template>
  <div>
    <div class="a">aaa</div>
    <div class="a b">aaa bbb</div>
    <div class="c">ccc</div>
    <div>ddd</div>
  </div>

  <div class="father">
    <div class="son son-1">son-1</div>
    <div class="son son-2">son-2</div>
    <div class="son son-3">son-3</div>
  </div>
</template>

<style scoped>
div {
  border-right: 10px solid blue;
}

div[class] {
  border-left: 10px solid green;
}

div[class="a"] {
  background: yellow;
}

div[class~="a"] {
  color: red;
}

.father .son {
  border-left: 10px solid green;
}
</style>
