<template>
  <el-config-provider :locale="zhCn">
    <Header class="header"> </Header>
    <nav class="left">
      <router-link to="/css/flex" class="link">CSS flex</router-link>
      <router-link to="/css/animate" class="link">CSS Animate</router-link>
      <router-link to="/css/bfc" class="link">CSS BFC</router-link>
      <router-link to="/css/clear/float" class="link"
        >CSS Clear Float</router-link
      >
      <router-link to="/css/center" class="link">CSS Center</router-link>
      <router-link to="/css/selectors" class="link">CSS Selectors</router-link>
      <router-link to="/css/height/equal/width" class="link"
        >CSS Height Equal Width</router-link
      >
      <router-link to="/axios" class="link">Axios</router-link>
      <router-link to="/websocket" class="link">WebSocket</router-link>

      <router-link to="/js/array/entries" class="link"
        >JS Array Entries</router-link
      >
      <router-link to="/js/array/sort" class="link">JS Array Sort</router-link>

      <router-link to="/js/proxy" class="link">JS Proxy</router-link>
      <router-link to="/js/dom/image" class="link">JS DOM Image</router-link>
      <router-link to="js/dom/select" class="link">JS DOM Select</router-link>
      <router-link to="/js/dom/canvas" class="link">JS DOM Canvas</router-link>
      <router-link to="/ts/type" class="link">TS type</router-link>
      <router-link to="/vue/css/deep" class="link"
        >Vue CSS Scopd :deep()</router-link
      >
      <router-link to="/vue/url/require" class="link"
        >Vue Url Require</router-link
      >
      <router-link to="/vue/life/cycle" class="link"
        >Vue Life Cycle</router-link
      >

      <router-link to="/vue/nextTick" class="link">Vue nextTick</router-link>

      <router-link to="/vue/router/hash/search" class="link"
        >Vue Router Hash Search</router-link
      >
      <router-link to="/el/table" class="link">ElTable</router-link>
      <router-link to="/qiankun" class="link">qiankun</router-link>
      <router-link to="/vue3-element-admin" class="link">qiankun2</router-link>
    </nav>
    <div class="right">
      <!--https://router.vuejs.org/zh/guide/advanced/router-view-slot.html -->
      <router-view v-slot="{ Component }" v-show="$route.name">
        <!-- <keep-alive> -->
        <custom-keep-alive>
          <component :is="Component" />
        </custom-keep-alive>
        <!-- </keep-alive> -->
      </router-view>
      <div v-show="!$route.name" id="qiankun_container"></div>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from "element-plus"
// 引入中文包
import zhCn from "element-plus/es/locale/lang/zh-cn"
import { RouterLink, RouterView } from "vue-router"
import CustomKeepAlive from "./components/CustomKeepAlive.vue"
import Header from "./layout/header.vue"
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
}

.left {
  width: 200px;
  height: CALC(100vh - 60px);
  float: left;
  border-right: 1px solid #ddd;
  padding-left: 30px;
  overflow-y: auto;
  padding-bottom: 50px;

  .link {
    display: block;
    color: #606266;
    text-decoration: none;
    padding: 5px 0;
  }
}

.right {
  box-sizing: border-box;
  padding: 0 20px;
  width: CALC(100vw - 260px);
  float: left;
  height: 100vh;
  overflow-y: auto;
}
</style>
