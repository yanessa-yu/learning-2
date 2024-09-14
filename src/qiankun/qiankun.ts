import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
} from "qiankun"
import Store from "../vuex"
import emitter from "../mitt"

export const qiankunCacheMap = new Map()
console.log("注册微应用")
export const startQiankun = () => {
  registerMicroApps([
    {
      name: "vue3-element-admin",
      entry: "https://www.ysg.com:3001/#/home",
      container: "#qiankun_container",
      activeRule: "/#/vue3-element-admin",
      props: {
        qiankunCacheMap,
        store: Store,
        eventBus: emitter,
      },
    },
  ])

  addGlobalUncaughtErrorHandler((event: Event | string) => {
    console.error(event)
    const { message } = event as any
    console.log(message)
  })

  start()
}
