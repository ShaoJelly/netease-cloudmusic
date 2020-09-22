<template>
  <shell>
    <toplist-nav-bar></toplist-nav-bar>
    <scroll ref="toplistScroll" class="toplist-scroll">
      <official-list :official="official"></official-list>
      <more @refreshScroll="refreshScroll" :more="more"></more>
    </scroll>
  </shell>
</template>

<script>
import ToplistNavBar from "./childComponents/ToplistNavBar";
import OfficialList from "./childComponents/OfficialList";
import More from "./childComponents/More";

import Scroll from "components/content/scroll/Scroll";
import Shell from "components/content/tabControl/Shell";

import * as api from "network/api";

export default {
  name: "Toplist",
  data() {
    return {
      official: [],
      more: [],
    };
  },
  methods: {
    //获取排行榜
    _getToplist() {
      let data = []
      api.getToplist().then((res) => {
        for(let i in res.data.list){
          data.push(res.data.list[i])
          if (i == 3) {
            this.official = data
            data = []
          }else if (i == res.data.list.length -1 ) {
            this.more = data
          }
        }
      });
    },
    refreshScroll() {
      this.$refs.toplistScroll.scroll.refresh();
    },
  },
  created() {
    this._getToplist();
  },
  components: {
    ToplistNavBar,
    Shell,
    Scroll,
    OfficialList,
    More,
  },
};
</script>

<style scoped>
.toplist-scroll {
  height: calc(100% - 44px);
}
</style>
