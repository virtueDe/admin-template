export default {
  OrderNewType: {
    list: [],
    allList() {
      return [
        {
          label: '全部',
          value: null,
        },
      ].concat(this.list);
    },
    // 根据枚举值获取名称
    getName(val) {
      switch (val) {
        default:
          return val;
      }
    },
  },
};
