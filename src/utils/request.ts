import request from "./axios"

const myRequest = (function () {
  let hasRequest = []
  const mem = {} //Map对象更合适
  return function (config) {
    const url = config.url
    if (mem[url]) {
      return Promise.resolve(mem[url])
    }
    if (hasRequest.indexOf(url) !== -1) {
      return Promise.reject({ mes: "请求已经提交" })
    }
    hasRequest.push(url)
    return request({
      ...config,
    }).then((res) => {
      hasRequest = hasRequest.filter((item) => {
        if (item !== url) {
          return item
        }
      })
      mem[url] = res
      return res
    })
  }
})()

interface ApiResponse<T> {
  code: number
  data: T
  message?: string
}

export { request as initRequest, myRequest as request, ApiResponse }
