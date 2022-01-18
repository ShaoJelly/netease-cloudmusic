<template>
  <div class="shell">
    <div class="shell-margin">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shell",
  data() {
    return {};
  },
};
</script>

<style scoped>
.shell {
  position: fixed;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10;
}
.shell-margin {
  margin: auto 8px;
  height: 100%;
}
</style>
