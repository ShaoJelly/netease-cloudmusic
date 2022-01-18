<template>
  <div class="item-two">
    <div class="img">
      <div class="img_background">
        <slot name="img"></slot>
      </div>
    </div>
    <div class="name">
      <slot name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemTwo",
  data() {
    return {};
  },
};
</script>

<style scoped>
.item-two {
  width: 25%;
  font-size: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.img {
  width: 15vw;
  height: 15vw;
  margin: 0 auto;
}
.img_background {
  width: 100%;
  height: 100%;
  border-radius: 15vw;
  background-color: rgb(233, 16, 16);
  position: relative;
}
img {
  position: absolute;
  width: 50%;
  left: 25%;
  top: 25%;
}
.name{
  margin-top: 5px;
}
</style>
