<template>
  <div class="bread-nav">
    <span v-for="(item, index) in levelList" :key="index">
      <!-- :class="[!item.path ? 'shallow' : 'active']" -->
      <a
        @click="jump(item, index)"
        :class="[
          levelList.length === 1 || index === levelList.length - 1
            ? 'shallow'
            : 'active',
        ]"
        >{{ item.meta.title }}</a
      >
      <span
        v-show="index < levelList.length - 1 && levelList[index + 1].meta.title"
        >&nbsp;/&nbsp;</span
      >
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // nav: [{ name: '订单查询' }],
      levelList: null,
    };
  },
  watch: {
    $route(route) {
      // 重定向无需更新面包屑
      // if (route.path.startsWith('/redirect/')) return;
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      const matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      this.levelList = matched.filter((item) => item.meta && item.meta.title);
    },
    jump(item, index) {
      if (this.levelList.length === 1) return;
      if (index === this.levelList.length - 1) return;
      this.$router.push({ path: item.path });
      console.log(item);
    },
  },
  mounted() {},
  created() {
    this.getBreadcrumb();
  },
};
</script>

<style lang="scss" scoped>
.bread-nav {
  height: $beradNavHeight;
  width: 100%;
  border: 1px solid greenyellow;
  .active {
    cursor: pointer;
    color: greenyellow;
  }
  .shallow {
    color: $-font-color-1;
  }
}
</style>
