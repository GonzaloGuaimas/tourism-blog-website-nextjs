import axios, { AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'https://www.freetourargentina.com/api',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    }
  }
  
  const axiosInstance = axios.create(axiosConfig)
  
  export default axiosInstance