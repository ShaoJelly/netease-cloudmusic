import Vue from 'vue'
import VueRouter from 'vue-router'
const Discover = () => import('views/discover/Discover')
const Video = () => import('views/video/Video')
const Profile = () => import('views/profile/Profile')
const Cloud = () => import('views/cloud/Cloud')
const Account = () => import('views/account/Account')
const Playlist = () => import('views/discover/tabControl/playlist/Playlist')
const Toplist = () => import('views/discover/tabControl/toplist/Toplist')
const Dj = () => import('views/discover/tabControl/dj/Dj')
const DjClassify = () => import('views/discover/tabControl/dj/childComponents/djClassify/DjClassify')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/discover'
  },
  {
    path: '/discover',
    component: Discover,
    children: [
      {
        path: 'playlist',
        component: Playlist
      },
      {
        path: 'toplist',
        component: Toplist
      },
      {
        path: 'dj',
        component: Dj,
        children: [
          {
            path: 'djclassify',
            name:'djclassify',
            component: DjClassify
          }
        ]
      }
    ]
  },
  {
    path: '/video',
    component: Video,

  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cloud',
    component: Cloud
  },
  {
    path: '/account',
    component: Account
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
