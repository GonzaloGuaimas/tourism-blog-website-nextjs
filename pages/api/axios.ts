import axios, { AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
    // baseURL: 'http://localhost:3000/api',
    baseURL: 'https://www.freetourargentina.com/api',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
  }
  
  const axiosInstance = axios.create(axiosConfig)
  axiosInstance.defaults.headers.common['Authorization'] = 'AuthFromInstance'

  export default axiosInstance