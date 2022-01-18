<template>
  <shell class="playlist">
    <playlist-nav-bar></playlist-nav-bar>
    <playlist-tab-control></playlist-tab-control>
    <scroll
      v-loading="loading"
      element-loading-background="white"
      ref="playlistScroll"
      class="playlist-scroll"
    >
      <playlist-swiper @setLoading="setLoading" :banners="banners" :type="type"></playlist-swiper>
      <playlist-recommend @scrollRefresh="scrollRefresh" :playlist="playlist"></playlist-recommend>
    </scroll>
  </shell>
</template>

<script>
import PlaylistNavBar from "./childComponents/PlaylistNavBar";
import PlaylistTabControl from "./childComponents/PlaylistTabControl";
import PlaylistSwiper from "./childComponents/PlaylistSwiper";
import PlaylistRecommend from "./childComponents/PlaylistRecommend";

import Scroll from "components/content/scroll/Scroll";
import Shell from "components/content/shell/Shell";

import * as api from "network/api";

export default {
  name: "Playlist",
  data() {
    return {
      banners: [],
      type: "card",
      playlist: [],
      loading: true,
    };
  },
  components: {
    PlaylistNavBar,
    PlaylistTabControl,
    Scroll,
    PlaylistSwiper,
    PlaylistRecommend,
    Shell,
  },
  created() {
    this._getPlaylist();
  },
  methods: {
    //获取推荐歌单
    _getPlaylist() {
      api.getPlaylist().then((res) => {
        let data = res.data.playlists;
        for (let i = 0; i < data.length; i++) {
          if (i < 3) {
            this.banners.push(data[i]);
          } else {
            this.playlist.push(data[i]);
          }
        }
      });
    },
    scrollRefresh() {
      this.$refs.playlistScroll.scroll.refresh();
    },
    setLoading() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.playlist{
  z-index: 12;
}
.playlist-scroll {
  height: calc(100% - 44px - 28px);
}
</style>
