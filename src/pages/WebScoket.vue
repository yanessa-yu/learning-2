<template>
  <div>WebSocket Demo</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"

let webSocket = null
function connectWs() {
  webSocket = new WebSocket("wss://www.example.com")

  webSocket.addEventListener("open", function (event) {
    webSocket.send("Hello Server")
    startHeartbeat()
  })

  webSocket.addEventListener("message", function (event) {
    isConnect = true
    console.log("Message from server", event.data)
  })

  webSocket.addEventListener("close", () => {
    console.log("websocket close")
  })
  webSocket.addEventListener("error", function (event) {
    console.log("Websocket connect error", event)
  })
}

const heartbeatTime = 5 * 1000
const delayTime = 3 * 1000
const reconnectTime = 10 * 1000
let reconnectTimes = 3
let isConnect = false //状态是否链接中
function startHeartbeat() {
  setTimeout(() => {
    webSocket.send(JSON.stringify({ type: "ping" }))
    waitingServer()
  }, heartbeatTime)
}

function waitingServer() {
  isConnect = false
  setTimeout(() => {
    if (isConnect) {
      startHeartbeat()
      return
    }
    // 三秒内没有回应
    try {
      webSocket.close()
    } catch (error) {
      console.log(error)
    }
    reconnect()
  }, delayTime)
}

function reconnect() {
  console.log("reconnect websocket", reconnectTimes)
  connectWs()
  if (reconnectTimes > 0) {
    reconnectTimes -= 1
    if (isConnect === false) {
      setTimeout(() => {
        reconnect()
      }, reconnectTime)
    }
  }
}
onMounted(() => {
  connectWs()
})
onUnmounted(() => {
  webSocket.close()
})
</script>
