<template>
  <div class="down-playlist">
    <div class="item" v-for="(item,index) in playlist" :key="index">
      <el-card :body-style="getBodyStyle()">
        <el-image class="icon_pic" :src="item.picUrl" lazy></el-image>
        <span class="text_name">{{item.name}}</span>
        <div class="play">
          <span class="text_playCount">{{item.playCount | transPlayCount}}</span>
          <img class="icon_play" src="~assets/img/discover/tabRecomend/play.png"/>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mixin } from "common/mixin";

export default {
  name: "DownPlaylist",
  data() {
    return {
      top: 10,
      right: 10,
      botton: 0,
      left: 0,
    };
  },
  props:{
    playlist:{
      type:Array
    }
  },
  mixins: [mixin],
};
</script>

<style scoped>
.down-playlist {
  display: flex;
  overflow-x: auto;
}
.down-playlist::-webkit-scrollbar {
  display: none;
}
.el-card .icon_pic {
  width: 100%;
  border-radius: 5px;
}
.el-card .text_name {
  font-size: 10px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.play {
  position: absolute;
  top: 14px;
  right: 14px;
  display: flex;
  flex-direction: row-reverse;
}
.icon_play {
  width: 17%;
}
.text_playCount {
  font-size: 11px;
  color: #eeeeee;
}
</style>
