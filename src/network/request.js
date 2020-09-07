import axios from 'axios'

const request = axios.create({
  baseURL:'https://api.mtnhao.com/',
  timeout:5000
})

export default request