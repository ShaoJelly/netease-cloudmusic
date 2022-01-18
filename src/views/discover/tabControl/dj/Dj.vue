<template>
  <shell class="dj">
    <router-view></router-view>
    <dj-nav-bar></dj-nav-bar>
    <scroll v-loading="loading" class="dj-scroll">
      <dj-swiper @setLoading="setLoading" :banners="banners"> </dj-swiper>
      <dj-tab-control v-if="!loading"></dj-tab-control>
    </scroll>
  </shell>
</template>

<script>
import DjNavBar from "./childComponents/DjNavBar";
import DjSwiper from "./childComponents/DjSwiper";
import DjTabControl from './childComponents/DjTabControl'

import Scroll from "components/content/scroll/Scroll";
import Shell from "components/content/shell/Shell";

import * as api from "network/api";

export default {
  name: "Dj",
  data() {
    return {
      banners: [],
      loading: true,
    };
  },
  components: {
    DjNavBar,
    Scroll,
    Shell,
    DjSwiper,
    DjTabControl,
  },
  methods: {
    _banners() {
      api.getDjBanners().then((res) => {
        this.banners = res.data.data;
      });
    },
    setLoading() {
      this.loading = false;
    },
  },
  created() {
    this._banners();
  },
};
</script>

<style scoped>
.dj{
  z-index: 12;
}
.dj-scroll{
  height: calc(100% - 44px);
}
</style>
