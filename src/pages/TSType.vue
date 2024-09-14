<script setup lang="ts">
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n
  } else {
    return n()
  }
}
getName("abc")

//  类型别名作用于元组
type X = [string, number]
let x: X = ["a", 1]
console.log(x)

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

type D = Direction
let d: D = Direction.Up
console.log(d)

type P = {
  name: string
  age: number
}
let p: P = {
  name: "jason",
  age: 11,
}
console.log(p)

type People = {
  name: string
  age: number
}

type Woman = People & {
  childBearing: boolean
}

const woman: Woman = {
  name: "lily",
  age: 18,
  childBearing: true,
}
console.log(woman)

interface Point {
  x: number
  y: number
}

type PointCopy = {
  [key in keyof Point]: Point[key]
}

const point: PointCopy = {
  x: 0,
  y: 0,
}

console.log(point)

interface Foo {
  add(num: number): this
}

const foo: Foo = {
  add(num) {
    this.result = num
    return this
  },
}

console.log(foo.add(12))
</script>
