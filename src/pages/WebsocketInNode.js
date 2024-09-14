const WebSocket = require("ws")
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // 只在当前进程中的后续连接中忽略证书验证

const client = new WebSocket("wss://www.example.com")

client.on("error", console.error)
client.on("open", function () {
  isConnect = true
  heartbeat()
})
// client.on("ping", heartbeat)
client.on("pong", function () {
  isConnect = true
  console.log("client websocket  received pong")
})
client.on("close", function clear() {
  clearTimeout(this.pingTimeout)
})

const heartbeatTime = 5 * 1000
const delayTime = 3 * 1000
const reconnectTime = 10 * 1000
const reconnectTimes = 3
let isConnect = false //状态是否链接中
function heartbeat(event) {
  setTimeout(() => {
    client.ping()
    waitingServer()
  }, heartbeatTime)
}

function waitingServer() {
  isConnect = false
  setTimeout(() => {
    if (isConnect) {
      heartbeat()
      return
    }
    // 三秒内没有回应
    try {
      client.close()
    } catch (error) {
      console.log(error)
    }
    reconnect()
  }, delayTime)
}

function reconnect() {
  console.log("reconnect websocket")
  client.reconnect
  if (reconnectTimes > 0) {
    reconnectTimes -= 1
    if (isConnect === false) {
      setTimeout(() => {
        reconnect()
      }, reconnectTime)
    }
  }
}
