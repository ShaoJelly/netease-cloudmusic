<template>
  <search>
    <search-scroll class="search-scroll">
      <tab-recommend>
      <up slot="up">
        <b class="up-left" slot="up-left">热搜榜</b>
      </up>
      <down-search slot="down"></down-search>
    </tab-recommend>
    <div style="height:20px"></div>
    </search-scroll>
  </search>
</template>

<script>
import SearchScroll from 'components/content/scroll/Scroll'
import Search from "components/content/search/Search";
import tabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import DownSearch from 'components/content/tabRecommend/DownSearch'
export default {
  name: "DiscoverSearch",
  data() {
    return {};
  },
  components: {
    Search,
    tabRecommend,
    Up,
    DownSearch,
    SearchScroll
  },
};
</script>

<style scoped>
.up b {
  font-size: 13px;
}
.search-scroll{
  height: 100%;
}
</style>
