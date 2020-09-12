<template>
  <tab-recommend>
    <up slot="up">
      <b slot="up-left">人气歌单推荐</b>
      <button style="outline:medium;" slot="up-right">查看更多</button>
    </up>
    <playlist-scroll
      class="playlist-scroll"
      slot="down"
      :scrollX="scrollX"
      :scrollY="scrollY"
      :contentWidth="contentWidth"
    >
      <down class="down">
        <playlist-item v-for="(item,index) in popularPlaylist" :key="index">
          <el-card :body-style="getBodyStyle()">
            <img class="icon_pic" v-lazy="item.picUrl" :key="index">
            <span class="text_name">{{item.name}}</span>
            <div class="play">
              <span class="text_playCount">{{item.playCount | transPlayCount}}</span>
              <img class="icon_play" src="~assets/img/discover/tabRecomend/play.png" />
            </div>
          </el-card>
        </playlist-item>
      </down>
    </playlist-scroll>
  </tab-recommend>
</template>

<script>
import TabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import Down from "components/content/tabRecommend/Down";
import PlaylistItem from "components/content/tabRecommend/playlist/PlaylistItem";
import PlaylistScroll from "components/content/scroll/Scroll";

import { mixin } from "common/mixin";
import { debouce } from "common/utils";

export default {
  name: "DiscoverTabRecommend",
  data() {
    return {
      scrollX: true,
      scrollY: false,
      contentWidth: 0,
      top: 10,
      right: 10,
      botton: 0,
      left: 0,
    };
  },
  props: {
    popularPlaylist: {
      type: Array
    },
  },
  components: {
    TabRecommend,
    Up,
    Down,
    PlaylistItem,
    PlaylistScroll,
  },
  mixins: [mixin],
  watch: {
    popularPlaylist(newVal, oldVal){
      newVal && this._setContentWidth(newVal)
    }
  },
  methods: {
    _setContentWidth(newVal){
      this.contentWidth = newVal.length * 84
    }
  },
};
</script>

<style scoped>
b {
  font-size: 15px;
}
.playlist-scroll {
  width: 100%;
}
.down {
  display: flex;
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
