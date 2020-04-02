<template>
  <div class="header">
    <!-- <span>{{ user.nickName }}</span> -->
    <!-- <img src="@img/sign-out.png" alt="退出" class="curp" @click="dropOut" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // user: JSON.parse(sessionStorage.getItem('userInfos')),
    };
  },
  methods: {
    // async dropOut() {
    //   try {
    //     await this.$api.Logout({
    //       userIdentifier: sessionStorage.getItem('userIdentifier'),
    //       // userType: 1,
    //       mac: sessionStorage.getItem('mac'),
    //     });
    //     sessionStorage.clear();
    //     this.$router.push('/').then();
    //     this.$notify.success({
    //       title: '成功',
    //       message: '退出成功',
    //     });
    //   } catch (e) {}
    // },
  },
  mounted() {},
  created() {},
  computed: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: $sidebarHeaderHeight;
  background: $-background-color;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: $-color-white;
}
</style>
