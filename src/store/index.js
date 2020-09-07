import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recommendPlaylist:[],
    newSong:[],
    show:false,
    zIndex:-1,
    hotDetail:[]
  },
  mutations: {
    setPlaylist(state,playlist){
      state.recommendPlaylist = playlist
    },
    setNewSong(state,newsong){
      state.newSong = newsong
    },
    setHotDetail(state,data){
      let arr = []
      for(let i in data){
        arr.push(data[i])
        if (((i * 1 + 1) % 2) == 0 || i == data.length-1) {
          state.hotDetail.push(arr)
          arr = []
        }
      }
    },
    search(state){
      state.show = true
      state.zIndex = 100
    },
    cancel(state){
      state.show = false
      state.zIndex = -1
    }
  },
  actions: {
    
  },
  modules: {
  }
})
