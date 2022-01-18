<template>
  <div class="tab-control-total">
    <scroll
      class="tab-control-scroll"
      :contentWidth="contentWidth"
      :scrollX="scrollX"
      :scrollY="scrollY"
    >
      <tab-control-one :tab="tab"></tab-control-one>
    </scroll>
    <div class="total">
      <div class="el-icon-menu"></div>
    </div>
  </div>
</template>

<script>
import Scroll from "components/content/scroll/Scroll";
import TabControlOne from "components/content/tabControl/TabControlOne";

export default {
  name: "PlaylistTabControl",
  data() {
    return {
      scrollX: true,
      scrollY: false,
      contentWidth: 460,
      tab: ["推荐", "官方", "精品", "欧美", "民谣", "电子", "轻音乐", "摇滚"],
    };
  },
  components: {
    TabControlOne,
    Scroll,
  },
};
</script>

<style scoped>
.tab-control-scroll {
  width: 90%;
}
.tab-control-total {
  display: flex;
}
.total {
  width: 10%;
  text-align: center;
}
.el-icon-menu {
  font-size: 20px;
  vertical-align: middle;
  line-height: none;
}
</style>
