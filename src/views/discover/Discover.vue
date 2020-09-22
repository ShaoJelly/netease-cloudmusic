<template>
  <div class="discover">
    <div class="discover-margin">
      <router-view></router-view>
      <discover-nav-bar :placeholder="placeholder"></discover-nav-bar>
      <discover-scroll
        v-loading="loading"
        element-loading-spinner="el-icon-loading"
        element-loading-background="white"
        element-loading-text="加载中"
        class="discover-scroll"
        ref="discoverScroll"
        :pullUpLoad="pullUpLoad"
        :pullDownRefresh="pullDownRefresh"
        @pullingDownRefresh="pullingDownRefresh"
      >
        <loading v-show="isShow"></loading>
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
import DiscoverSwiper from "./childComponents/DiscoverSwiper";

import DiscoverScroll from "components/content/scroll/Scroll";
import Loading from "components/common/loading/Loading";

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
      pullUpLoad: true,
      pullDownRefresh: true,
      isShow: false,
      loading: true,
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
    Loading,
  },
  methods: {
    //获取轮播图
    _getBanners() {
      api.getBanners().then((res) => {
        this.banners = [];
        for (let i of res.data.banners) {
          this.banners.push(i.imageUrl);
        }
        this.cancelLoading();
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
        this.hotDetail = [];
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
    },
    //刷新获取到的高度
    scrollRefresh() {
      this.$refs.discoverScroll.scroll.refresh();
      this.$refs.discoverSearch.scrollRefresh();
    },
    //下拉刷新
    pullingDownRefresh() {
      // this.banners = [];
      // this.newSong = [];
      // this.hotDetail = [];
      // this.popularPlaylist = [];
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.$refs.discoverScroll._finishPullDown();
        this._getBanners();
        this._getPopularPlaylist();
        this._getNewSong();
        this._getPlaceholder();
        this._getHotDetail();
      }, 2000);
    },
    //取消加载
    cancelLoading() {
      this.loading = false;
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
.discover-margin {
  margin: auto 8px;
  height: 100%;
}
</style>
