import Vue from 'vue'
import VueRouter from 'vue-router'
const Discover = () => import('views/discover/Discover')
const Video = () => import('views/video/Video')
const Profile = () => import('views/profile/Profile')
const Cloud = () => import('views/cloud/Cloud')
const Account = () => import('views/account/Account')


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/discover'
  },
  {
    path:'/discover',
    component:Discover
  },
  {
    path:'/video',
    component:Video
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/cloud',
    component:Cloud
  },
  {
    path:'/account',
    component:Account
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
