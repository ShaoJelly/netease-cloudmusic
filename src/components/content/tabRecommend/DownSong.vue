<template>
  <div class="down-song">
    <div class="item" v-for="(item,index) in newSongItem" :key="index">
      <div class="item-inner" v-for="(item_inner,index_inner) in item" :key="index_inner">
        <div class="icon_song">
          <el-image :src="item_inner.picUrl" lazy></el-image>
        </div>
        <div class="text">
          <span class="song_name">{{item_inner.name}}</span>
          <span>&nbsp;-&nbsp;</span>
          <span
            class="artists"
            v-for="(artist,index) in artists(item_inner)"
            :key="index"
          >{{artistsFilter(artist,index)}}</span>
        </div>
        <div class="icon_play">
          <img src="~assets/img/discover/tabRecomend/red_play.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownSong",
  data() {
    return {};
  },
  computed: {
    newSong() {
      return this.$store.state.newSong;
    },
    newSongItem() {
      let a = 1;
      let o = [];
      let i = [];
      this.newSong.forEach((element) => {
        i.push(element);
        if (i.length == 3 || this.newSong.length == a) {
          o.push(i);
          i = [];
        }
        a++;
      });
      return o;
    },
    artists() {
      return (data) => {
        return data.song.artists;
      };
    },
    artistsFilter() {
      return (data, index) => {
        if (index != 0) {
          return "/" + data.name;
        }
        return data.name;
      };
    },
  },
};
</script>

<style scoped>
.down-song {
  margin-top: 3px;
  display: flex;
  overflow-x: auto;
}
.down-song::-webkit-scrollbar{
  display: none;
}
.item-inner {
  margin-top: 7px;
  width: 300px;
  display: flex;
  height: 50px;
  line-height: 50px;
}
.icon_song {
  width: 50px;
}
.el-image {
  width: 100%;
  border-radius: 5px;
}
.text {
  width: 190px;
  margin-left: 10px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #acabab;
}
.song_name {
  color: #3a3939;
}
.icon_play {
  width: 50px;
  text-align: center;
}
img {
  width: 20px;
  border: 1px solid #dddddd;
  border-radius: 25px;
  display: inline-block;
  vertical-align: middle;
}
</style>
