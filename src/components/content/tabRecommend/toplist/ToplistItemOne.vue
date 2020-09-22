<template>
  <div class="toplist-item-one">
    <slot name="img"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ToplistItemOne",
  data() {
    return {};
  },
};
</script>

<style scoped>
.toplist-item-one {
  display: flex;
  margin-bottom: 10px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>
