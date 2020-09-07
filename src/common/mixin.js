export const mixin = {
  filters: {
    transPlayCount(count) {
      const c = (count / 10000).toFixed(0);
      if(c == 0){
        return count
      }
      if (c.toString().length <= 4) {
        return c + "万";
      } else{
        return (c / 10000).toFixed(0) + "亿";
      }
    },
  },
  methods: {
    getBodyStyle() {
      return {
        padding:
          this.top +
          "px " +
          this.right +
          "px " +
          this.botton +
          "px " +
          this.left +
          "px",
      };
    },
  },
}