import mitt from "mitt"
import Store from "../vuex"

const emitter = mitt()

emitter.on("setUserName", (e) => {
  console.log("mitt test", e)

  interface PersonModuleType {
    age: number
  }
  interface StateType {
    personModule?: PersonModuleType
  }
  let state: StateType = Store?.state
  console.log(Store)
  Store?.dispatch("setName", e)
})

export default emitter
