<template>
  <div class="tab-control">
    <el-row>
      <el-col v-for="(item, index) in tab" :key="index" :offset="index > 0 ? 1 : 0">
        <img :src="item.img" class="image">
        <div class="title">
          <span style="width:100%">{{item.title}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      tab: [
        {
          title: "每日推荐",
          img: require("assets/img/discover/tabControl/recommend.png"),
        },
        {
          title: "歌单",
          img: require("assets/img/discover/tabControl/song_sheet.png"),
        },
        {
          title: "排行榜",
          img: require("assets/img/discover/tabControl/ranking_list.png"),
        },
        {
          title: "电台",
          img: require("assets/img/discover/tabControl/radio_station.png"),
        },
        {
          title: "直播",
          img: require("assets/img/discover/tabControl/live.png"),
        },
        {
          title: "火前留名",
          img: require("assets/img/discover/tabControl/hot.png"),
        },
        {
          title: "数字专辑",
          img: require("assets/img/discover/tabControl/album.png"),
        },
        {
          title: "唱聊",
          img: require("assets/img/discover/tabControl/singing.png"),
        },
        {
          title: "新说唱",
          img: require("assets/img/discover/tabControl/rap.png"),
        },
        {
          title: "线上演出",
          img: require("assets/img/discover/tabControl/show.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.tab-control {
  margin-top: 10px;
}
.image {
  width: 40px;
  height: 40px;
  display: block;
}
.title {
  text-align: center;
  font-size: 5px;
  padding-top: 5px;
}
.el-row {
  display: flex;
  overflow-x: auto;
}
.el-row::-webkit-scrollbar {
  display: none;
}
</style>
