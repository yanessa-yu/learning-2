<template>
  <div class="square"></div>
</template>

<style scoped>
.square {
  width: 200px;
  background-color: green;
  position: relative;
}

.square::before {
  content: "";
  display: block;
  padding-bottom: 100%;
}
</style>
