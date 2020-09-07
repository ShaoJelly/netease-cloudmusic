<!--  -->
<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>

<style  scoped>
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f3f3;
  /* box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.1); */
}
</style>
