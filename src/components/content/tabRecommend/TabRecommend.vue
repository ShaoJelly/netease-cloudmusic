<template>
  <div class="tab-recommend">
    <slot name="up"></slot>
    <slot name="down"></slot>
  </div>
</template>

<script>
export default {
  name: "TabRecommend",
  data() {
    return {};
  },
  components: {
  },
};
</script>

<style scoped>
.tab-recommend {
  margin-top: 20px;
  width: 100%;
}
</style>
