<template>
  <swiper @click.native="changeArrow">
    <el-carousel :type="type" :interval="2000" height="150px" :arrow="arrow" :autoplay="autoplay">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
  </swiper>
</template>

<script>
import Swiper from "components/content/swiper/Swiper";

export default {
  name: "DiscoverSwiper",
  data() {
    return {
      arrow: "never",
      autoplay: true,
    };
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
  },
  props: {
    banners: {
      type: Array,
    },
    type: {
      type: String,
    },
  },
  components: {
    Swiper,
  },
};
</script>

<style scoped>
.el-image {
  width: 100%;
  height: 100%;
}
.el-carousel {
  border-radius: 10px;
}
</style>
