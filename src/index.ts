import { createApp } from "vue"
import App from "./App.vue"
import Router from "./router/index"
import "element-plus/dist/index.css"
import Store from "./vuex"
import { startQiankun } from "./qiankun/qiankun"

const app = createApp(App)
app.use(Router)
app.use(Store)
startQiankun()

app.mount("#app-1")
