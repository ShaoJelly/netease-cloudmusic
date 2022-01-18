<template>
  <div class="more">
    <tab-recommend>
      <up slot="up">
        <b slot="up-left">更多榜单</b>
      </up>
      <down slot="down">
        <toplist-row v-for="(row,index) in cMore" :key="index">
          <toplist-item-two v-for="(col,inde) in row" :key="inde">
            <img @load="load" slot="top" v-lazy="col.coverImgUrl" />
            <span slot="center">{{col.updateFrequency}}</span>
            <span slot="bottom">{{col.name}}</span>
          </toplist-item-two>
        </toplist-row>
      </down>
    </tab-recommend>
  </div>
</template>

<script>
import TabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import Down from "components/content/tabRecommend/Down";
import ToplistItemTwo from "components/content/tabRecommend/toplist/ToplistItemTwo";
import ToplistRow from "components/content/tabRecommend/toplist/ToplistRow";

import { debouce } from "common/utils";
import { mixin } from "common/mixin";

export default {
  name: "More",
  data() {
    return {
      timer: null,
      cMore:[]
    };
  },
  mixins: [mixin],
  props: {
    more: {
      type: Array,
    },
  },
  watch: {
    more(newVal, oldVal){
      newVal && this.saveList(newVal,this.cMore)
    }
  },
  components: {
    TabRecommend,
    Up,
    Down,
    ToplistItemTwo,
    ToplistRow,
  },
  methods: {
    //防抖
    load() {
      this.timer = debouce(this.refreshScroll, 100, this.timer);
    },
    refreshScroll() {
      this.$emit("refreshScroll");
    },
  },
};
</script>

<style scoped>
</style>
