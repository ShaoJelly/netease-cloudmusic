<template>
  <search>
    <search-scroll ref="searchScroll" class="search-scroll">
      <tab-recommend class="recommend">
        <up slot="up">
          <b slot="up-left">热搜榜</b>
        </up>
        <down slot="down">
          <search-row v-for="(row,index) in hotDetail" :key="index">
            <search-col v-for="(col,inde) in row" :key="inde">
              <div
                :class="{red:getSearchNumber(index,inde)<5}"
                class="search-number"
              >{{getSearchNumber(index,inde)}}</div>
              <div class="search-data">
                <div :class="{bold:getSearchNumber(index,inde)<5}" class="search-word">
                  <span>{{col.searchWord}}</span>
                  <i class="hot" v-if="col.iconType == 1">HOT</i>
                  <i class="new" v-else-if="col.iconType == 2">NEW</i>
                  <span class="litre" v-else-if="col.iconType == 5">↑</span>
                </div>
                <span class="content" @load="scrollRefresh">{{col.content}}</span>
              </div>
            </search-col>
          </search-row>
        </down>
      </tab-recommend>
    </search-scroll>
  </search>
</template>

<script>
import SearchScroll from "components/content/scroll/Scroll";
import Search from "components/content/search/Search";
import tabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import Down from "components/content/tabRecommend/Down";
import SearchRow from "components/content/tabRecommend/search/SearchRow";
import SearchCol from "components/content/tabRecommend/search/SearchCol";

export default {
  name: "DiscoverSearch",
  data() {
    return {};
  },
  props: {
    hotDetail: {
      type: Array,
    },
  },
  computed: {
    getSearchNumber() {
      return (index, inde) => {
        if (inde == 1) {
          return (index + 1) * 2;
        } else {
          return index * 2 + 1;
        }
      };
    },
  },
  methods: {
    scrollRefresh() {
      this.refresh();
    },
    refresh() {
      this.$nextTick(() => {
        this.$refs.searchScroll.scroll.refresh();
      });
    },
  },
  components: {
    Search,
    tabRecommend,
    Up,
    SearchScroll,
    Down,
    SearchRow,
    SearchCol,
  },
};
</script>

<style scoped>
.recommend{
  margin-top: 0;
}
b {
  font-size: 12px;
}
.search-scroll {
  height: 100%;
}
.search-number {
  line-height: 40px;
  flex: 1;
  text-align: center;
  color: #8f8c8c;
}
.search-data {
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 120px;
}
.search-word {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content {
  font-size: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #8f8c8c;
}
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
.litre,
.hot {
  color: red;
  margin-left: 5px;
  font-weight: bold;
}
.new {
  margin-left: 5px;
  font-weight: bold;
  color: #0dc435;
}
</style>
