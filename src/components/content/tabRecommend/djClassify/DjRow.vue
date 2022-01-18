<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'DjRow',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.row{
  margin-top: 10px;
  display: flex;
  border-bottom: 1px solid #eeeeee;
  text-align: center;
  padding: 10px 0;
}
</style>
