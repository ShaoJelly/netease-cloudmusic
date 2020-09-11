<template>
  <div @click="changeArrow" class="swiper">
    <el-carousel :interval="1000" height="150px" :arrow="arrow" :autoplay="autoplay">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <el-image :src="item"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      arrow: "never",
      autoplay: true,
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
  },
};
</script>

<style scoped>
.swiper {
  margin-top: 6px;
  z-index: 10;
}
.el-image {
  width: 100%;
  height: 100%;
}
.el-carousel {
  border-radius: 10px;
}
</style>
