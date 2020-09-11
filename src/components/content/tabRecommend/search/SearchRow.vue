<template>
  <div class="search-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'SearchRow',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.search-row {
  display: flex;
  height: 40px;
  width: 100%;
  margin-top: 10px;
}
</style>
