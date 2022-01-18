<template>
  <shell class="dj-classify">
    <dj-classify-nav-bar></dj-classify-nav-bar>
    <scroll class="dj-classify-scroll">
      <classify :djClassify="djClassify"></classify>
    </scroll>
  </shell>
</template>

<script>
import Shell from "components/content/shell/Shell";
import Scroll from "components/content/scroll/Scroll";

import Classify from "./childComponents/Classify";
import DjClassifyNavBar from "../djClassify/childComponents/DjClassifyNavBar";

import * as api from "network/api";

export default {
  name: "DjClassify",
  data() {
    return {
      djClassify:[]
    };
  },
  components: {
    Shell,
    DjClassifyNavBar,
    Scroll,
    Classify,
  },
  created() {
    this._getDjClassify();
  },
  methods: {
    _getDjClassify() {
      api.getDjClassify().then((res) => {
        this.djClassify = res.data.categories
      });
    },
  },
};
</script>

<style scoped>
.dj-classify {
  z-index: 14;
}
.dj-classify-scroll {
  height: calc(100% - 44px);
}
</style>
