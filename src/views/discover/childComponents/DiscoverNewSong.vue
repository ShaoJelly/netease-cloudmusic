<template>
  <tab-recommend>
    <up slot="up">
      <div class="up-left" slot="up-left">
        <b
          :class="{padding_r:ind == 0,padding_l:ind == tab.length - 1,black:currentIndex == ind}"
          v-for="(item, ind) in tab"
          :key="ind"
          @click="changeType(ind)"
        >{{item}}</b>
      </div>
      <button style="outline:medium;" slot="up-right">{{bottomText}}</button>
    </up>
    <new-song-scroll
      slot="down"
      class="new-song-scroll"
      :scrollX="scrollX"
      :scrollY="scrollY"
      :contentWidth="contentWidth"
    >
      <down ref="down" class="down">
        <song-out-item ref="songOutItem" v-for="(song_item,index) in songOutItem" :key="index">
          <song-item class="song-item" v-for="(item,inde) in song_item" :key="inde">
            <div class="left">
              <img v-lazy="item.picUrl" :key="item.id" @load="scrollRefresh" />
            </div>
            <div class="center">
              <span class="song_name">{{item.name}}</span>
              <span>&nbsp;-&nbsp;</span>
              <span
                class="artists"
                v-for="(artist,index) in artists(item)"
                :key="index"
              >{{artistsFilter(artist,index)}}</span>
            </div>
            <div class="right">
              <img src="~assets/img/discover/tabRecomend/red_play.png" />
            </div>
          </song-item>
        </song-out-item>
      </down>
    </new-song-scroll>
  </tab-recommend>
</template>

<script>
import TabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import Down from "components/content/tabRecommend/Down";
import SongOutItem from "components/content/tabRecommend/song/SongOutItem";
import songItem from "components/content/tabRecommend/song/SongIten";
import NewSongScroll from "components/content/scroll/Scroll";

import { debouce } from "common/utils";

export default {
  name: "DiscoverNewSong",
  data() {
    return {
      timer: null,
      scrollX: true,
      scrollY: false,
      contentWidth: 0,
      currentIndex: 0,
      bottomText: "更多新歌",
    };
  },
  props: {
    newSong: {
      type: Array,
    },
    tab: {
      type: Array,
    },
  },
  computed: {
    songOutItem() {
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
  methods: {
    //防抖scroll高度
    scrollRefresh() {
      this.timer = debouce(this.refresh, 500, this.timer);
    },
    refresh() {
      this.$emit("scrollRefresh");
      this.contentWidth = this.songOutItem.length * 300;
    },
    //获取padding
    getPadding(ind, tab) {
      if (ind == 0) {
        return ["padding_r"];
      } else if (ind == tab.length - 1) {
        return ["padding_l"];
      } else {
        return ["padding_r_l"];
      }
    },
    //
    changeType(ind) {
      this.currentIndex = ind;
      if (ind == 0) {
        this.bottomText = "更多新歌";
      } else {
        this.bottomText = "更多新碟";
      }
    },
  },
  components: {
    TabRecommend,
    Up,
    Down,
    SongOutItem,
    songItem,
    NewSongScroll,
  },
};
</script>

<style scoped>
.down {
  display: flex;
}
.song-item {
  margin-top: 7px;
  width: 100%;
  display: flex;
  height: 50px;
  line-height: 50px;
}
.left {
  width: 50px;
}
.up-left {
  display: flex;
}
.left img {
  width: 100%;
  border-radius: 5px;
}
.center {
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
.right {
  width: 50px;
  text-align: center;
}
.right img {
  width: 20px;
  border: 1px solid #dddddd;
  border-radius: 25px;
  display: inline-block;
  vertical-align: middle;
}
b {
  font-size: 15px;
  color: #dddddd;
}
.new-song-scroll {
  width: 100%;
}
.padding_r {
  padding-right: 10px;
}
.padding_l {
  padding-left: 10px;
  border-left: 1px solid #dddddd;
}
.black {
  color: black;
}
</style>
