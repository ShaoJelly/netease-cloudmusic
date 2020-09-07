<template>
  <div v-infinite-scroll="load" class="scroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {};
  },
  methods: {
    load() {},
  },
};
</script>

<style scoped>
.scroll {
  overflow-x: hidden;
  overflow-y: auto;
}
.scroll::-webkit-scrollbar {
  /*滚动条整体样式*/
  display: none;
}
</style>
