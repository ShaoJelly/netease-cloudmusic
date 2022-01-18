<template>
  <nav-bar :span="span">
    <div slot="left" class="el-icon-arrow-left" @click="back"></div>
    <div slot="center">
      <span>电台分类</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

export default {
  name:'DjClassifyNavBar',
  data() {
    return {
      span: {
        left: 3,
        center: 18,
        right: 3,
      },
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  components: {
    NavBar,
  },
}
</script>

<style scoped>

</style>
