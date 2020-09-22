<template>
  <div class="toplist-item-two">
    <div class="img">
      <slot name="top"></slot>
      <div class="updateFrequency">
        <slot name="center"></slot>
      </div>
    </div>
    <div class="text">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToplistItemTwo",
  data() {
    return {
      isOne: false,
    };
  },
};
</script>

<style scoped>
.toplist-item-two {
  width: 30%;
}
.img {
  position: relative;
}
img {
  width: 100%;
  border-radius: 5px;
}
.updateFrequency {
  font-size: 10px;
  color: #aaaaaa;
  position: absolute;
  bottom: 10px;
  left: 5px;
}
.text {
  font-size: 12px;
}
</style>
