<template>
  <div class="playlist-recommend">
    <el-row v-for="(row,index) in cPlaylist" :key="index">
      <el-col :span="7" v-for="(col, inde) in row" :key="inde" :offset="inde > 0 ? 1 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img v-lazy="col.coverImgUrl" @load="scrollRefresh" />
          <span>{{col.name}}</span>
          <div class="playCount">
            <img class="icon-play" src="~assets/img/discover/tabRecomend/play.png" />
            <span class="count">{{col.playCount | transPlayCount}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { debouce } from "common/utils";
import { mixin } from "common/mixin";

export default {
  name: "PlaylistRecommend",
  data() {
    return {
      timer: null,
      cPlaylist: [],
    };
  },
  mixins: [mixin],
  props: {
    playlist: {
      type: Array,
    },
  },
  watch: {
    playlist(newVal, oldVal) {
      newVal && this.saveList(newVal,this.cPlaylist);
    },
  },
  methods: {
    //防抖scroll高度
    scrollRefresh() {
      this.timer = debouce(this.refresh, 100, this.timer);
    },
    refresh() {
      this.$emit("scrollRefresh");
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 5px;
}
span {
  font-size: 11px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.el-row {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.el-card {
  width: auto;
}
.playCount {
  position: absolute;
  top: 0;
  right: 2px;
}
.icon-play {
  width: 11px;
  height: 11px;
  display: inline-block;
  vertical-align: middle;
}
.count {
  color: white;
  font-size: 11px;
  display: inline-block;
  vertical-align: middle;
}
</style>
