<template>
  <div class="loading">
    <span class="loading-text">加载中</span>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {};
  },
};
</script>

<style scoped>
.loading {
  width: 100%;
  text-align: center;
  height: 20px;
}
.loading-text{
  font-size: 13px;
}
</style>
