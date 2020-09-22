<template>
  <swiper>
    <el-carousel indicator-position="none" :type="type" :interval="2000" height="100%">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <el-card class="card" :body-style="{ padding: '0px' }">
          <div class="coverImgUrl">
            <el-image :src="item.coverImgUrl" @load="load"></el-image>
            <div class="circle">
              <div class="el-icon-caret-right"></div>
            </div>
            <div class="playCount">
              <img class="icon-play" src="~assets/img/discover/tabRecomend/play.png" />
              <span class="count">{{item.playCount | transPlayCount}}</span>
            </div>
          </div>
          <div class="name">
            <span class="name-span">{{item.name}}</span>
          </div>
        </el-card>
      </el-carousel-item>
    </el-carousel>
  </swiper>
</template>

<script>
import Swiper from "components/content/swiper/Swiper";

import { mixin } from "common/mixin";
import { debouce } from "common/utils";

export default {
  name: "PlaylistSwiper",
  data() {
    return {
      arrow: "never",
      autoplay: true,
      timer : null
    };
  },
  mixins: [mixin],
  props: {
    banners: {
      type: Array,
    },
    type: {
      type: String,
    },
  },
  methods: {
    load() {
      this.timer = debouce(this.setLoading, 100, this.timer)
    },
    setLoading(){
      this.$emit("setLoading");
    }
  },
  components: {
    Swiper,
  },
};
</script>

<style scoped>
.el-carousel {
  height: calc(36vh);
}
.el-carousel__item {
  height: auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 5px #dddddd;
}
.card {
  width: 100%;
}
.name {
  font-size: 10px;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
}
.name-span {
  width: 90%;
  margin-bottom: 5px;
}
.coverImgUrl {
  position: relative;
}
.circle {
  background-color: white;
  position: absolute;
  height: 45px;
  width: 45px;
  right: 5px;
  bottom: 10px;
  border-radius: 25px;
  opacity: 0.7;
  text-align: center;
}
.el-icon-caret-right {
  font-size: 30px;
  color: red;
  line-height: 45px;
}
.playCount {
  position: absolute;
  top: 5px;
  right: 10px;
}
.icon-play {
  width: 13px;
  height: 13px;
  display: inline-block;
  vertical-align: middle;
}
.count {
  color: white;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
}
</style>
