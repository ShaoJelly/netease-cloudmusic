<template>
  <div class="col">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'DjCol',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.col{
  width: 50%;
}
</style>
