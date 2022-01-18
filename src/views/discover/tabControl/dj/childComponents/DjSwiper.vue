<template>
  <swiper @click.native="changeArrow">
    <el-carousel
      :interval="2000"
      height="150px"
      :arrow="arrow"
      :autoplay="autoplay"
    >
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <el-image :src="item.pic" @load="load" />
      </el-carousel-item>
    </el-carousel>
  </swiper>
</template>

<script>
import Swiper from "components/content/swiper/Swiper";

import { debouce } from "common/utils";

export default {
  name: "DjSwiper",
  data() {
    return {
      arrow: "never",
      autoplay: true,
      timer: null,
    };
  },
  props: {
    banners: {
      type: Array,
    },
  },
  methods: {
    changeArrow() {
      if (this.arrow == "always") {
        this.arrow = "never";
        this.autoplay = true;
      } else {
        this.arrow = "always";
        this.autoplay = false;
      }
    },
    load() {
      this.timer = debouce(this.setLoading, 100, this.timer);
    },
    setLoading() {
      this.$emit("setLoading");
    },
  },
  components: {
    Swiper,
  },
};
</script>

<style scoped>
.el-image {
  height: 100%;
}
.el-carousel {
  border-radius: 10px;
}
</style>
