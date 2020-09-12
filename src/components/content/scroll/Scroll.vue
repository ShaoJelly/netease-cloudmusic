<template>
  <div class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {Toast} from 'mint-ui'

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
    pullDownRefresh: {
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
            pullDownRefresh: {
              threshold: 20, // 下拉距离超过30px触发pullingDown事件
              stop: 10, // 回弹停留在距离顶部20px的位置
            },
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
        if (this.pullDownRefresh) {
          this._pullingDown();
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
        Toast("上拉加载")
        //手动结束上拉加载
        this.scroll.finishPullUp();
      });
    },
    _pullingDown() {
      this.scroll.on("pullingDown", () => {
        this.$emit("pullingDownRefresh");
        this.scroll.refresh();
      });
    },
    _finishPullDown() {
      this.scroll.finishPullDown(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
    },
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
