<template>
  <div>{{ JSON.stringify(data) }}</div>
  <button @click="send">请求</button>
  <input v-model="userName"></input>
  <button @click="loginHandle">登录</button>
  <button @click="changePwdHandler">修改密码</button>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { getUserId, login, changePwd } from "../api/user"

const data = ref(null)
const send = () => {
  getUserId()
    .then((res) => {
      console.log(res)
      data.value = res
    })
    .catch((error) => {
      console.log(error)
    })
}

const userName = ref('')

const loginHandle = () =>  {
  const user = {
    user_name: userName.value,
  }
    login(user).then((res) => {
      const { code, message, data} = res
      if (code === 0) {
        const token = data.token
        localStorage.setItem('token', token as string)
      } else {
        console.log(message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const changePwdHandler = () => {
    changePwd().then((res) => {
      const { code, message, data} = res
      if (code === 0) {
        console.log(data)
      } else {
        console.log(message)
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
</script>
