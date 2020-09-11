<template>
  <div class="up">
    <slot name="up-left"></slot>
    <slot name="up-right"></slot>
  </div>
</template>

<script>
export default {
  name: "Up",
  data() {
    return {};
  },
};
</script>

<style scoped>
.up {
  display: flex;
  justify-content: space-between;
}
.up button {
  border-radius: 25px;
  border: 1px solid #dddddd;
  background-color: white;
  font-size: 12px;
}
</style>
