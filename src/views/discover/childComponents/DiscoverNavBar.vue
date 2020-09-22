<template>
  <nav-bar :span="span">
    <div slot="left" class="el-icon-microphone"></div>
    <input
      style="outline:medium;"
      slot="center"
      @click="toSearch"
      class="iconfont right-slot"
      :placeholder="icon + placeholder"
    />
    <span slot="right" @click="cancel">取消</span>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name: "DiscoverNavBar",
  data() {
    return {
      icon: "\ue645", //字体的unicode编码 \u加iconfont的unicode字体编码后4位
      span: {
        left: 3,
        center: 21,
        right: 0,
      },
    };
  },
  components: {
    NavBar,
  },
  props: {
    placeholder: {
      type: String,
    },
  },
  methods: {
    toSearch() {
      this.span.left = 0;
      this.span.center = 20;
      this.span.right = 4;
      this.$store.commit('search')
    },
    cancel() {
      this.span.left = 3;
      this.span.center = 21;
      this.span.right = 0;
      this.$store.commit('cancel')
    },
  },
};
</script>

<style scoped>
.left-slot {
  height: 80%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.right-slot {
  border-radius: 25px;
  width: 100%;
  height: 35px;
  border: none;
  background-color: #dddddd54;
  text-align: center;
  padding: 0;
}
.el-icon-microphone{
  font-size: 22px;
}
</style>
