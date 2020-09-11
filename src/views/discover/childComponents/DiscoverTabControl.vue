<template>
  <div class="discover-tab-control">
    <tab-control-scroll class="tab-control-scroll" :scrollX="scrollX" :scrollY="scrollY" :contentWidth="contentWidth">
      <tab-control></tab-control>
    </tab-control-scroll>
  </div>
</template>

<script>
import TabControlScroll from "components/content/scroll/Scroll";
import TabControl from "../tabControl/TabControl";

export default {
  name: "DiscoverTabControl",
  data() {
    return {
      scrollX: true,
      scrollY: false,
      contentWidth: 700,
    };
  },
  components: {
    TabControlScroll,
    TabControl,
  },
};
</script>

<style scoped>
.tab-control-scroll{
  width: 100%;
}
</style>
