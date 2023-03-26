import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
const defaultConfig = {
  timeout: 5000,
  baseURL: '',
}

class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  private static axiosInstance = axios.create(defaultConfig)

  // 请求拦截
  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, err => {
      return Promise.reject(err)
    })
  }

  // 响应拦截
  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, err => {
      return Promise.reject(err)
    })
  }

  /**
   * 封装请求
   */
  public async httpRequestGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    const res = await Http.axiosInstance.get(url, { params })
    return res.data
  }

  public async httpRequestPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    const res = await Http.axiosInstance.post(url, params)
    return res.data
  }
}

export const http = new Http()