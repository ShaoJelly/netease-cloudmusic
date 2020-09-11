<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      width: 0,
    };
  },
  props: {
    contentWidth: {
      type: Number,
    },
    probeType: {
      type: Number,
      default: 1,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    probeType: {
      type: Number,
    },
    click: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    isShow() {
      return this.$store.state.show;
    },
  },
  watch: {
    contentWidth(newVal, oldVal) {
      this.width = newVal;
      newVal && this._setSCrollWidth();
    },
    isShow(newVal, oldVal) {
      if (newVal) {
        this._initScroll();
      }
    },
  },
  mounted() {
    if (this.contentWidth) {
      this.$refs.content.style.width = this.contentWidth + "px";
    }
    this._initScroll();
  },
  methods: {
    _setSCrollWidth() {
      this.$refs.content.style.width = this.width + "px";
      this.scroll.refresh();
    },
    _initScroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            click: this.click,
            scrollX: this.scrollX,
            scrollY: this.scrollY,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
          });
        } else {
          this.scroll.refresh();
        }
        if (this.probeType > 0) {
          this._scroll();
        }
        if (this.pullUpLoad) {
          this._pullingUp();
        }
      });
    },
    _scroll() {
      this.scroll.on("scroll", (position) => {
        console.log(position);
      });
    },
    _pullingUp() {
      this.scroll.on("pullingUp", () => {
        console.log("上拉加载刷新");
        //手动结束上拉加载
        this.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
