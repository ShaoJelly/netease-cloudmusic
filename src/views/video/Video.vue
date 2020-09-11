<template>
  <div>
    视频
    <div class="wrapper" ref="wrapper">
      <div class="content" ref="content">
        <ul ref="ul">
          <li>
            <div style="height: 200px;background-color: red;"></div>
          </li>
          <li>
            <div style="height: 200px;background-color: blue;"></div>
          </li>
          <li>
            <div style="height: 200px;background-color: gray;"></div>
          </li>
          <li>
            <div style="height: 200px;background-color: pink;"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import Scroll from "components/content/scroll/Scroll";
import BScroll from "better-scroll";

export default {
  name: "Video",
  data() {
    return {
      children: null,
      scroll: null,
    };
  },
  props: {
    // 循环轮播
    loop: {
      type: Boolean,
      default: true,
    },
    // 是否自动轮播
    autoPlay: {
      type: Boolean,
      default: true,
    },
    // 轮播间隔
    interval: {
      type: Number,
      default: 2000,
    },
    animDuration: {
      type: Number,
      default: 1000,
    },
  },
  mounted() {
    this.setWidth();
    this.init();
  },
  methods: {
    setWidth() {
      // 获取元素下面的所有子元素
      this.children = this.$refs.ul.children;
      // 设置一个默认宽度，也就是设置class="content"的div的宽度
      let contentWidth = 0;
      // 获取class="wrapper"的宽度，这行代码的意思大概就是想要知道设备的宽度（或者就是盛放图片的盒子的宽度）
      let wrapperWidth = this.$refs.wrapper.clientWidth;
      // 循环一下，获取有多少个子元素，设置子元素的宽度为设备的宽度，并且将所有子元素的宽度相加设置所有子元素横着的时候的宽度
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        child.style.width = wrapperWidth + "px";
        contentWidth += wrapperWidth;
      }
      // 最终设置宽度为这个
      this.$refs.content.style.width = contentWidth + "px";
    },
    init() {
      // 轮播插件的方法
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          scrollY: false,
          momentum: true,
          click: true,
          snap: {
            loop: true,
            threshold: 0.3,
            speed: 400,
          },
        });
        if (this.autoPlay) {
          this._autoPlay();
        }
      });
    },
    _autoPlay() {
      for (let i = 1; i < this.children.length; i++) {
        setTimeout(() => {
          this.scroll.scrollTo(
            -this.$refs.wrapper.clientWidth * i,
            0,
            this.animDuration
          );
        }, i * this.interval + this.animDuration * (i - 1));
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  overflow: hidden;
}
.content li {
  list-style: none;
}
ul {
  display: flex;
  padding-inline-start: 0;
}
</style>
