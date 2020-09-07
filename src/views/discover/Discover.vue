<template>
  <div class="discover">
    <div class="discover-padding">
      <discover-nav-bar :placeholder="placeholder"></discover-nav-bar>
      <discover-scroll class="discover-scroll">
        <discover-swiper :items="banners"></discover-swiper>
        <discover-tab-control></discover-tab-control>
        <discover-tab-recommend></discover-tab-recommend>
        <discover-new-song></discover-new-song>
        <div style="height:20px"></div>
      </discover-scroll>
      <discover-search></discover-search>
    </div>
  </div>
</template>

<script>
import DiscoverNavBar from "./childComponents/DiscoverNavBar";
import DiscoverTabRecommend from "./childComponents/DiscoverTabRecommend";
import DiscoverNewSong from "./childComponents/DiscoverNewSong";
import DiscoverSearch from "./childComponents/DiscoverSearch";

import DiscoverSwiper from "components/content/swiper/Swiper";
import DiscoverTabControl from "components/content/tabControl/TabControl";
import DiscoverScroll from "components/content/scroll/Scroll";

import * as api from "network/api";

export default {
  name: "Discover",
  data() {
    return {
      banners: [],
      placeholder: "",
    };
  },
  components: {
    DiscoverNavBar,
    DiscoverSwiper,
    DiscoverTabControl,
    DiscoverScroll,
    DiscoverTabRecommend,
    DiscoverNewSong,
    DiscoverSearch,
  },
  methods: {
    _getBanners() {
      api.getBanners().then((res) => {
        for (let i of res.data.banners) {
          this.banners.push(i.imageUrl);
        }
      });
    },
    _getRecommendPlaylist() {
      api.getRecommendPlaylist().then((res) => {
        this.$store.commit("setPlaylist", res.data.result);
      });
    },
    _getNewSong() {
      api.getNewSong().then((res) => {
        this.$store.commit("setNewSong", res.data.result);
      });
    },
    _getPlaceholder() {
      api.getPlaceholder().then((res) => {
        this.placeholder = res.data.data.showKeyword;
      });
    },
    _getHotDetail() {
      api.getHotDetail().then((res) => {
        this.$store.commit("setHotDetail", res.data.data);
      });
    },
  },
  created() {
    this._getBanners();
    this._getRecommendPlaylist();
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
