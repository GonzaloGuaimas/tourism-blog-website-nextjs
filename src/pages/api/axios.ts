import axios, { AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
    // baseURL: 'http://localhost:3000/api',
    baseURL: 'https://www.freetourargentina.com/api',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  }
  
  const axiosInstance = axios.create(axiosConfig)

  export default axiosInstance