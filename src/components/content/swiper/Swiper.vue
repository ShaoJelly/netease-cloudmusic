<template>
  <div class="swiper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {};
  },
};
</script>

<style scoped>
.swiper {
  margin-top: 6px;
  z-index: 10;
}
</style>
