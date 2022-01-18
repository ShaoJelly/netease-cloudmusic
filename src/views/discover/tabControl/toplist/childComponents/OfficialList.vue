<template>
  <div class="official-list">
    <tab-recommend>
      <up slot="up">
        <b slot="up-left">官方榜</b>
      </up>
      <down slot="down" class="down">
        <toplist-item-one v-for="(item,index) in official" :key="index">
          <div class="img">
            <img @load="load" slot="img" v-lazy="item.coverImgUrl" />
            <span class="updateFrequency">{{item.updateFrequency}}</span>
          </div>
          <div v-if="item.tracks.length > 0" class="tracks">
            <span class="text" v-for="(text,inde) in item.tracks" :key="inde">{{getText(text,inde)}}</span>
          </div>
        </toplist-item-one>
      </down>
    </tab-recommend>
  </div>
</template>

<script>
import TabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import Down from "components/content/tabRecommend/Down";
import ToplistItemOne from "components/content/tabRecommend/toplist/ToplistItemOne";

import { debouce } from "common/utils";

export default {
  name: "",
  data() {
    return {
      timer : null
    };
  },
  props: {
    official: {
      type: Array,
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
  computed: {
    getText() {
      return (text, inde) => {
        return inde + 1 + "." + text.first + "-" + text.second;
      };
    },
    showTracks() {
      return (item) => {
        if (condition) {
          item.tracks.length > 0;
          return true;
        }
        return false;
      };
    },
  },
  components: {
    ToplistItemOne,
    TabRecommend,
    Up,
    Down,
  },
};
</script>

<style scoped>
.down{
  margin-top: 10px;
}
.tracks {
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #aaaaaa;
}
.text {
  font-size: 13px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.img {
  position: relative;
  width: 30%;
  margin-right: 5%;
}
.updateFrequency {
  color: #aaaaaa;
  font-size: 10px;
  position: absolute;
  bottom: 5px;
  left: 5px;
}
</style>
