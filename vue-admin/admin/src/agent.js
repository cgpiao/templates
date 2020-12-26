/*eslint no-unused-vars: "off"*/

import axios from 'axios'
import {LS_TOKEN} from "@/constants"
const requestBody = (resp) => resp.data

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

let instance = axios.create({
   baseURL: process.env.VUE_APP_HOST + process.env.VUE_APP_HOST_PREFIX,
   timeout: 5000,
   headers: {
      'Content-Type': 'application/json',
   }
})
instance.interceptors.request.use(config => {
   const token = localStorage.getItem(LS_TOKEN)
   if (token)
      config.headers['Authorization'] = token
   return config
})
instance.interceptors.response.use((response) => response, (error) => {
   if (error.response && error.response.status === 401) {
      localStorage.clear()
      if (location.pathname !== process.env.VUE_APP_PREFIX + '/login') {
         location.href = process.env.VUE_APP_PREFIX + '/login'
      }
   } else {
      throw error
   }
})

const auth = {
   login: (data = {}) => instance.post('/login', data).then(requestBody),
   logout: (data = {}) => instance.post('/logout', data).then(requestBody),
   resetpwd: (data = {}) => instance.post('/resetpwd', data).then(requestBody),
   getCaptcha: (data = {}) => instance.post('/getCaptcha', data).then(requestBody),
}

const common = {
   output: (url, data) => instance.post(url, data).then(requestBody),
   upload: (data) => instance.post('/upload', data).then(requestBody),
}

export default {
   common,
   auth
}
