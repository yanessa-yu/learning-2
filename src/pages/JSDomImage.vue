<script setup lang="ts">
import img from "../assets/11.jpg"
console.log(img)
fetch(img)
  .then((response) => {
    console.log(response)
    return response.blob()
  })
  .then((blob) => {
    console.log(blob)
  })
  .catch((err) => console.error(err))

function load(url) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = "text"
  xhr.onload = function () {
    let bstr = xhr.response
    let n = bstr.length
    console.log(n)
    let u8arr = new Uint8Array(n) // 新建一个8位的整数类型数组，用来存放ASCII编码的字符串
    while (n--) {
      //console.log(bstr[n])
      u8arr[n] = bstr.charCodeAt(n) // 转换编码后才使用charCodeAt 找到Unicode编码
    }
    console.log(u8arr)
  }

  xhr.open("GET", url, true)
  xhr.send("")
}
load(img)
</script>
