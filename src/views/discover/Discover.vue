<template>
  <div class="discover">
    <div class="discover-padding">
      <discover-nav-bar :placeholder="placeholder"></discover-nav-bar>
      <discover-scroll
        class="discover-scroll"
        ref="discoverScroll"
      >
        <discover-swiper :banners="banners"></discover-swiper>
        <discover-tab-control></discover-tab-control>
        <discover-popular-playlist :popularPlaylist="popularPlaylist"></discover-popular-playlist>
        <discover-new-song :new-song="newSong" @scrollRefresh="scrollRefresh"></discover-new-song>
      </discover-scroll>
      <discover-search :hotDetail="hotDetail" ref="discoverSearch"></discover-search>
    </div>
  </div>
</template>

<script>
import DiscoverNavBar from "./childComponents/DiscoverNavBar";
import DiscoverPopularPlaylist from "./childComponents/DiscoverPopularPlaylist";
import DiscoverNewSong from "./childComponents/DiscoverNewSong";
import DiscoverSearch from "./childComponents/DiscoverSearch";
import DiscoverTabControl from "./childComponents/DiscoverTabControl";

import DiscoverSwiper from "components/content/swiper/Swiper";
import DiscoverScroll from "components/content/scroll/Scroll";

import * as api from "network/api";

export default {
  name: "Discover",
  data() {
    return {
      banners: [],
      placeholder: "",
      newSong: [],
      hotDetail: [],
      popularPlaylist: [],
    };
  },
  components: {
    DiscoverNavBar,
    DiscoverSwiper,
    DiscoverTabControl,
    DiscoverScroll,
    DiscoverPopularPlaylist,
    DiscoverNewSong,
    DiscoverSearch,
  },
  methods: {
    //获取轮播图
    _getBanners() {
      api.getBanners().then((res) => {
        for (let i of res.data.banners) {
          this.banners.push(i.imageUrl);
        }
      });
    },
    //获取推荐歌单
    _getPopularPlaylist() {
      api.getPopularPlaylist().then((res) => {
        this.popularPlaylist = res.data.result;
      });
    },
    //获取新歌
    _getNewSong() {
      api.getNewSong().then((res) => {
        this.newSong = res.data.result;
      });
    },
    //获取搜索内容
    _getPlaceholder() {
      api.getPlaceholder().then((res) => {
        this.placeholder = res.data.data.showKeyword;
      });
    },
    //获取热搜榜
    _getHotDetail() {
      api.getHotDetail().then((res) => {
        let arr = [];
        let data = res.data.data;
        for (let i in data) {
          arr.push(data[i]);
          if ((i * 1 + 1) % 2 == 0 || i == data.length - 1) {
            this.hotDetail.push(arr);
            arr = [];
          }
        }
      });
      this.$nextTick(() => {
        this.$refs.discoverSearch.refresh();
      });
      // this.$refs.discoverSearch.$refs.scrollSearch.scroll.refresh()
    },
    //刷新获取到的高度
    scrollRefresh() {
      this.$refs.discoverScroll.scroll.refresh();
      this.$refs.discoverSearch.scrollRefresh();
    },
  },
  created() {
    this._getBanners();
    this._getPopularPlaylist();
    this._getNewSong();
    this._getPlaceholder();
    this._getHotDetail();
  },
};
</script>

<style scoped>
.discover-scroll {
  height: calc(100% - 93px);
}
.discover {
  height: 100vh;
  width: 100vw;
}
.discover-padding {
  margin: auto 8px;
  height: 100%;
}
</style>
