<template>
  <div class="ToplistRow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ToplistRow",
  data() {
    return {};
  },
  props: {
    row: {
      type: Array,
    },
  },
  methods: {},
};
</script>

<style scoped>
.ToplistRow {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
