import { request,initRequest, ApiResponse } from "../utils/request"

type Obj = {
  [index: string]: unknown
}

export const getUserId = (params?: object) => {
  return request({
    url: "users/getUserId",
    method: "get",
    params: {
      ...params,
    },
  })
}

export const login = (data?: object): Promise<ApiResponse<Obj>> => {
  return initRequest({
    url: "users/login",
    method: 'post',
    data
  })
}

export const changePwd = (data?: object): Promise<ApiResponse<Obj>> => {
  return initRequest({
    url: "users/changePwd",
    method: 'post',
    data
  })
}
