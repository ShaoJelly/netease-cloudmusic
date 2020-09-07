<template>
  <tab-recommend>
    <up slot="up">
      <b slot="up-left">人气歌单推荐</b>
      <button slot="up-right">查看更多</button>
    </up>
    <down-playlist :playlist="$store.state.recommendPlaylist" slot="down">
    </down-playlist>
  </tab-recommend>
</template>

<script>
import TabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import DownPlaylist from "components/content/tabRecommend/DownPlaylist";

export default {
  name: "DiscoverTabRecommend",
  data() {
    return {
      
    };
  },
  components: {
    TabRecommend,
    Up,
    DownPlaylist,
  },
};
</script>

<style scoped>
</style>
