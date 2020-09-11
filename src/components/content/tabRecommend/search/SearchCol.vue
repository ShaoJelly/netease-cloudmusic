<template>
  <div class="search-col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'SearchCol',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.search-col {
  display: flex;
  width: 50%;
  height: 100%;
}
</style>
