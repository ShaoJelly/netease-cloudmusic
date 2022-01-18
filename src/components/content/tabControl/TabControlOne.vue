<template>
  <div class="tab-control-one">
    <div
      class="item"
      :class="{mg:index > 0, red:index == currentIndex ,orange: index == 2&&currentIndex != 2 ? true :false}"
      @click="click(index)"
      v-for="(item,index) in tab"
      :key="index"
    >
      <b>{{item}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    click(index) {
      this.currentIndex = index;
    },
  },
  props: {
    tab: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.tab-control-one {
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eeeeee;
}
.item {
  padding: 0 5px 0 5px;
  height: 25px;
}
b {
  font-size: 14px;
}
.mg {
  margin-left: 20px;
}
.red {
  color: red;
  border-bottom: 2px solid red;
}
.orange{
  color: orange;
}
</style>
