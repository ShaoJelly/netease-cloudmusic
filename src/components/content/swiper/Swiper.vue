<template>
  <div class="swiper">
    <el-carousel :interval="1000" height="150px">
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
    return {};
  },
  props: {
    banners: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.swiper{
  margin-top: 6px;
}
.el-image {
  width: 100%;
  height: 100%;
}
.el-carousel {
  border-radius: 10px;
}
</style>
