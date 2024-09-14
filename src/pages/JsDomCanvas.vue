<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap">
    <canvas id="testId1" ref="canvas1" width="100" height="100"></canvas>
    <canvas id="testId2" ref="canvas2" width="100" height="100"></canvas>
    <canvas id="testId3" ref="canvas3" width="100" height="100"></canvas>
    <canvas id="testId4" ref="canvas4" width="100" height="100"></canvas>
    <canvas id="testId5" ref="canvas5" width="100" height="100"></canvas>
    <canvas id="testId6" ref="canvas6" width="100" height="100"></canvas>
    <canvas id="testId7" ref="canvas7" width="100" height="100"></canvas>

    <canvas id="testId11" ref="canvas11" width="100" height="100"></canvas>
    <canvas id="testId12" ref="canvas12" width="100" height="100"></canvas>
    <canvas id="testId13" ref="canvas13" width="100" height="100"></canvas>
    <canvas id="testId14" ref="canvas14" width="100" height="100"></canvas>
    <canvas id="testId15" ref="canvas15" width="100" height="100"></canvas>
    <canvas id="testId16" ref="canvas16" width="100" height="100"></canvas>
    <canvas id="testId17" ref="canvas17" width="100" height="100"></canvas>

    <canvas id="testId21" ref="canvas21" width="100" height="100"></canvas>
    <canvas ref="canvas31" width="100" height="100"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

// 绘制矩形
const canvas1 = ref(null)
const rest = () => {
  const ctx: CanvasRenderingContext2D = canvas1.value.getContext("2d")
  ctx.fillRect(10, 10, 20, 20)
  ctx.strokeRect(30, 30, 40, 40)

  ctx.fillRect(50, 50, 40, 40)
  ctx.clearRect(60, 60, 20, 20)
}

// 绘制直线
const canvas2 = ref(null)
const line = () => {
  const ctx: CanvasRenderingContext2D = canvas2.value.getContext("2d")
  ctx.beginPath()
  ctx.moveTo(10, 10)
  ctx.lineTo(20, 20)
  ctx.lineTo(10, 30)
  ctx.lineTo(20, 40)
  ctx.lineTo(10, 50)
  ctx.fill()

  ctx.beginPath()
  ctx.moveTo(90, 10)
  ctx.lineTo(80, 20)
  ctx.lineTo(90, 30)
  ctx.lineTo(80, 40)
  ctx.lineTo(90, 50)
  ctx.stroke()
}

// 绘制圆弧
// arc() 函数中表示角的单位是弧度，不是角度。角度与弧度的 js 表达式：弧度=(Math.PI/180)*角度。
const canvas3 = ref(null)
const arc = () => {
  const ctx: CanvasRenderingContext2D = canvas3.value.getContext("2d")
  ctx.arc(50, 50, 50, 0, (Math.PI / 180) * 180, false)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(50, 50, 40, 0, (Math.PI / 180) * 90, false)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(50, 50, 20, 0, (Math.PI / 180) * 360, false)
  ctx.fill()
}

// 绘制二次贝塞尔曲线
const canvas4 = ref(null)
const quadraticCurve = () => {
  const ctx: CanvasRenderingContext2D = canvas4.value.getContext("2d")
  ctx.beginPath()
  ctx.moveTo(10, 10)
  ctx.quadraticCurveTo(50, 50, 90, 10)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(10, 90)
  ctx.quadraticCurveTo(50, 50, 90, 90)
  ctx.fill()
}

// 绘制三次贝塞尔曲线
const canvas5 = ref(null)
const bezierCurve = () => {
  const ctx: CanvasRenderingContext2D = canvas5.value.getContext("2d")
  ctx.beginPath()
  ctx.moveTo(10, 30)
  ctx.bezierCurveTo(30, 0, 60, 60, 90, 30)
  ctx.stroke()
}

// path2D
const canvas6 = ref(null)
const path2DDemo = () => {
  const ctx: CanvasRenderingContext2D = canvas6.value.getContext("2d")
  const rectangle = new Path2D()
  rectangle.rect(10, 10, 30, 30)

  const circle = new Path2D()
  circle.arc(50, 50, 20, 0, (Math.PI / 180) * 360, false)

  ctx.stroke(rectangle)
  ctx.fill(circle)

  // 使用svg paths
  const p = new Path2D("M 70 70 h 20 v 20 h -20 Z")
  ctx.stroke(p)
}

// addPath
const canvas7 = ref(null)
const addPathDemo = () => {
  const ctx: CanvasRenderingContext2D = canvas7.value.getContext("2d")
  // Create first path and add a rectangle
  let p1 = new Path2D()
  p1.rect(0, 0, 20, 20)

  // Create second path and add a rectangle
  let p2 = new Path2D()
  p2.rect(0, 0, 40, 40)

  // Create transformation matrix that moves 200 points to the right
  let m = new DOMMatrix()
  m.a = 1
  m.b = 0
  m.c = 0
  m.d = 1
  m.e = 40 // 往右边
  m.f = 40 // 往下边

  // Add second path to the first path
  p1.addPath(p2, m)

  // Draw the first path
  ctx.fill(p1)
}

//  移动
const canvas11 = ref(null)
const translate = () => {
  const ctx: CanvasRenderingContext2D = canvas11.value.getContext("2d")
  ctx.save() //在做变形之前先保存状态是一个良好的习惯
  ctx.fillRect(0, 0, 50, 50)
  ctx.translate(10, 10)
  ctx.fillStyle = "red"
  ctx.fillRect(0, 0, 40, 40)
  ctx.restore()
}

const canvas12 = ref(null)
const rotate = () => {
  const ctx: CanvasRenderingContext2D = canvas12.value.getContext("2d")
  ctx.save() //在做变形之前先保存状态是一个良好的习惯
  ctx.fillRect(30, 30, 30, 30)

  ctx.rotate((Math.PI / 180) * 25) //旋转的是画布

  ctx.fillStyle = "red"
  ctx.fillRect(30, 30, 30, 30)
  ctx.restore() //还原画布
}

const canvas13 = ref(null)
const scale = () => {
  const ctx: CanvasRenderingContext2D = canvas13.value.getContext("2d")
  ctx.save()
  ctx.fillRect(50, 50, 50, 50)

  ctx.scale(0.5, 0.5)

  ctx.fillStyle = "red"
  ctx.fillRect(50, 50, 50, 50)
  ctx.restore()

  ctx.scale(0.25, 0.25)
  ctx.fillStyle = "green"
  ctx.fillRect(50, 50, 50, 50)
  ctx.restore()
}

const canvas14 = ref(null)
const transform1 = () => {
  const ctx: CanvasRenderingContext2D = canvas14.value.getContext("2d")
  ctx.save()
  ctx.strokeRect(0, 0, 20, 20)
  // 水平方向和垂直方向缩放设置为1
  ctx.transform(0.5, 0, 0, 0.5, 0, 0)
  ctx.fillStyle = "red"
  ctx.fillRect(0, 0, 20, 20)
  ctx.restore()
}

const canvas15 = ref(null)
const transform2 = () => {
  const ctx: CanvasRenderingContext2D = canvas15.value.getContext("2d")
  ctx.save()
  ctx.strokeRect(0, 0, 20, 20)

  // 垂直方向倾斜
  ctx.transform(1, 1, 0, 1, 0, 20)
  ctx.fillStyle = "green"
  ctx.fillRect(0, 0, 20, 20)
  ctx.restore()
}

const canvas16 = ref(null)
const transform3 = () => {
  const ctx: CanvasRenderingContext2D = canvas16.value.getContext("2d")
  ctx.save()
  ctx.strokeRect(0, 0, 20, 20)
  // 水平方向倾斜
  ctx.transform(1, 0, 1, 1, 20, 0)
  ctx.fillRect(0, 0, 20, 20)
  ctx.restore()
}

const canvas17 = ref(null)
const transform4 = () => {
  const ctx: CanvasRenderingContext2D = canvas17.value.getContext("2d")
  ctx.save()
  ctx.strokeRect(0, 0, 20, 20)
  // 水平方向移动
  ctx.transform(1, 0, 0, 1, 10, 10)
  ctx.fillStyle = "blue"
  ctx.fillRect(0, 0, 20, 20)
  ctx.restore()
}

const canvas21 = ref(null)
const fillText = () => {
  const ctx: CanvasRenderingContext2D = canvas21.value.getContext("2d")
  ctx.font = "18px serif" //默认10px
  ctx.fillText("yanessa", 20, 20)

  const text = ctx.measureText("yaness")
  console.log(text)
}

const canvas31 = ref(null)
let r = 0
const animate = () => {
  const ctx: CanvasRenderingContext2D = canvas31.value.getContext("2d")
  ctx.clearRect(0, 0, 100, 100) // 清除画布
  ctx.beginPath() // 确保在调用 clearRect()之后绘制新内容前调用beginPath()
  ctx.arc(50, 50, r, 0, (Math.PI / 180) * 360)
  ctx.closePath()
  ctx.fillStyle = "red"
  ctx.fill()
  if (r >= 50) r = 0
  r += 1
  console.log(r)
  window.requestAnimationFrame(animate)
}

onMounted(() => {
  rest()
  line()
  arc()
  quadraticCurve()
  bezierCurve()
  path2DDemo()
  addPathDemo()
  translate()
  rotate()
  scale()
  transform1()
  transform2()
  transform3()
  transform4()
  fillText()
  animate()
})
</script>

<style scoped lang="scss">
canvas {
  border: 1px solid;
}
</style>
