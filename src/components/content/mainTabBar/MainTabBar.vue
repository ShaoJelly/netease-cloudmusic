<template>
  <div class="main-tabbar">
    <tab-bar>
      <tab-bar-item item="/discover">
        <img slot="item-img" src="~assets/img/tabBar/discover/discover.png" alt />
        <img slot="item-img-active" src="~assets/img/tabBar/discover/discover_active.png" alt />
        <span slot="item-text">发现</span>
      </tab-bar-item>
      <tab-bar-item item="/video">
        <img slot="item-img" src="~assets/img/tabBar/video/video.png" />
        <img slot="item-img-active" src="~assets/img/tabBar/video/video_active.png" />
        <span slot="item-text">视频</span>
      </tab-bar-item>
      <tab-bar-item item="/profile">
        <img slot="item-img" src="~assets/img/tabBar/myMusic/mymusic.png"/>
        <img slot="item-img-active" src="~assets/img/tabBar/myMusic/mymusic_active.png"/>
        <span slot="item-text">我的</span>
      </tab-bar-item>
      <tab-bar-item item="/cloud">
        <img slot="item-img" src="~assets/img/tabBar/cloud/cloud.png"/>
        <img slot="item-img-active" src="~assets/img/tabBar/cloud/cloud_active.png"/>
        <span slot="item-text">云村</span>
      </tab-bar-item>
      <tab-bar-item item="/account">
        <img slot="item-img" src="~assets/img/tabBar/profile/profile.png"/>
        <img slot="item-img-active" src="~assets/img/tabBar/profile/profile_active.png"/>
        <span slot="item-text">账号</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
