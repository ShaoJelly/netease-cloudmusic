<template>
  <div class="up">
    <div class="up-left">
      <slot name="up-left"></slot>
    </div>
    <div class="up-center">
      <slot name="up-center"></slot>
    </div>
    <div class="up-right">
      <slot name="up-right"></slot>
    </div>
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
.up-center{
  font-size: 15px;
}
</style>
