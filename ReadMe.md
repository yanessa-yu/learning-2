# Axios封装

## axios请求接口

安装Axios
`pnpm install Axios`

引入
`import axios from 'axios'`

使用

```js
axios.get()
axios.post()
```

## Axios二次封装

基础封装部分：

- 基本全局配置： 如baseURL，超时时间等
- Token、密钥等：处于权限和安全考虑的密钥设置到请求头
- 响应的统一基本处理：主要针对错误的情况做全局统一处理
- 封装请求方法： 把对接口的请求封装为一个方法

1. 创建一个Axios实例

创建src/utils/request.ts

提供频繁提交
缓存数据
