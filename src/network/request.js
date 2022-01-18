import axios from 'axios'

const request = axios.create({
  baseURL:'https://netease-cloud-music-api-4xrf4r81h-zoyopomusicapi.vercel.app/',
  timeout:5000
})

export default request