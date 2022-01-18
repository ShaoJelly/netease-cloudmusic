<template>
  <tab-recommend>
    <up slot="up">
      <span slot="up-center">热门分类</span>
    </up>
    <down slot="down">
      <dj-row
        :class="{ first: index == 0 }"
        v-for="(row, index) in classify"
        :key="index"
      >
        <dj-col
          :class="{ second: inde == 1 }"
          v-for="(col, inde) in row"
          :key="inde"
        >
        <img :src="col.pic56x56Url" alt="">
          <span>{{ col.name }}</span>
        </dj-col>
      </dj-row>
    </down>
  </tab-recommend>
</template>

<script>
import TabRecommend from "components/content/tabRecommend/TabRecommend";
import Up from "components/content/tabRecommend/Up";
import Down from "components/content/tabRecommend/Down";
import DjRow from "components/content/tabRecommend/djClassify/DjRow";
import DjCol from "components/content/tabRecommend/djClassify/DjCol";

export default {
  name: "Classify",
  data() {
    return {
      classify: [],
    };
  },
  props: {
    djClassify: {
      type: Array,
    },
  },
  watch: {
    djClassify(newVal, oldVal) {
      newVal && this.setDjClassify(newVal);
    },
  },
  methods: {
    setDjClassify(data) {
      let d = [];
      for (let i in data) {
        d.push(data[i]);
        if ((i * 1 + 1) % 2 == 0) {
          this.classify.push(d);
          d = [];
        }
      }
    },
  },
  components: {
    TabRecommend,
    Up,
    Down,
    DjRow,
    DjCol,
  },
};
</script>

<style scoped>
.first {
  border-top: 1px solid #eeeeee;
}
.second {
  border-left: 1px solid #eeeeee;
}
img{
  width: 20%;
}
</style>
