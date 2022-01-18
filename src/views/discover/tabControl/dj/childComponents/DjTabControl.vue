<template>
  <tab-control-two>
    <item-two @click.native="toDjClassify">
      <img slot="img" src="~assets/img/discover/tabControl/Dj/classify.png" />
      <span slot="name">电台分类</span>
    </item-two>
     <item-two>
      <img slot="img" src="~assets/img/discover/tabControl/Dj/rank.png" />
      <span slot="name">电台排行</span>
    </item-two>
    <item-two>
      <img slot="img" src="~assets/img/discover/tabControl/Dj/pay.png" />
      <span slot="name">付费精品</span>
    </item-two>
    <item-two>
      <img slot="img" src="~assets/img/discover/tabControl/Dj/theater.png" />
      <span slot="name">声之剧场</span> 
    </item-two>
  </tab-control-two>
</template>

<script>
import TabControlTwo from "components/content/tabControl/TabControlTwo";
import ItemTwo from "components/content/tabControl/ItemTwo";

export default {
  name: "DjTabControl",
  data() {
    return {};
  },
  components: {
    TabControlTwo,
    ItemTwo,
  },
  methods: {
    toDjClassify(){
      this.$router.push({ name:'djclassify' })
    }
  },
};
</script>

<style scoped>
</style>
