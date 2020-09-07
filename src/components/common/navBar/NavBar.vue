<template>
  <div class="nav-bar">
    <el-row>
      <el-col :span="span.left">
        <div class="left">
          <slot name="left"></slot>
        </div>
      </el-col>
      <el-col :span="span.center">
        <div class="center">
          <slot name="center"></slot>
        </div>
      </el-col>
      <el-col :span="span.right">
        <div class="right">
          <slot name="right"></slot>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  props: {
    span: {
      type: Object,
      default() {
        return {
          left: 3,
          center: 21,
          right: 0,
        };
      },
    },
  },
};
</script>

<style scoped>
.el-row {
  height: 100%;
}
.el-col {
  height: 100%;
}
.nav-bar {
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left {
  position: relative;
  height: 100%;
}
</style>
