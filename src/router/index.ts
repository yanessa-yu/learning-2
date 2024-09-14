import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../pages/home.vue"
import CssFlex from "../pages/CssFlex.vue"
import CssAnimate from "../pages/CssAnimate.vue"
import CssBFC from "../pages/CssBFC.vue"
import CssClearFloat from "../pages/CssClearFloat.vue"
import CssCenter from "../pages/CssCenter.vue"
import CssSelectors from "../pages/CssSelectors.vue"
import CssHeightEqualWidth from "../pages/CssHeightEqualWidth.vue"
import Axios from "../pages/Axios.vue"
import JSArrayPrototypeEntries from "../pages/JSArrayPrototypeEntries.vue"
import JSArrayPrototypeSort from "../pages/JSArrayPrototypeSort.vue"
import JSDOMSelect from "../pages/JSDOMSelect.vue"
import VueCSSDeep from "../pages/VueCSSDeep.vue"
import VueUrlRequire from "../pages/VueUrlRequire.vue"
import JSDomImage from "../pages/JSDomImage.vue"
// import ElTableDemo from "../pages/ElTableDemo.vue"
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/css/flex",
    component: CssFlex,
  },
  {
    path: "/css/animate",
    component: CssAnimate,
  },
  {
    path: "/css/bfc",
    component: CssBFC,
  },
  {
    path: "/css/clear/float",
    component: CssClearFloat,
  },
  {
    path: "/css/center",
    component: CssCenter,
  },
  {
    path: "/css/selectors",
    component: CssSelectors,
  },
  {
    path: "/css/height/equal/width",
    component: CssHeightEqualWidth,
  },
  {
    path: "/axios",
    component: Axios,
  },
  {
    path: "/websocket",
    component: () => import("../pages/WebScoket.vue"),
  },

  {
    path: "/js/array/entries",
    component: JSArrayPrototypeEntries,
  },
  {
    path: "/js/array/sort",
    component: JSArrayPrototypeSort,
  },
  {
    path: "/js/dom/select",
    component: JSDOMSelect,
  },
  {
    path: "/js/dom/image",
    component: JSDomImage,
  },
  {
    path: "/js/dom/canvas",
    component: () => import("../pages/JsDomCanvas.vue"),
  },
  {
    path: "/js/proxy",
    component: () => import("../pages/JSProxy.vue"),
  },
  {
    path: "/ts/type",
    component: () => import("../pages/TSType.vue"),
  },
  {
    path: "/vue/css/deep",
    component: VueCSSDeep,
  },
  {
    path: "/vue/url/require",
    component: VueUrlRequire,
  },
  {
    path: "/vue/life/cycle",
    component: () => import("../pages/VueLifeCycle.vue"),
  },
  {
    path: "/vue/nextTick",
    component: () => import("../pages/VueNexttick.vue"),
  },
  {
    path: "/vue/router/hash/search",
    component: () => import("../pages/VueRouterHashSearch.vue"),
  },
  {
    path: "/el/table",
    component: () => import("../pages/ElTableDemo.vue"), //异步的方式获取组件，可以减小首页加载的js文件体积
  },
  {
    path: "/qiankun",
    name: "Qiankun",
    component: () => import("../pages/qiankun.vue"),
  },
  // {
  //   path: "/vue3-element-admin/:page",
  //   component: () => import("../pages/QiankunVue3ElementAdmin.vue"),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
