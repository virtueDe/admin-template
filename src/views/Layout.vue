<template>
  <div class="layout">
    <left-nav />
    <div class="app-main">
      <Header></Header>
      <berad-nav v-if="isBeradNav"></berad-nav>
      <router-view class="layout-main" />
      <!-- <transition mode="out-in" name="el-fade-in-linear">
        <keep-alive max="2">
        </keep-alive>
      </transition> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {},
  mounted() {},
  computed: {
    isBeradNav() {
      return !this.$route.meta.HideBeradNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  .app-main {
    width: calc(100% - #{$sidebarWidth});
    display: inline-block;
    height: 100%;
    vertical-align: top;
  }
}
//   width: 100%
//   height: 100vh

//   .app-main
//     width: calc(100% - #{$sidebarWidth})
//     display: inline-block
//     height: 100%
//     vertical-align: top

//     .layout-content
//       width: 100%
//       height: calc(100% - #{$sidebarHeaderHeight})
//       background-color: $-background-color-1
</style>
