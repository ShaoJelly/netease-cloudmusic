<template>
  <div class="search" :style="{zIndex:$store.state.zIndex}">
    <transition name="fade">
      <div v-show="$store.state.show" class="search-box">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {};
  },
};
</script>

<style scoped>
.search {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: white;
}
.search-box {
  margin: auto 8px;
  height: 100%;
  background-color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
