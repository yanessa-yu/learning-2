import { createStore } from "vuex"

// 创建一个新的 store 实例

interface State {
  id: number
  name: string
  age: number
}

const personModule = {
  state() {
    return {
      id: 2,
      name: "jason",
      age: 29,
    }
  },
  mutations: {
    setId(state: State, value: number) {
      state.id = value
    },
    setName(state: State, value: string) {
      state.name = value
    },
    setAge(state: State, value: number) {
      state.age = value
    },
  },
  actions: {
    setId({ commit, state }, value) {
      commit("setId", value)
    },
    setName({ commit, state }, value) {
      commit("setName", value)
    },
    setAge({ commit, state }, value) {
      commit("setAge", value)
    },
  },
}
const Store = createStore({
  modules: {
    personModule,
  },
})

export default Store
