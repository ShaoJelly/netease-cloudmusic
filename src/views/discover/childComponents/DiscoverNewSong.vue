<template>
  <tab-recommend>
    <up slot="up">
      <b slot="up-left">新歌</b>
      <button slot="up-right">更多新歌</button>
    </up>
    <down-song slot="down"></down-song>
  </tab-recommend>
</template>

<script>
import TabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import DownSong from "components/content/tabRecommend/DownSong";

export default {
  name: "DiscoverNewSong",
  data() {
    return {};
  },
  components: {
    TabRecommend,
    Up,
    DownSong,
  },
};
</script>

<style scoped>
</style>
