import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios"
import { useRouter } from "vue-router"
const router = useRouter()
// 配置中心
import globalConfig from "../config/global.config"

// 配置全局的基础配置
// baseURL，timeout，header，responseType， withCredentials等
// 后面的请求用instance来发
const instance: AxiosInstance = axios.create({
  baseURL: "https://www.ysg.com/",
  timeout: 3000 * 1000, //30s
  responseType: "json",
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  },
  withCredentials: true
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // token，密钥的设置
    const url = config.url
    const token = localStorage.getItem("token")
    if (globalConfig.whileListApi.indexOf(url) === -1 && token) {
      config.headers.token = token
    }
    // 密钥-secretId + 特殊算法
    //config.headers.secretId =  globalConfig.secretId + new Date().toString()

    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  },
)

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    // 响应的统一吹
    const status = res.data.code || 200
    const message = res.data.msg || "未知错误"
    if (status === 401) {
      alert("没有权限访问")
      router.push("/login")
    }

    if (status !== 200) {
      alert("错误码" + status + "  " + message)
      return Promise.reject(new Error(message))
    }
    return res.data
  },
  (error) => {
    // 真实项目，往往使用组件库的消息提示
    alert(error)
    return Promise.reject(new Error(error))
  },
)

export default instance
