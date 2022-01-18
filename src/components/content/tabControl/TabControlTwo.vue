<template>
  <div class="tab-control-two">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabControlTwo',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.tab-control-two{
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 10px;
}
</style>
