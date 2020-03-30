<template>
  <div class="home">
    <div class="case">{{ test }}</div>
  </div>
</template>

<script>
// @ is an alias to /sr

export default {
  name: 'Home',
  data() {
    return {
      test: '测试',
    };
  },
  components: {},
  mounted() {
    console.log(process.env.VUE_APP_API);
  },
};
</script>
<style lang="scss" scoped>
.case {
  width: 100px;
  height: 100px;
  background-color: $-color-primary-1;
  @extend .abscenter;
}
</style>
