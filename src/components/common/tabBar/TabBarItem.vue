<!--  -->
<template>
  <div id="tabbar-item" @click="toItem">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="isItemTextColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    item: {
      type: String,
      default: "/error",
    },
    itemTextColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.item) != -1;
    },
    isItemTextColor(){
      return this.isActive ? {color:this.itemTextColor} : {}
    }
  },
  methods: {
    toItem() {
      this.$router.replace(this.item);
    },
  },
};
</script>

<style  scoped>
#tabbar-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 44px;
  font-size: 10px;
  margin-top: 5px;
}
img {
  height: 24px;
  width: 24px;
}
</style>
