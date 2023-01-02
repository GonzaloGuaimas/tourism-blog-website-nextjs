import axios, { AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
    // baseURL: 'http://localhost:3000/api',
    baseURL: 'https://tourism-blog-website-nextjs-three.vercel.app/api',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
  }
  
  const axiosInstance = axios.create(axiosConfig)

  export default axiosInstance