<template>
  <div class="down-search">
    <div class="search-row" v-for="(row,index) in $store.state.hotDetail" :key="index">
      <div class="search-col" v-for="(col,inde) in row" :key="inde">
        <div
          :class="{red:getSearchNumber(index,inde)<5}"
          class="search-number"
        >{{getSearchNumber(index,inde)}}</div>
        <div class="search-data">
          <div :class="{bold:getSearchNumber(index,inde)<5}" class="search-word">
            <span>{{col.searchWord}}</span>
            <i class="hot" v-if="col.iconType == 1">HOT</i>
            <i class="new" v-else-if="col.iconType == 2">NEW</i>
            <span class="up" v-else-if="col.iconType == 5">↑</span>
          </div>
          <span class="content">{{col.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownSearch",
  data() {
    return {};
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
};
</script>

<style scoped>
.down-search {
  margin-top: 5px;
}
.search-row {
  display: flex;
  height: 40px;
  width: 100%;
  margin-top: 10px;
}
.search-col {
  display: flex;
  width: 50%;
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
.up,.hot{
  color: red;
  margin-left: 5px;
  font-weight: bold;
}
.new{
  margin-left: 5px;
  font-weight: bold;
  color: #0dc435;
}
</style>
