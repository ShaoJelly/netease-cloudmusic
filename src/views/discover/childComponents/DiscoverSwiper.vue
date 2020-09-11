<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <img :src="item.image">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem,
  },
  props:{
    banners:{
      type:Array
    }
  }
};
</script>

<style scoped>
</style>
